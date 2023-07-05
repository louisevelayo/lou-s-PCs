import React, { Component } from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  links: { path: string; name: string }[];
}

export default class Navlinks extends Component<NavLinksProps> {
  render() {
    const {
      links = [
        { path: "/", name: "Home" },
        { path: "/laptops", name: "Laptops" },
        { path: "/smartphones", name: "Smartphones" },
      ],
    } = this.props;

    return (
      <>
        {links.map((link, index) => (
          <NavLink
            className={({isActive}) =>
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
  }
}
