import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import Nav from './Nav';
import NavItem from './NavItem';

const Header = ({ handleCartClick }) => {
  return (
    <header className="py-3 px-4 shadow-sm flex justify-between items-center z-10">
      <Nav>
        <NavItem activeOnlyWhenExact="true" to="/" label="Accueil" />
        <NavItem to="/contact" label="Contact" />
      </Nav>
      <div>
        <Link to="/">
          <h1 className="font-bold text-blue-600">React Shop</h1>
        </Link>
      </div>
      <div className="flex">
        <Link to="/account">
          <HeaderButton
            svgD="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            label="Compte"
          />
        </Link>
        <HeaderButton
          svgD="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          label="Panier"
          handleClick={handleCartClick}
        />
      </div>
    </header>
  );
};

export default Header;
