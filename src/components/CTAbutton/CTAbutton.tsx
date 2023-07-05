import React, { Component } from "react";
import { Link } from "react-router-dom";

interface CTAbuttonProps{
  link: string
  buttonCopy: string
}

export default class CTAbutton extends Component<CTAbuttonProps> {
  render() {
    const { link, buttonCopy } = this.props
    return (
      <Link
        to={link}
        className="inline-block px-8 py-2 text-sm text-white bg-darker_green"
      >
        {buttonCopy}
      </Link>
    );
  }
}
