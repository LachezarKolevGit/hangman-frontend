function RankList() {
  let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  ];

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return <li>{numbers}</li>;
}

export default RankList;
