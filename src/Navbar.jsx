import PlayerData from "./PlayerData";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-company-data">
        <div className="Navbar-company_data_logo">
          <img src="endGame.jpg" alt="Company logo" />
        </div>
        <div className="Navbar-company-data_name">Hangman</div>
      </div>
      <PlayerData />
    </nav>
  );
}

export default Navbar;
