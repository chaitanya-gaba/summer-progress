const matches = [
  {
    id: 1,
    status: "LIVE",
    format: "T20",
    teams: {
      home: { code: "IND", score: "187/3", overs: "18.2" },
      away: { code: "AUS", score: null, overs: null }
    },
    runRate: "10.2",
    link: "match.html?id=1"
  },
  {
    id: 2,
    status: "LIVE",
    format: "ODI",
    teams: {
      home: { code: "ENG", score: "220/6", overs: "39.3" },
      away: { code: "SA", score: null, overs: null }
    },
    runRate: "5.58",
    link: "match.html?id=2"
  },
  {
    id: 3,
    status: "LIVE",
    format: "TEST",
    teams: {
      home: { code: "NZ", score: "320/5", overs: "85.0" },
      away: { code: "PAK", score: null, overs: null }
    },
    runRate: "3.76",
    link: "match.html?id=3"
  },
  {
    id: 4,
    status: "UPCOMING",
    format: "ODI",
    teams: {
      home: { code: "ENG" },
      away: { code: "SA" }
    },
    startTime: "Tomorrow · 3:30 PM",
    link: "match.html?id=4"
  },
  {
    id: 5,
    status: "COMPLETED",
    format: "TEST",
    result: "IND beat AUS by 6 wickets",
    time: "Yesterday",
    link: "match.html?id=5"
  }
];