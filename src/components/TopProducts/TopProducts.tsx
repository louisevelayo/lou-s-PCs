import React, { Component } from "react";
import CTAbutton from "../CTAbutton";
import SectionTitle from "../SectionTitle";
import useGetProducts from "../../hooks/useGetProducts"


export default class TopProducts extends Component {
  render() {
    useGetProducts()
    return (
      <>
        <div className="container flex items-center justify-between mx-auto">
          <SectionTitle title="Top products" />
          <CTAbutton link="/laptops" buttonCopy="See more" />
        </div>
      </>

    );
  }
}

