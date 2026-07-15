// =========================================================
//  BRYGADY — moduł demonstracyjny
// =========================================================
//
//  Brygada to konkretny pojazd/zespół (kierowca+pojazd) jeżdżący
//  przez cały dzień. Może obsługiwać:
//    a) wyłącznie jedną linię (najczęstszy przypadek),
//    b) wiele linii naprzemiennie w ciągu dnia ("brygada łączona").
//
//  Struktura danych dla każdej linii w `brigadeData`:
//  {
//    name: "Nazwa linii (np. „Linia 1”)",
//    brigades: [
//      {
//        id: "1/01",                 // numer brygady
//        combined: false,            // czy łączona (jeździ też na innej linii)
//        combinedWith: [],           // numery linii dodatkowych (jeśli combined)
//        schedule: {
//          workday: [ {time, line, route, isBreak?}, ... ],
//          saturday: [...],
//          sunday: [...],
//        }
//      },
//      ...
//    ]
//  }
//
//  W realnym wdrożeniu te dane powinny pochodzić z bazy / CSV
//  eksportowanego z systemu dyspozytorskiego MPK — tu są ręcznie
//  wpisanym demo, żeby pokazać jak ma działać UI.
// =========================================================

const brigadeData = {
  10: {
    name: "Linia 10",
    brigades: [
      {
        id: "10/01",
        combined: false,
        combinedWith: [],
        schedule: {
          workday: [
            { time: "06:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "07:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "08:20", line: 10, route: "Dworzec → Kuźnice" },
            { time: "08:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:10", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:55", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:50", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:15", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "19:00", line: 10, route: "Kuźnice → Dworzec" },

          ],
          saturday: [
            { time: "06:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "07:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "08:20", line: 10, route: "Dworzec → Kuźnice" },
            { time: "08:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:10", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:55", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:50", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:15", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "19:00", line: 10, route: "Kuźnice → Dworzec" },
          ],
          sunday: [
            { time: "06:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "07:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "08:20", line: 10, route: "Dworzec → Kuźnice" },
            { time: "08:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:10", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:55", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:50", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:15", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "19:00", line: 10, route: "Kuźnice → Dworzec" },
          ],
        },
      },
      {
        id: "10/02",
        combined: false,
        combinedWith: [],
        schedule: {
          workday: [
            { time: "09:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "10:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:45", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:10", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:30", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:30", line: 10, route: "Kuźnice → Dworzec" },
          ],
          saturday: [
            { time: "09:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "10:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:45", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:10", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:30", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:30", line: 10, route: "Kuźnice → Dworzec" },
          ],
          sunday: [
            { time: "09:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "10:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:45", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:10", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:30", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:30", line: 10, route: "Kuźnice → Dworzec" },
          ],
        },
      },
    ],
  },

  11: {
    name: "Linia 11",
    brigades: [
      {
        id: "11/01",
        combined: false,
        combinedWith: [],
        schedule: {
          workday: [
            { time: "05:20", line: 11, route: "Dworzec → J. Krzeptowskiego" },
            { time: "05:40", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "06:25", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "07:15", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "08:05", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "08:50", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "09:40", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "10:40", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "11:25", line: 11, route: "Cyrhla → Dworzec" },

            { time: "09:55", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "10:40", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "11:05", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "11:30", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "12:00", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "12:35", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "12:55", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "13:15", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "13:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:10", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:55", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:50", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:15", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "19:00", line: 10, route: "Kuźnice → Dworzec" },

          ],
          saturday: [
            { time: "06:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "07:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "08:20", line: 10, route: "Dworzec → Kuźnice" },
            { time: "08:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:10", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:55", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:50", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:15", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "19:00", line: 10, route: "Kuźnice → Dworzec" },
          ],
          sunday: [
            { time: "06:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "07:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "07:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "08:20", line: 10, route: "Dworzec → Kuźnice" },
            { time: "08:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "09:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:00", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:10", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:55", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:20", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:40", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:05", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:50", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:15", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:35", line: 10, route: "Dworzec → Kuźnice" },
            { time: "19:00", line: 10, route: "Kuźnice → Dworzec" },
          ],
        },
      },
      {
        id: "11/02",
        combined: false,
        combinedWith: [],
        schedule: {
          workday: [
            { time: "05:20", line: 11, route: "Dworzec → Cyrhla" },
            { time: "05:40", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "06:25", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "07:10", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "07:50", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "08:40", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "09:40", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "10:25", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "11:20", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "12:10", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "11:05", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "11:30", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "12:00", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "12:35", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
            { time: "12:55", line: 11, route: "J. Krzeptowskiego → Cyrhla" },
            { time: "13:15", line: 11, route: "Cyrhla → J. Krzeptowskiego" },
          ],
          saturday: [
            { time: "09:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "10:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:45", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:10", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:30", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:30", line: 10, route: "Kuźnice → Dworzec" },
          ],
          sunday: [
            { time: "09:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "09:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "10:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "10:40", line: 10, route: "Kuźnice → Dworzec" },
            { time: "11:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "11:35", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "12:25", line: 10, route: "Kuźnice → Dworzec" },
            { time: "12:45", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:10", line: 10, route: "Kuźnice → Dworzec" },
            { time: "13:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "13:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "14:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "14:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "15:30", line: 10, route: "Dworzec → Kuźnice" },
            { time: "15:55", line: 10, route: "Kuźnice → Dworzec" },
            { time: "16:15", line: 10, route: "Dworzec → Kuźnice" },
            { time: "16:45", line: 10, route: "Kuźnice → Dworzec" },
            { time: "17:05", line: 10, route: "Dworzec → Kuźnice" },
            { time: "17:30", line: 10, route: "Kuźnice → Dworzec" },
            { time: "18:00", line: 10, route: "Dworzec → Kuźnice" },
            { time: "18:30", line: 10, route: "Kuźnice → Dworzec" },
          ],
        },
      },
    ],
  },
};

// =========================================================
//  STAN
// =========================================================

let currentBrigDay = "workday";
let openBrigChipKey = null; // np. "1__1/02"

// =========================================================
//  RENDEROWANIE
// =========================================================

function dayLabel(key) {
  return { workday: "Dni robocze (pon. – pt.)", saturday: "Soboty", sunday: "Niedziele i święta" }[key];
}

function renderBrigadesView() {
  const container = document.getElementById("brig-lines-list");
  if (!container) return;
  container.innerHTML = "";

  Object.entries(brigadeData).forEach(([lineNum, lineInfo]) => {
    if (!lineInfo.brigades.length) return; // pomiń linie bez własnych brygad (np. czysto "goszczone")

    const card = document.createElement("div");
    card.className = "brig-line-card";

    const header = document.createElement("div");
    header.className = "brig-line-header";
    header.innerHTML = `
      <div class="tt-linenum">${lineNum}</div>
      <div>
        <div style="font-weight:700;font-size:14px;">${lineInfo.name}</div>
        <div class="brig-line-meta">${lineInfo.brigades.length} brygad(y) obsługujących tę linię</div>
      </div>
      <div class="brig-expand-icon">▶</div>
    `;
    header.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    const list = document.createElement("div");
    list.className = "brig-list";

    lineInfo.brigades.forEach(brig => {
      const chip = document.createElement("div");
      chip.className = "brig-chip";
      const chipKey = `${lineNum}__${brig.id}`;
      chip.innerHTML = `
        <span>Brygada ${brig.id}</span>
        ${brig.combined ? `<span class="brig-combined-badge">+ L${brig.combinedWith.join(", L")}</span>` : ""}
      `;
      chip.addEventListener("click", () => {
        toggleBrigDetail(chipKey, chip, lineNum, brig);
      });
      chip.dataset.chipKey = chipKey;
      list.appendChild(chip);
    });

    const detail = document.createElement("div");
    detail.className = "brig-detail";
    detail.id = `brig-detail-${lineNum}`;

    card.appendChild(header);
    card.appendChild(list);
    card.appendChild(detail);
    container.appendChild(card);
  });
}

function toggleBrigDetail(chipKey, chipEl, lineNum, brig) {
  const detail = document.getElementById(`brig-detail-${lineNum}`);
  const allChipsInThisLine = chipEl.parentElement.querySelectorAll(".brig-chip");

  // jeśli kliknięto już otwartą brygadę -> zwiń
  if (openBrigChipKey === chipKey) {
    detail.classList.remove("open");
    chipEl.classList.remove("active");
    openBrigChipKey = null;
    return;
  }

  // odznacz inne chipy w tej linii, podświetl klikniętą
  allChipsInThisLine.forEach(c => c.classList.remove("active"));
  chipEl.classList.add("active");
  openBrigChipKey = chipKey;

  const courses = brig.schedule[currentBrigDay] || [];
  let html = `<div class="brig-detail-title">Brygada ${brig.id} — rozkład (${dayLabel(currentBrigDay)})</div>`;

  if (!courses.length) {
    html += `<div style="font-size:12px;color:var(--gray-mid);">Brak kursów w wybranym dniu.</div>`;
  } else {
    courses.forEach(c => {
      if (c.isBreak) {
        html += `
          <div class="brig-course-row is-break">
            <span>${c.time} — ${c.route}</span>
          </div>`;
      } else {
        html += `
          <div class="brig-course-row">
            <span class="brig-course-time">${c.time}</span>
            <span class="brig-course-line">${c.line}</span>
            <span class="brig-course-route">${c.route}</span>
          </div>`;
      }
    });
  }

  detail.innerHTML = html;
  detail.classList.add("open");
}

function setBrigDay(dayKey, btnEl) {
  currentBrigDay = dayKey;
  document.querySelectorAll(".brig-day-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");

  // jeśli jakaś brygada miała otwarty szczegół, odśwież go z nowym dniem
  if (openBrigChipKey) {
    const [lineNum, brigId] = openBrigChipKey.split("__");
    const brig = brigadeData[lineNum].brigades.find(b => b.id === brigId);
    const chipEl = document.querySelector(`.brig-chip[data-chip-key="${openBrigChipKey}"]`);
    if (brig && chipEl) {
      openBrigChipKey = null; // wymuś ponowne otwarcie
      toggleBrigDetail(`${lineNum}__${brigId}`, chipEl, lineNum, brig);
    }
  }
}

// =========================================================
//  PRZEŁĄCZANIE GŁÓWNYCH WIDOKÓW (Rozkłady / Brygady)
// =========================================================

function showView(viewName, btnEl) {
  document.querySelectorAll(".main-view").forEach(v => v.classList.remove("visible"));
  document.querySelectorAll(".main-nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(`view-${viewName}`).classList.add("visible");
  btnEl.classList.add("active");

  if (viewName === "brigades") {
    renderBrigadesView();
  }
}
