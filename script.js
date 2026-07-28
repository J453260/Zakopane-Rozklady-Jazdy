// =========================================================
//  DANE LINII
//  Każda linia ma jeden kierunek "podstawowy" (fwd).
//  Kierunek powrotny (bwd) jest generowany automatycznie
//  poprzez odwrócenie listy przystanków, chyba że podano
//  własny `baseSchedule` (i/lub `stops`) dla `bwd`.
//
//  offset = czas dojazdu (w minutach) od pierwszego przystanku
//  baseSchedule = godziny odjazdu Z PIERWSZEGO przystanku
//
//  Godziny przepisane z pliku rozklady.tex (MKS Mielec).
// =========================================================

const lines = {
  10: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:30","07:40","08:20","09:00","09:15","09:40","10:05",
          "10:40","11:05","11:30","12:00","12:35","12:45","13:15","13:30",
          "14:00","14:15","15:10","15:30","15:55","16:15","16:40","17:05",
          "17:50","18:00","18:35"
        ],
        "Soboty": [
          "06:30","07:40","08:20","09:00","09:15","09:40","10:05",
          "10:40","11:05","11:30","12:00","12:35","12:45","13:15","13:30",
          "14:00","14:15","15:10","15:30","15:55","16:15","16:40","17:05",
          "17:50","18:00","18:35"
        ],
        "Niedziele": [
          "06:30","07:40","08:20","09:00","09:15","09:40","10:05",
          "10:40","11:05","11:30","12:00","12:35","12:45","13:15","13:30",
          "14:00","14:15","15:10","15:30","15:55","16:15","16:40","17:05",
          "17:50","18:00","18:35"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Watra","01",4],
        ["Parcele Urzędnicze","01",5],
        ["Chałubińskiego Rondo","01",7],
        ["Przewodników Tatrzańskich Rondo","01",8],
        ["Murowanica","01",10],
        ["Kuźnice","01",13]
      ],
    },
    bwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "07:00","07:55","08:40","09:20","09:35","09:55",
          "10:40","11:05","11:35","12:00","12:25","12:55","13:10","13:40",
          "13:55","14:25","14:45","15:35","15:55","16:20","16:45","17:05","17:30",
          "18:15","18:30","19:00"
        ],
        "Soboty": [
          "07:00","07:55","08:40","09:20","09:35","09:55",
          "10:40","11:05","11:35","12:00","12:25","12:55","13:10","13:40",
          "13:55","14:25","14:45","15:35","15:55","16:20","16:45","17:05","17:30",
          "18:15","18:30","19:00"
        ],
        "Niedziele": [
          "07:00","07:55","08:40","09:20","09:35","09:55",
          "10:40","11:05","11:35","12:00","12:25","12:55","13:10","13:40",
          "13:55","14:25","14:45","15:35","15:55","16:20","16:45","17:05","17:30",
          "18:15","18:30","19:00"
        ]
      },
      stops: [
        ["Kuźnice","02",0],
        ["Murowanica","02",2],
        ["Przewodników Tatrzańskich Rondo","02",4],
        ["Chałubińskiego Rondo","02",5],
        ["Parcele Urzędnicze","02",7],
        ["Watra","02",8],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",9],
        ["Aleje 3-go Maja Górne","02",11],
        ["Dworzec","02",13],
      ],
    },
  },

  11: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:40","06:25","07:10","08:05","08:40","09:40","10:25","12:10","13:40",
          "14:30","15:25","16:20","17:10","18:15","19:10","20:15","21:00","22:00",
        ],
        "Soboty": [
          "05:40","06:25","07:10","08:05","08:40","09:40","10:25","12:10","13:40",
          "14:30","15:25","16:20","17:10","18:15","19:10","20:15","21:00","22:00",
        ],
        "Niedziele": [
          "05:40","06:25","07:10","08:05","08:40","09:40","10:25","12:10","13:40",
          "14:30","15:25","16:20","17:10","18:15","19:10","20:15","21:00","22:00",
        ]
      },

      stops: [
        ["Cyrhla","01",0],
        ["Chłabówka Górka","01",2],
        ["Jaszczurówka","01",5],
        ["Jaszczurówka - Bory","01",7],
        ["Bystre","01",9],
        ["Chałubińskiego Rondo","01",11],
        ["Parcele Urzędnicze","01",13],
        ["Watra","01",15],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",16],
        ["Równia Krupowa","02",17],
        ["Dworzec","01",19],
        ["Aleje 3-go Maja Dolne","02",22],
        ["Targowicka","02",25],
        ["Za strugiem","02",27],
        ["Skibówki I","02",29],
        ["Skibówki II","02",31],
        ["Krzeptówki","02",33],
        ["J. Krzeptowskiego","02",35],
      ],
    },

    bwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:40","06:25","07:15","07:50","08:50","09:40","10:40","11:20",
          "14:30","15:25","16:20","17:15","18:05","19:20","20:00","21:10",
          "22:05"
        ],
        "Soboty": [
          "05:40","06:25","07:15","07:50","08:50","09:40","10:40","11:20",
          "14:30","15:25","16:20","17:15","18:05","19:20","20:00","21:10",
          "22:05"
        ],
        "Niedziele": [
          "05:40","06:25","07:15","07:50","08:50","09:40","10:40","11:20",
          "14:30","15:25","16:20","17:15","18:05","19:20","20:00","21:10",
          "22:05"
        ]
      },
      stops: [
        ["J. Krzeptowskiego","01",0],
        ["Krzeptówki","01",2],
        ["Skibówki II","01",4],
        ["Skibówki I","01",6],
        ["Za strugiem","01",8],
        ["Targowicka","01",10],
        ["Aleje 3-go Maja Dolne","02",13],
        ["Równia Krupowa","02",14],
        ["Dworzec","01",16],
        ["Aleje 3-go Maja Górne","01",18],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",19],
        ["Watra","01",20],
        ["Parcele Urzędnicze","01",22],
        ["Chałubińskiego Rondo","01",23],
        ["Bystre","02",25],
        ["Jaszczurówka - Bory","02",26],
        ["Jaszczurówka","02",28],
        ["Chłabówka Górka","02",31],
        ["Cyrhla","02",33],
      ]
    },
  },

  1101: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "11:25","22:45"
        ],
        "Soboty": [
          "11:25","22:45"
        ],
        "Niedziele": [
          "11:25","22:45"
        ]
      },

      stops: [
        ["Cyrhla","01",0],
        ["Chłabówka Górka","01",2],
        ["Jaszczurówka","01",5],
        ["Jaszczurówka - Bory","01",7],
        ["Bystre","01",9],
        ["Chałubińskiego Rondo","01",11],
        ["Parcele Urzędnicze","01",13],
        ["Watra","01",15],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",16],
        ["Równia Krupowa","02",17],
        ["Dworzec","02",19],
      ],
    },

    bwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:20","13:10","14:05"
        ],
        "Soboty": [
          "05:20","13:10","14:05"
        ],
        "Niedziele": [
          "05:20","13:10","14:05"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Równia Krupowa","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Watra","01",4],
        ["Parcele Urzędnicze","01",6],
        ["Chałubińskiego Rondo","01",8],
        ["Bystre","01",10],
        ["Jaszczurówka - Bory","02",12],
        ["Jaszczurówka","02",14],
        ["Chłabówka Górka","02",17],
        ["Cyrhla","02",19],
      ],
    },
  },

  1102: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:20"
        ],
        "Soboty": [
          "05:20"
        ],
        "Niedziele": [
          "05:20"
        ]
      },

      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Dolne","02",3],
        ["Targowicka","02",6],
        ["Za strugiem","02",8],
        ["Skibówki I","02",10],
        ["Skibówki II","02",12],
        ["Krzeptówki","02",14],
        ["J. Krzeptowskiego","02",16],
      ],
    },

    bwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "12:50","22:40"
        ],
        "Soboty": [
          "12:50","22:40"
        ],
        "Niedziele": [
          "12:50","22:40"
        ]
      },
      stops: [
        ["J. Krzeptowskiego","01",0],
        ["Krzeptówki","01",2],
        ["Skibówki II","01",4],
        ["Skibówki I","01",6],
        ["Za strugiem","01",8],
        ["Targowicka","01",10],
        ["Aleje 3-go Maja Dolne","01",13],
        ["Dworzec","02",16],
      ],
    },
  },

  12: {
    fwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:05","09:00","11:05","14:55","17:35","19:50"
        ],
        "Soboty": [
          "06:05","09:00","11:05","14:55","17:35","19:50"
        ],
        "Niedziele": [
          "06:05","09:00","11:05","14:55","17:35","19:50"
        ]
      },


      stops: [
        ["Cyrhla","01",0],
        ["Chłabówka Górka","01",3],
        ["Jaszczurówka","01",6],
        ["Jaszczurówka - Bory","01",8],
        ["Bystre","01",10],
        ["Karłowicza","01",12],
        ["Murowanica","01",14],
        ["Kuźnice","02",17],
        ["Murowanice","02",19],
        ["Przewodników Tatrzańskich Rondo","02",20],
        ["Chałubińskiego Rondo","02",21],
        ["Parcele Urzędnicze","02",23],
        ["Watra","02",25],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",26],
        ["Równia Krupowa","02",27],
        ["Dworzec","01",29],
        ["Aleje 3-go Maja Dolne","02",31],
        ["Targowicka","02",34],
        ["Za strugiem","02",36],
        ["Skibówki I","02",38],
        ["Skibówki II","02",40],
        ["Krzeptówki","02",42],
        ["Mała Łąka","02",45]
      ]
    },


    bwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "07:00","10:05","13:55","16:05","18:45"
        ],
        "Soboty": [
          "07:00","10:05","13:55","16:05","18:45"
        ],
        "Niedziele": [
          "07:00","10:05","13:55","16:05","18:45"
        ]
      },
      stops: [
        ["Mała Łąka","01",0],
        ["Krzeptówki","01",3],
        ["Skibówki II","01",5],
        ["Skibówki I","01",7],
        ["Za strugiem","01",9],
        ["Targowicka","01",11],
        ["Aleje 3-go Maja Dolne","01",14],
        ["Dworzec","01",16],
        ["Aleje 3-go Maja Górne","01",18],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",19],
        ["Watra","01",20],
        ["Parcele Urzędnicze","01",22],
        ["Chałubińskiego Rondo","01",23],
        ["Przewodników Tatrzańskich Rondo","01",24],
        ["Murowanica","01",26],
        ["Kuźnice","02",29],
        ["Karłowicza Skrzyżowanie","02",32],
        ["Karłowicza","02",34],
        ["Bystre","02",35],
        ["Jaszczurówka - Bory","02",36],
        ["Jaszczurówka","02",38],
        ["Chłabówka Górka","02",41],
        ["Cyrhla","02",44],
      ],
    }
  },

  1201: {
    fwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "13:25"
        ],
        "Soboty": [
          "13:25"
        ],
        "Niedziele": [
          "13:25"
        ]
      },


      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Dolne","02",2],
        ["Targowicka","02",5],
        ["Za strugiem","02",7],
        ["Skibówki I","02",9],
        ["Skibówki II","02",11],
        ["Krzeptówki","02",13],
        ["Mała Łąka","02",16]
      ]
    },


    bwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "12:10","20:45"
        ],
        "Soboty": [
          "12:10","20:45"
        ],
        "Niedziele": [
          "12:10","20:45"
        ]
      },
      stops: [
        ["Mała Łąka","01",0],
        ["Krzeptówki","01",3],
        ["Skibówki II","01",5],
        ["Skibówki I","01",7],
        ["Za strugiem","01",9],
        ["Targowicka","01",11],
        ["Aleje 3-go Maja Dolne","01",14],
        ["Dworzec","02",16],
      ],
    }
  },

  1202: {
    fwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [],
        "Soboty": [],
        "Niedziele": []
      },
    },


    bwd: {

      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:30"
        ],
        "Soboty": [
          "05:30"
        ],
        "Niedziele": [
          "05:30"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Watra","01",4],
        ["Parcele Urzędnicze","01",6],
        ["Chałubińskiego Rondo","01",7],
        ["Przewodników Tatrzańskich Rondo","01",8],
        ["Murowanice","01",10],
        ["Kuźnice","02",13],
        ["Karłowicza Skrzyżowanie","02",16],
        ["Karłowicza","02",17],
        ["Bystre","02",18],
        ["Jaszczurówka - Bory","02",19],
        ["Jaszczurówka","02",21],
        ["Chłabówka Górka","02",24],
        ["Cyrhla","02",27],
      ],
    }
  },

  13: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "07:00","09:30","11:30","14:00","16:20","18:30"
        ],
        "Soboty": [
          "07:00","09:30","11:30","14:00","16:20","18:30"
        ],
        "Niedziele": [
          "07:00","09:30","11:30","14:00","16:20","18:30"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Zamoyskiego Watra","01",4],
        ["Parcele Urzędnicze","01",5],
        ["Chałubińskiego Rondo","01",7],
        ["Imperial","01",9],
        ["Pardałówka I","01",10],
        ["Pardałówka II","01",11],
        ["Oberconiówka","01",12],
        ["Olcza Huty","01",13],
        ["Olcza Mrowice","01",14],
        ["Olcza Kościół","01",16],
        ["Walkosze","01",17],
        ["Gawlaki","01",20],
        ["Hrube Niżne","01",21],
        ["Hrube","01",22],
        ["Hrube Wyżne","01",24],
        ["Cyrhla Kościół","01",25],
        ["Hrube Wyżne","02",26],
        ["Hrube","02",28],
        ["Hrube Niżne","02",29],
        ["Gawlaki","02",30],
        ["Walkosze","02",33],
        ["Olcza Kościół","02",34],
        ["Olcza Mrowice","02",36],
        ["Olcza Huty","02",37],
        ["Oberconiówka","02",38],
        ["Pardałówka II","02",39],
        ["Pardałówka I","02",40],
        ["Imperial","02",41],
        ["Chałubińskiego Rondo","02",43],
        ["Parcele Urzędnicze","02",45],
        ["Zamoyskiego Watra","02",46],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",47],
        ["Aleje 3-go Maja Górne","02",49],
        ["Dworzec","02",50]
      ],
    }
  },

  14: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:15","07:00","07:50","08:35","09:45","10:50","11:45",
          "14:20","15:25","15:50","16:35","17:00","17:45","18:10","18:50",
          "20:00","20:40","21:45","22:35"
        ],
        "Soboty": [
          "06:15","07:00","07:50","08:35","09:45","10:50","11:45",
          "14:20","15:25","15:50","16:35","17:00","17:45","18:10","18:50",
          "20:00","20:40","21:45","22:35"
        ],
        "Niedziele": [
          "06:15","07:00","07:50","08:35","09:45","10:50","11:45",
          "14:20","15:25","15:50","16:35","17:00","17:45","18:10","18:50",
          "20:00","20:40","21:45","22:35"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Zamoyskiego Watra","01",4],
        ["Parcele Urzędnicze","01",5],
        ["Chałubińskiego Rondo","01",7],
        ["Imperial","01",9],
        ["Pardałówka I","01",10],
        ["Pardałówka II","01",11],
        ["Oberconiówka","01",12],
        ["Olcza Huty","01",13],
        ["Olcza Mrowice","01",14],
        ["Olcza Kościół","01",16],
        ["Olcza Stachonie","01",18],
        ["Olcza Wojdyły","01",19],
        ["Ustup Lewiatan","01",21],
        ["Harenda Szkoła","01",23],
        ["Harenda","01",24],
        ["Guty Sklep GS","01",25],
        ["Bachledy - PKL","01",26],
        ["Spyrkówka","01",28],
        ["Kasprowicza","01",29],
        ["Nowotarska Szkoła","01",31],
        ["Aleje 3-go Maja Dolne","01",33],
        ["Równia Krupowa","01",34],
        ["Dworzec","02",36]
      ],
    },
    bwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:40","06:25","07:35","08:50","10:05","12:00",
          "13:35","14:45","19:30","21:15","22:00"
        ],
        "Soboty": [
          "05:40","06:25","07:35","08:50","10:05","12:00",
          "13:35","14:45","19:30","21:15","22:00"
        ],
        "Niedziele": [
          "05:40","06:25","07:35","08:50","10:05","12:00",
          "13:35","14:45","19:30","21:15","22:00"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Równia Krupowa","02",2],
        ["Aleje 3-go Maja Dolne","02",3],
        ["Nowotarska Szkoła","02",5],
        ["Kasprowicza","02",7],
        ["Spyrkówka","02",8],
        ["Bachledy - PKL","02",10],
        ["Guty Sklep GS","02",11],
        ["Harenda","02",12],
        ["Harenda Szkoła","02",13],
        ["Ustup Lewiatan","02",15],
        ["Olcza Wojdyły","02",17],
        ["Olcza Stachonie","02",18],
        ["Olcza Kościół","02",20],
        ["Olcza Mrowice","02",22],
        ["Olcza Huty","02",23],
        ["Oberconiówka","02",24],
        ["Pardałówka II","02",25],
        ["Pardałówka I","02",26],
        ["Imperial","02",27],
        ["Chałubińskiego Rondo","02",29],
        ["Parcele Urzędnicze","02",31],
        ["Zamoyskiego Watra","02",32],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",33],
        ["Aleje 3-go Maja Górne","02",34],
        ["Dworzec","02",36],
      ],
    },
  },

  15: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:55","12:20","13:35","14:45","16:05","17:20","19:25","21:10"
        ],
        "Soboty": [
          "05:55","12:20","13:35","14:45","16:05","17:20","19:25","21:10"
        ],
        "Niedziele": [
          "05:55","12:20","13:35","14:45","16:05","17:20","19:25","21:10"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Tetmajera Muzeum K. Makuszyńskiego","01",6],
        ["Grunwaldzka Ornak","01",7],
        ["Makuszyńskiego","01",8],
        ["Piłsudskiego „Start”","01",9],
        ["Skocznia","01",11],
        ["Br. Czecha COS","01",12],
        ["Imperial","01",16],
        ["Pardałówka 1","01",17],
        ["Pardałówka 2","01",18],
        ["Oberconiówka","01",19],
        ["Olcza Huty","01",20],
        ["Olcza Mrowce","01",21],
        ["Olcza Kościół","01",23],
        ["Olcza Stachonie","01",24],
        ["Olcza Wojdyły","01",25],
        ["Ustup","01",27],
        ["Guty","01",28],
        ["Guty Muzeum Kasprowicza","01",29],
        ["Guty Sklep GS","01",30],
        ["Bachledy – PKL","01",32],
        ["Spyrkówka I","01",34],
        ["Kasprowicza","01",35],
        ["Nowotarska Szkoła","01",37],
        ["Aleje 3-go Maja Dolne","01",39],
        ["Równia Krupowa","01",40],
        ["Dworzec","02",42]
      ],
    },
    bwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:00","07:00","07:50","08:35","09:10","09:50","10:25",
          "11:10","14:15","15:35","17:00","18:10","18:50","20:35"
        ],
        "Soboty": [
          "06:00","07:00","07:50","08:35","09:10","09:50","10:25",
          "11:10","14:15","15:35","17:00","18:10","18:50","20:35"
        ],
        "Niedziele": [
          "06:00","07:00","07:50","08:35","09:10","09:50","10:25",
          "11:10","14:15","15:35","17:00","18:10","18:50","20:35"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Równia Krupowa","02",2],
        ["Aleje 3-go Maja Dolne","02",3],
        ["Nowotarska Szkoła","02",5],
        ["Kasprowicza","02",7],
        ["Spyrkówka I","02",8],
        ["Bachledy – PKL","02",10],
        ["Guty Sklep GS","02",12],
        ["Guty Muzeum Kasprowicza","02",13],
        ["Guty","02",14],
        ["Ustup","02",15],
        ["Olcza Wojdyły","02",17],
        ["Olcza Stachonie","02",18],
        ["Olcza Kościół","02",19],
        ["Olcza Mrowce","02",21],
        ["Olcza Huty","02",22],
        ["Oberconiówka","02",23],
        ["Pardałówka 2","02",24],
        ["Pardałówka 1","02",25],
        ["Imperial","02",26],
        ["Br. Czecha COS","02",30],
        ["Skocznia","02",31],
        ["Piłsudskiego „Start”","02",33],
        ["Makuszyńskiego","02",34],
        ["Grunwaldzka Ornak","02",35],
        ["Tetmajera Muzeum K. Makuszyńskiego","02",36],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",39],
        ["Aleje 3-go Maja Górne","02",40],
        ["Dworzec","02",42],
      ],
    },
  },

  16: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "05:55","12:20","13:35","14:45","16:05","17:20","19:25","21:10"
        ],
        "Soboty": [
          "05:55","12:20","13:35","14:45","16:05","17:20","19:25","21:10"
        ],
        "Niedziele": [
          "05:55","12:20","13:35","14:45","16:05","17:20","19:25","21:10"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",2],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",3],
        ["Tetmajera Muzeum K. Makuszyńskiego","01",6],
        ["Grunwaldzka Ornak","01",7],
        ["Makuszyńskiego","01",8],
        ["Piłsudskiego „Start”","01",9],
        ["Skocznia","01",11],
        ["Br. Czecha COS","01",12],
        ["Przewodników Tatrzańskich Rondo","01",13],
        ["Murowanica","01",15],
        ["Kuźnice","01",21],
        ["Karłowicza Skrzyżowanie","01",24],
        ["Karłowicza","01",25],
        ["Imperial","01",26],
        ["Pardałówka 1","01",27],
        ["Pardałówka 2","01",28],
        ["Oberconiówka","01",29],
        ["Olcza Huty","01",30],
        ["Olcza Mrowce","01",31],
        ["Olcza Kościół","01",33],
        ["Olcza Stachonie","01",34],
        ["Olcza Wojdyły","01",35],
        ["Ustup","01",37],
        ["Guty","01",38],
        ["Guty Muzeum Kasprowicza","01",39],
        ["Guty Sklep GS","01",40],
        ["Bachledy – PKL","01",42],
        ["Spyrkówka I","01",44],
        ["Kasprowicza","01",45],
        ["Nowotarska Szkoła","01",47],
        ["Aleje 3-go Maja Dolne","01",49],
        ["Równia Krupowa","01",50],
        ["Dworzec","02",52]
      ],
    },
    bwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:00","07:00","07:50","08:35","09:10","09:50","10:25",
          "11:10","11:35","14:15","15:35","17:00","18:10","18:50","20:35"
        ],
        "Soboty": [
          "06:00","07:00","07:50","08:35","09:10","09:50","10:25",
          "11:10","11:35","14:15","15:35","17:00","18:10","18:50","20:35"
        ],
        "Niedziele": [
          "06:00","07:00","07:50","08:35","09:10","09:50","10:25",
          "11:10","11:35","14:15","15:35","17:00","18:10","18:50","20:35"
        ]
      },
      stops:[
        ["Dworzec","01",0],
        ["Równia Krupowa","02",2],
        ["Aleje 3-go Maja Dolne","02",3],
        ["Nowotarska Szkoła","02",5],
        ["Kasprowicza","02",7],
        ["Spyrkówka I","02",8],
        ["Bachledy – PKL","02",10],
        ["Guty Sklep GS","02",12],
        ["Guty Muzeum Kasprowicza","02",13],
        ["Guty","02",14],
        ["Ustup","02",15],
        ["Olcza Wojdyły","02",17],
        ["Olcza Stachonie","02",18],
        ["Olcza Kościół","02",19],
        ["Olcza Mrowce","02",21],
        ["Olcza Huty","02",22],
        ["Oberconiówka","02",23],
        ["Pardałówka 2","02",24],
        ["Pardałówka 1","02",25],
        ["Imperial","02",26],
        ["Karłowicza","02",27],
        ["Karłowicza Skrzyżowanie","02",28],
        ["Kuźnice","02",31],
        ["Murowanica","02",37],
        ["Przewodników Tatrzańskich Rondo","02",39],
        ["Br. Czecha COS","02",40],
        ["Skocznia","02",41],
        ["Piłsudskiego „Start”","02",43],
        ["Makuszyńskiego","02",44],
        ["Grunwaldzka Ornak","02",45],
        ["Tetmajera Muzeum K. Makuszyńskiego","02",46],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",49],
        ["Aleje 3-go Maja Górne","02",50],
        ["Dworzec","02",52],
      ],
    },
  },

  17: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:45","08:15","09:30","10:50","12:45","14:40","16:30","17:55"
        ],
        "Soboty": [
          "06:45","08:15","09:30","10:50","12:45","14:40","16:30","17:55"
        ],
        "Niedziele": [
          "06:45","08:15","09:30","10:50","12:45","14:40","16:30","17:55"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Szymony Teatr im. St. Witkiewicza","01",2],
        ["Spyrkówka","02",4],
        ["Bachledy","02",5],
        ["Harenda","02",6],
        ["Harenda Szkoła","02",7],
        ["Ustup Lewiatan","02",9],
        ["Olcza Wojdyły","02",11],
        ["Olcza Stachonie","02",12],
        ["Olcza Kościół","02",13],
        ["Olcza Mrowce","02",14],
        ["Olcza Huty","02",15],
        ["Oberconiówka","02",16],
        ["Pardałówka 2","02",17],
        ["Pardałówka 1","02",18],
        ["Imperial","02",19],
        ["Karłowicza","01",21],
        ["Murowanica","01",23],
        ["Kuźnice","02",26]
      ],
    },
    bwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "07:15","08:50","10:10","11:20","13:25","15:25","17:15","18:40"
        ],
        "Soboty": [
          "07:15","08:50","10:10","11:20","13:25","15:25","17:15","18:40"
        ],
        "Niedziele": [
          "07:15","08:50","10:10","11:20","13:25","15:25","17:15","18:40"
        ]
      },
      stops: [
        ["Kuźnice","01",0],
        ["Murowanica","02",3],
        ["Karłowicza","02",5],
        ["Imperial","01",7],
        ["Pardałówka 1","01",8],
        ["Pardałówka 2","01",9],
        ["Oberconiówka","01",10],
        ["Olcza Huty","01",11],
        ["Olcza Mrowce","01",12],
        ["Olcza Kościół","01",13],
        ["Olcza Stachonie","01",14],
        ["Olcza Wojdyły","01",15],
        ["Ustup Lewiatan","01",17],
        ["Harenda Szkoła","01",19],
        ["Harenda","01",20],
        ["Bachledy","01",21],
        ["Spyrkówka","01",22],
        ["Szymony Teatr im. St. Witkiewicza","01",24],
        ["Dworzec","02",26],
      ],
    },
  },

  18: {
    fwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:00","08:10","10:40","15:10","17:30","19:30"
        ],
        "Soboty": [
          "06:00","08:10","10:40","15:10","17:30","19:30"
        ],
        "Niedziele": [
          "06:00","08:10","10:40","15:10","17:30","19:30"
        ]
      },
      stops: [
        ["Dworzec","01",0],
        ["Aleje 3-go Maja Górne","01",3],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","01",4],
        ["Zamoyskiego Watra","01",5],
        ["Makuszyńskiego","01",7],
        ["Grunwaldzka Ornak","01",8],
        ["Grunwaldzka Z.S. Hotelarskich","01",9],
        ["Kasprusie ZCE","01",11],
        ["Małe Żywczańskie","01",13],
        ["Regle do Doliny Strążyskiej","01",14],
        ["Bogdańskiego do Doliny Strążyskiej","01",15],
        ["Dolina Strążyska","02",16]
      ],
    },
    bwd: {
      baseSchedule: {
        "Dni robocze (pon. – pt.)": [
          "06:20","08:30","11:00","15:30","17:50","19:50"
        ],
        "Soboty": [
          "06:20","08:30","11:00","15:30","17:50","19:50"
        ],
        "Niedziele": [
          "06:20","08:30","11:00","15:30","17:50","19:50"
        ]
      },
      stops: [
        ["Dolina Strążyska","01",0],
        ["Bogdańskiego do Doliny Strążyskiej","02",1],
        ["Regle do Doliny Strążyskiej","02",2],
        ["Małe Żywczańskie","02",3],
        ["Kasprusie ZCE","02",5],
        ["Grunwaldzka Z.S. Hotelarskich","02",7],
        ["Grunwaldzka Ornak","02",8],
        ["Makuszyńskiego","02",9],
        ["Zamoyskiego Watra","02",11],
        ["Krupówki Pomnik hr. Wł. Zamoyskiego","02",12],
        ["Aleje 3-go Maja Górne","02",13],
        ["Dworzec","02",16],
      ],
    },
  },
};

