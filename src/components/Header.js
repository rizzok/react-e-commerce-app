import Menu from './Menu';
import MenuItem from './MenuItem';

const Header = () => {
  return (
    <header className="py-3 px-4 shadow flex justify-between items-center">
      <h1 className="font-bold text-blue-700">React Shop</h1>
      <Menu>
        <MenuItem activeOnlyWhenExact="true" to="/" label="Accueil" />
        <MenuItem to="/contact" label="Contact" />
        <MenuItem to="/account" label="Mon compte" />
      </Menu>
    </header>
  );
};

export default Header;
