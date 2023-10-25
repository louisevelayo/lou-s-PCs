import React from "react";
import BrandLink from "../Brandlink";
import Navlinks from "../Navlinks";
import ShoppingCartIcon from "../../assets/ShoppingCartIcon";
import SearchIcon from "../../assets/SearchIcon";
import AccountIcon from "../../assets/AccountIcon";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between pt-3 pb-3 mx-auto font-krona">
      <BrandLink classes="text-black" />

      <div className="flex capitalize">
        <Navlinks
          links={[
            { path: "/", name: "Home" },
            { path: "/laptops", name: "Laptops" },
            { path: "/smartphones", name: "Smartphones" },
          ]}
        />
      </div>

      <div className="flex">
        <ShoppingCartIcon />
        <SearchIcon />
        <AccountIcon />
      </div>
    </nav>
  );
};

export default Navbar;
