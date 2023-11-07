import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <h1 className="heading-one">Harry Potter</h1>
      <h2 className="heading-two">Magical Moments</h2>
      {location.pathname !== '/' && (
        <Link className="home-link" to="/">
          Home
        </Link>
      )}
    </div>
  );
}

export default Header;
