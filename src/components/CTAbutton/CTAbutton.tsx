import React from "react";
import { Link } from "react-router-dom";

interface CTAbuttonProps {
  link: string;
  buttonCopy: string;
}

const CTAbutton: React.FC<CTAbuttonProps> = ({ link, buttonCopy }) => {
  return (
    <Link
      to={link}
      className="inline-block px-8 py-2 text-sm text-white bg-darker_green"
    >
      {buttonCopy}
    </Link>
  );
};

export default CTAbutton;
