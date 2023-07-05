import React from "react";
import { Link } from "react-router-dom";

// Defines the types of the React props. provides type safety.
interface BrandLinkProps {
  classes: string;
}

const BrandLink: React.FC<BrandLinkProps> = ({ classes }) => (
  <Link className={`text-2xl font-krona ${classes}`} to="/">
    Lou's PCs
  </Link>
);

export default BrandLink;
