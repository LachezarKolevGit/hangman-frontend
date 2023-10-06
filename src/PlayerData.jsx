import { useState } from "react";
import { useEffect } from "react";

function PlayerData() {
  const [player, setPlayer] = useState(null);

  function getPlayer() {
    useEffect(() => {}, []);
  }

  return <div className="Navbar-player-data">Player data</div>;
}

export default PlayerData;