// stan: który kierunek jest aktualnie wybrany dla każdej linii
const currentDirection = {};

// =========================================================
//  FUNKCJE POMOCNICZE
// =========================================================

// Rozdziela czas od litery wariantu.
// "06:40s" -> { time: "06:40", variant: "s" }
// "07:10"  -> { time: "07:10", variant: null }
function parseEntry(entry) {
  const match = entry.match(/^(\d{1,2}:\d{2})([a-zA-Z]*)$/);
  if (!match) return { time: entry, variant: null };
  return { time: match[1], variant: match[2] || null };
}

// dodaje minuty do czasu "HH:MM" -> "HH:MM"
function addMinutes(time, minutes) {
  const [h, m] = time.split(":").map(Number);
  let total = h * 60 + m + minutes;
  total = ((total % 1440) + 1440) % 1440;
  const hh = Math.floor(total / 60);
  const mm = total % 60;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

// grupuje listę wpisów "HH:MM[litera]" według godziny,
// zachowując informację o wariancie przy każdej minucie.
// Wynik: { "6": [ {mm:"40", variant:null}, {mm:"50", variant:"s"} ], ... }
function groupByHour(entries) {
  const grouped = {};
  entries.forEach(entry => {
    const { time, variant } = parseEntry(entry);
    const [h, m] = time.split(":");
    const hour = String(Number(h));
    if (!grouped[hour]) grouped[hour] = [];
    grouped[hour].push({ mm: m, variant });
  });
  // sortuj minuty rosnąco wewnątrz każdej godziny
  Object.values(grouped).forEach(arr => arr.sort((a, b) => Number(a.mm) - Number(b.mm)));
  return grouped;
}

// przesuwa wpis "HH:MM[litera]" o `minutes` minut, zachowując literkę
function shiftEntry(entry, minutes) {
  const { time, variant } = parseEntry(entry);
  const shifted = addMinutes(time, minutes);
  return shifted + (variant || "");
}

// generuje kierunek powrotny przez odwrócenie listy przystanków.
function makeReverse(forward, customBwd) {
  const total = forward.stops[forward.stops.length - 1][2];
  const reversedStops = [...forward.stops]
    .reverse()
    .map(([name, badge, offset]) => [name, badge, total - offset]);

  return {
    baseSchedule: (customBwd && customBwd.baseSchedule) || forward.baseSchedule,
    stops: (customBwd && customBwd.stops) || reversedStops,
    variants: (customBwd && customBwd.variants) || forward.variants,
  };
}

// buduje HTML tabeli rozkładu dla danego przystanku (z obsługą wariantów).
// `variants`      – obiekt { "s": "kurs do Strefy", "r": "kurs do Dworca" }
// `onlyVariant`   – jeśli podany (np. "s"), pokazuje TYLKO kursy z tą literą
// `excludeVariants` – tablica liter do wykluczenia (np. ["s"]) — dla gałęzi głównej
function renderStopTimetable(
  baseSchedule,
  offset,
  variants,
  onlyVariant,
  excludeVariants,
  branches
) {

  if (onlyVariant && variants?.[onlyVariant]?.schedule) {
    baseSchedule = variants[onlyVariant].schedule;
  }

  let html = "";

  Object.entries(baseSchedule).forEach(([dayLabel, entries]) => {
    // przesuń wszystkie wpisy o offset, zachowując litery wariantów
    let shifted = entries
      .map(e => shiftEntry(e, offset))
      .sort((a, b) => parseEntry(a).time.localeCompare(parseEntry(b).time));

    // filtrowanie wg wariantu
    if (onlyVariant && !(
      dir?.variants?.[onlyVariant]?.baseSchedule
      )) {

      shifted = shifted.filter(e => {

        const parsed = parseEntry(e);

        if (parsed.variant !== onlyVariant)
          return false;


        const branch = branches.find(
          b => b.variantLetter === onlyVariant
        );


        if (branch && branch.startAfterStop !== undefined) {

          if (offset < branch.startAfterStop)
            return false;

        }

        return true;
      });

    }
    else if (excludeVariants && excludeVariants.length) {

      shifted = shifted.filter(e => {
        const { variant } = parseEntry(e);

        if (!excludeVariants.includes(variant)) return true;

        const v = variants?.[variant];

        if (!v || typeof v !== "object") return false;

        return !(offset >= v.from && offset <= v.to);
      });
    }

    if (!shifted.length) return; // pomiń sekcję jeśli brak kursów po filtrowaniu

    const grouped = groupByHour(shifted);
    const hours = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

    html += `<div class="tt-day-label">${dayLabel}</div>`;
    html += `<table class="tt"><tr><th>godz</th><th style="text-align:left">minuty</th></tr>`;
    hours.forEach(h => {
      const minsHtml = grouped[h].map(({ mm, variant }) => {
        // na gałęzi głównej pokazuj litery innych wariantów (nie wykluczonych)
        if (variant && !onlyVariant) {
          return `${mm}<sup class="variant-sup">${variant}</sup>`;
        }
        // na gałęzi wariantowej — sama minuta, bez litery (kontekst jest jasny)
        return mm;
      }).join(" ");
      html += `<tr><td class="hour">${h}</td><td class="mins">${minsHtml}</td></tr>`;
    });
    html += `</table>`;
  });

  // legenda — tylko na gałęzi głównej (onlyVariant == null)
  if (!onlyVariant && variants && Object.keys(variants).length) {
    html += `<div class="variant-legend">`;
    Object.entries(variants).forEach(([letter, desc]) => {
    const label = typeof desc === "object" ? desc.label : desc;

    html += `
      <span class="variant-legend-item">
        <sup class="variant-sup">${letter}</sup> – ${label}
      </span>`;
    });
    html += `</div>`;
  }

  return html || `<div style="font-size:12px;color:var(--color-text-secondary);padding:4px 0;">Brak kursów.</div>`;
}

// =========================================================
//  RENDEROWANIE LINII  (z obsługą rozgałęzień)
// =========================================================
//
//  Rozgałęzienie definiuje się w `fwd` (lub `bwd`) jako:
//
//  branches: [
//    {
//      variantLetter: "s",          // litera wariantu z baseSchedule
//      label: "→ Strefa Pętla",     // etykieta gałęzi w UI
//      color: "#c0392b",            // kolor gałęzi (opcjonalny, domyślnie czerwony)
//      forkAfterStop: 2,            // indeks (0-based) ostatniego WSPÓLNEGO przystanku
//      stops: [                     // przystanki TYLKO na tej gałęzi (po punkcie rozwidlenia)
//        ["Wojska Polskiego UTA","02",20],
//        ["Brama Wschodnia","02",21],
//        ["Strefa Pętla","01",23],
//      ]
//    }
//  ]
//
//  Przystanki PRZED rozwidleniem (indeks 0..forkAfterStop włącznie)
//  są wspólne dla wszystkich wariantów i renderowane normalnie.
//  Od indeksu forkAfterStop+1 lista przystanków dzieli się na kolumny.
// =========================================================

function renderLine(lineNum) {
  const lineData = lines[lineNum];
  if (!lineData.bwd || !lineData.bwd.stops) {
    lineData.bwd = makeReverse(lineData.fwd, lineData.bwd);
  }

  const dirKey = currentDirection[lineNum] || "fwd";
  const dir = lineData[dirKey];
  const destName = dir.stops[dir.stops.length - 1][0];

  const destEl = document.getElementById(`dest-${lineNum}`);
  if (destEl) destEl.textContent = destName;

  const toggle = document.getElementById(`dirtoggle-${lineNum}`);
  if (toggle) {
    toggle.innerHTML = "";
    [["fwd", lineData.fwd], ["bwd", lineData.bwd]].forEach(([key, d]) => {
      const dest = d.stops[d.stops.length - 1][0];
      const btn = document.createElement("button");
      btn.className = "dir-btn" + (key === dirKey ? " active" : "");
      btn.textContent = "→ " + dest;
      btn.onclick = () => {
        currentDirection[lineNum] = key;
        renderLine(lineNum);
      };
      toggle.appendChild(btn);
    });
  }

  const container = document.getElementById(`route-${lineNum}`);
  if (!container) return;
  container.innerHTML = "";

  const branches = dir.branches || [];
  const forkIdx = branches.length ? branches[0].forkAfterStop : -1;

  // litery wszystkich wariantów z gałęzi — do wykluczenia z gałęzi głównej
  const allBranchLetters = branches.map(b => b.variantLetter);

  // --- pomocnicza: tworzy wiersz przystanku (klikalny, otwiera rozkład) ---
  // onlyVariant    = null (wspólne/główne) lub litera (gałąź wariantowa)
  // excludeVariants = [] (wspólne) lub allBranchLetters (gałąź główna)
  function makeStopRow(name, badge, offset, lineColor, isFirst, isLast,
                       onlyVariant, excludeVariants) {
    const wrapper = document.createElement("div");

    const row = document.createElement("div");
    row.className = "stop-row";

    const dotStyle = lineColor
      ? `background:${lineColor};box-shadow:0 0 0 2px ${lineColor};`
      : "";
    const lineStyle = lineColor ? `background:${lineColor};` : "";

    row.innerHTML = `
      <div class="stop-graphic">
        <div class="stop-line-top${isFirst ? " invisible" : ""}" style="${lineStyle}"></div>
        <div class="stop-dot" style="${dotStyle}"></div>
        <div class="stop-line-bot${isLast ? " invisible" : ""}" style="${lineStyle}"></div>
      </div>
      <div class="stop-info">
        <div class="stop-name">${name}<span class="stop-badge">${badge}</span></div>
        <div class="stop-time">${offset} min od początku trasy</div>
      </div>
      <div class="stop-arrow">▶</div>
    `;

    const panel = document.createElement("div");
    panel.className = "stop-timetable";
    let schedule = dir.baseSchedule;

// jeżeli przystanek jest w wariancie i wariant ma własny rozkład,
// użyj rozkładu wariantowego
    if (
      onlyVariant &&
      dir.variants &&
      dir.variants[onlyVariant] &&
      dir.variants[onlyVariant].baseSchedule
    ) {
      schedule = dir.variants[onlyVariant].baseSchedule;
    }

    panel.innerHTML = renderStopTimetable(
      schedule,
      offset,
      dir.variants,
      onlyVariant || null,
      excludeVariants || [],
      dir.branches || []
    );

    row.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("open");
      row.classList.toggle("open", isOpen);
    });

    wrapper.appendChild(row);
    wrapper.appendChild(panel);
    return wrapper;
  }

  // --- renderuj przystanki wspólne (przed rozwidleniem) ---
  const sharedStops = branches.length ? dir.stops.slice(0, forkIdx + 1) : dir.stops;
  const mainOnlyStops = branches.length ? dir.stops.slice(forkIdx + 1) : [];

  sharedStops.forEach(([name, badge, offset], i) => {
    const isFirst = i === 0;
    const isLast = !branches.length && i === dir.stops.length - 1;
    // przystanki wspólne: brak filtra — pokazują wszystkie kursy
    container.appendChild(makeStopRow(name, badge, offset, null, isFirst, isLast,
      null, []));
  });

  // --- jeśli jest rozgałęzienie: renderuj sekcję widełek + kolumny ---
  if (branches.length) {
    // nagłówek rozwidlenia
    const forkHeader = document.createElement("div");
    forkHeader.className = "branch-fork-header";

    // etykiety kolumn
    let labelsHtml = `<div class="branch-labels">`;
    const mainDest = dir.stops[dir.stops.length - 1][0];
    labelsHtml += `<div class="branch-label-main">→ ${mainDest}</div>`;
    branches.forEach(b => {
      labelsHtml += `<div class="branch-label-variant" style="color:${b.color || "#c0392b"}"><sup class="variant-sup">${b.variantLetter}</sup> ${b.label}</div>`;
    });
    labelsHtml += `</div>`;
    forkHeader.innerHTML = labelsHtml;
    container.appendChild(forkHeader);

    // kolumny przystanków po rozwidleniu
    const colWrap = document.createElement("div");
    colWrap.className = "branch-columns";

    // kolumna główna — wyklucza kursy wariantów z gałęzi
    const mainCol = document.createElement("div");
    mainCol.className = "branch-col branch-col-main";
    mainOnlyStops.forEach(([name, badge, offset], i) => {
      const isLast = i === mainOnlyStops.length - 1;
      mainCol.appendChild(makeStopRow(name, badge, offset, "#1a55a8", false, isLast,
        null, allBranchLetters));
    });
    colWrap.appendChild(mainCol);

    // kolumny wariantów — pokazują tylko kursy z daną literą
    branches.forEach(b => {
      const varCol = document.createElement("div");
      varCol.className = "branch-col branch-col-variant";
      const color = b.color || "#c0392b";
      b.stops.forEach(([name, badge, offset], i) => {
        const isLast = i === b.stops.length - 1;
        varCol.appendChild(makeStopRow(name, badge, offset, color, false, isLast,
          b.variantLetter, null));
      });
      colWrap.appendChild(varCol);
    });

    container.appendChild(colWrap);
  }
}

function showLine(num, el) {
  document.querySelectorAll(".line-section").forEach(s => s.classList.remove("visible"));
  document.querySelectorAll(".line-tab").forEach(t => t.classList.remove("active"));
  document.getElementById(`line-${num}`).classList.add("visible");
  el.classList.add("active");
}

// =========================================================
//  INICJALIZACJA
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(lines).forEach(lineNum => renderLine(lineNum));
});
