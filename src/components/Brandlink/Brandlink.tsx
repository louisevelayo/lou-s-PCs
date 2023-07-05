import React from "react";

// Defines the types of the React props. provides type safety.
interface BrandLinkProps {
  classes: string;
}

const BrandLink: React.FC<BrandLinkProps> = ({ classes }) => (
  <a className={`text-2xl font-krona ${classes}`} href="/">
    Lou's PCs
  </a>
);

export default BrandLink;
