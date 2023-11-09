import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import hogwartsEmblem from '../../images/Hogwarts-Logo.jpg';

function Header() {
  const location = useLocation();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src={hogwartsEmblem}
          className="header-logo"
          alt="hogwarts-emblem"
        />
      </div>
      <div className="app-title-container">
        <h1 className="heading-one">Harry Potter</h1>
        <h2 className="heading-two">Magical Moments</h2>
      </div>
      <div className="header">
        {location.pathname !== '/' && (
          <Link className="home-link" to="/">
            Home
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
