import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
         BEAUTY STORE
      </div>

      <nav className="navbar-links">
        <Link to="/">Каталог</Link>
        <Link to="/login">Вход</Link>
        <Link to="/profile">Профиль</Link>
      </nav>
    </header>
  );
}

export default Navbar;