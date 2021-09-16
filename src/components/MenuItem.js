import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const MenuItem = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <NavLink
      to={to}
      activeClassName="active"
      className={`py-2 px-4 leading-5 hover:bg-blue-200 rounded ${
        match ? 'bg-blue-100' : ''
      }`}
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
