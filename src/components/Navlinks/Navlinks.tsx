import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  links: { path: string; name: string }[];
}

const Navlinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-8 text-sm text-green" : "mr-8 text-sm text-black"
          }
          to={`${link.path}`}
          key={`${link.name}-${index}`}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default Navlinks;
