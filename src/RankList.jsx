import { useEffect, useState } from "react";

function RankList() {
  const [players, setPlayers] = useState(null);
  const TOP_PLAYERS_ENDPOINT_URL =
    "/local/v1.0/ranks/leaderboard?pageIndex=0&pageSize=10";

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPlayers() {
      setIsLoading(true);

      try {
        const response = await fetch(TOP_PLAYERS_ENDPOINT_URL);
        const playerList = await response.json();

        setPlayers(
          playerList.map(
            (element) =>
              `${element.name} ${element.rank} ${element.score} ${element.lastChange}`
          )
        );
      } catch (error) {
        // console.error(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  const loadOrDisplay = (isLoading) =>
    isLoading ? (
      <div className="RankList">
        <h3>Players:</h3>
        <div>Loading</div>
      </div>
    ) : (
      <div className="RankList">
        <h3>Players:</h3>
        {players?.map((element) => (
          <li>{element}</li>
        ))}
        <br />
      </div>
    );
  // null,undefined,0
  return players?.length ? (
    loadOrDisplay()
  ) : (
    <div className="RankList">
      <h3>Players:</h3>
      <li>NoData</li>
    </div>
  );
}
export default RankList;
