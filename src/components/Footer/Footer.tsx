import React, { Component } from "react";
import BrandLink from "../Brandlink";

export default class Footer extends Component {
  render() {
    const links = ["About", "Warranty", "Categories", "Mentions", "Follow us"];
    return (
      <footer className="flex flex-col justify-between p-16 text-white bg-black h-80 ">
        <div className="container flex mx-auto capitalize">
          {links.map((link) => (
            <a className="mr-32 " href="/">{link}</a>
          ))}
          <BrandLink classes="text-green" />
        </div>
        <p className="flex justify-center text-dark_grey">React project of Louise</p>
      </footer>
    );
  }
}
