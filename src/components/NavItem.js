import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const NavItem = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <NavLink
      to={to}
      activeClassName="active"
      className={`font-medium text-sm py-2 px-4 leading-5 hover:bg-blue-200 rounded ${
        match ? 'bg-blue-100' : ''
      }`}
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
