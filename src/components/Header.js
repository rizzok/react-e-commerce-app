import HeaderButton from './HeaderButton';
import Nav from './Nav';
import NavItem from './NavItem';

const Header = () => {
  return (
    <header className="py-3 px-4 shadow flex justify-between items-center">
      <Nav>
        <NavItem activeOnlyWhenExact="true" to="/" label="Accueil" />
        <NavItem to="/contact" label="Contact" />
      </Nav>
      <div>
        <h1 className="font-bold text-blue-600">React Shop</h1>
      </div>
      <div className="flex">
        <HeaderButton
          svgD="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          label="Compte"
        />
        <HeaderButton
          svgD="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          label="Panier"
        />
      </div>
    </header>
  );
};

export default Header;
