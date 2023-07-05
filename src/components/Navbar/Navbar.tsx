import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import BrandLink from "../Brandlink";
import Navlinks from "../Navlinks";
import ShoppingCartIcon from "../../assets/ShoppingCartIcon";
import SearchIcon from "../../assets/SearchIcon";
import AccountIcon from "../../assets/AccountIcon";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="container flex items-center justify-between p-3 mx-auto font-krona">
        <BrandLink classes="text-black" />

        <div className="flex capitalize">
          <Navlinks />
        </div>

        {/* ICONS */}
        <div className="flex">
          <ShoppingCartIcon />
          <SearchIcon />
          <AccountIcon />
        </div>
      </nav>
    );
  }
}
