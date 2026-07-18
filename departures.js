function buildStopIndex() {
  const index = {};

  Object.entries(lines).forEach(([lineNumStr, lineData]) => {
    const lineNum = Number(lineNumStr);

    if (!lineData.bwd || !lineData.bwd.stops) {
      lineData.bwd = makeReverse(lineData.fwd, lineData.bwd);
    }

    ["fwd", "bwd"].forEach(dirKey => {
      const dir = lineData[dirKey];
      if (!dir || !dir.stops) return;

      const dest = dir.stops[dir.stops.length - 1][0];
      const allBranchLetters = (dir.branches || []).map(b => b.variantLetter);

      dir.stops.forEach(([stopName, badge, offset]) => {
        const groupKey = `${stopName.trim()} (${badge})`;
        _addToIndex(index, groupKey, badge, {
          lineNum, dirKey, dest, offset,
          baseSchedule: dir.baseSchedule,
          variants: dir.variants || {},
          onlyVariant: null,
          excludeVariants: allBranchLetters,
        });
      });

      (dir.branches || []).forEach(branch => {
        const branchDest = branch.label.replace(/^[→ze\s]+/, "").trim();
        branch.stops.forEach(([stopName, badge, offset]) => {
          const groupKey = `${stopName.trim()} (${badge})`;
          _addToIndex(index, groupKey, badge, {
            lineNum, dirKey,
            dest: branchDest,
            offset,
            baseSchedule: dir.baseSchedule,
            variants: dir.variants || {},
            onlyVariant: branch.variantLetter,
            excludeVariants: null,
          });
        });
      });
    });
  });

  return index;
}

function _addToIndex(index, groupKey, badge, entry) {
  if (!index[groupKey]) index[groupKey] = [];

  const departures = {};
  Object.entries(entry.baseSchedule).forEach(([dayLabel, rawEntries]) => {
    let shifted = rawEntries
      .map(e => shiftEntry(e, entry.offset))
      .sort((a, b) => parseEntry(a).time.localeCompare(parseEntry(b).time));

    if (entry.onlyVariant) {
      shifted = shifted.filter(e => parseEntry(e).variant === entry.onlyVariant);
    } else if (entry.excludeVariants && entry.excludeVariants.length) {
      shifted = shifted.filter(e => !entry.excludeVariants.includes(parseEntry(e).variant));
    }

    if (shifted.length) departures[dayLabel] = shifted;
  });

  if (!Object.keys(departures).length) return;

  const existing = index[groupKey].find(
    e => e.lineNum === entry.lineNum &&
         e.dirKey  === entry.dirKey  &&
         e.dest    === entry.dest
  );

  if (existing) {
    Object.entries(departures).forEach(([dl, times]) => {
      if (!existing.departures[dl]) {
        existing.departures[dl] = times;
      } else {
        const merged = [...new Set([...existing.departures[dl], ...times])];
        merged.sort((a, b) => parseEntry(a).time.localeCompare(parseEntry(b).time));
        existing.departures[dl] = merged;
      }
    });
  } else {
    index[groupKey].push({
      lineNum: entry.lineNum,
      dirKey:  entry.dirKey,
      dest:    entry.dest,
      departures,
    });
  }
}

// =========================================================
//  WYPEŁNIENIE LISTY ROZWIJANEJ
// =========================================================

let _stopIndex = null;

function populateStopSelect() {
  const select = document.getElementById("dep-stop-select");
  if (!select) return;

  _stopIndex = buildStopIndex();

  const keys = Object.keys(_stopIndex).sort((a, b) => {
    const parseKey = k => {
        const m = k.match(/^(.*)\s\((\d+)\)$/);
        return m ? [m[1], Number(m[2])] : [k, 0];
    };

    const [nameA, badgeA] = parseKey(a);
    const [nameB, badgeB] = parseKey(b);

    const cmp = nameA.localeCompare(nameB, "pl");
    return cmp || badgeA - badgeB;
  });

  keys.forEach(key => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    renderDepartures(select.value);
  });
}

// =========================================================
//  RENDEROWANIE TABLICY ODJAZDÓW
// =========================================================

function renderDepartures(stopKey) {
  const container = document.getElementById("dep-results");
  if (!container) return;

  if (!stopKey) { container.innerHTML = ""; return; }

  const entries = (_stopIndex || {})[stopKey] || [];
  if (!entries.length) {
    container.innerHTML = `<p style="color:var(--gray-mid);font-size:13px;margin-top:12px;">
      Brak kursów dla przystanku „${stopKey}".</p>`;
    return;
  }

  const sorted = [...entries].sort((a, b) => a.lineNum - b.lineNum);

  // zbierz etykiety dni zachowując kolejność
  const allDayLabels = [];
  sorted.forEach(e => {
    Object.keys(e.departures).forEach(dl => {
      if (!allDayLabels.includes(dl)) allDayLabels.push(dl);
    });
  });

  // nazwa do wyświetlenia = klucz grupy (już jest czytelna)
  let html = `
    <div class="dep-stop-title">
      <span class="dep-stop-icon">🚏</span>
      <span>${stopKey}</span>
    </div>`;

  allDayLabels.forEach(dayLabel => {
    const allDeps = [];

    sorted.forEach(({ lineNum, dest, departures }) => {
      (departures[dayLabel] || []).forEach(e => {
        const { time } = parseEntry(e);
        allDeps.push({ time, lineNum, dest });
      });
    });

    if (!allDeps.length) return;

    allDeps.sort((a, b) => a.time.localeCompare(b.time));

    const byHour = {};
    allDeps.forEach(({ time, lineNum, dest }) => {
      const hour = String(Number(time.split(":")[0]));
      if (!byHour[hour]) byHour[hour] = [];
      byHour[hour].push({ m: time.split(":")[1], lineNum, dest });
    });

    const hours = Object.keys(byHour).sort((a, b) => Number(a) - Number(b));

    html += `
      <div class="dep-day-section">
        <div class="tt-day-label">${dayLabel}</div>
        <table class="tt dep-table">
          <tr><th>godz</th><th style="text-align:left">min · linia · kierunek</th></tr>`;

    hours.forEach(h => {
      const minsHtml = byHour[h].map(({ m, lineNum, dest }) =>
        `<span class="dep-entry">
          <span class="dep-min">${m}</span>
          <span class="dep-line-badge">${lineNum}</span>
          <span class="dep-dest">→ ${dest}</span>
        </span>`
      ).join(" ");
      html += `<tr><td class="hour">${h}</td><td class="mins dep-mins">${minsHtml}</td></tr>`;
    });

    html += `</table></div>`;
  });

  // podsumowanie linii
  const uniqueLines = [...new Map(
    sorted.map(e => [`${e.lineNum}-${e.dest}`, e])
  ).values()];

  html += `<div class="dep-lines-summary">
    <span class="dep-lines-label">Linie przez ten przystanek:</span>
    ${uniqueLines.map(e =>
      `<span class="dep-line-chip">${e.lineNum}<span class="dep-chip-dest"> → ${e.dest}</span></span>`
    ).join("")}
  </div>`;

  container.innerHTML = html;
}

// =========================================================
//  INICJALIZACJA
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  populateStopSelect();
});
