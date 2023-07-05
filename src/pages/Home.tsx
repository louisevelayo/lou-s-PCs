import React, { Component } from "react";
import Banner from "../components/Banner";
import TopProducts from "../components/TopProducts";

export default class Home extends Component {
  render() {
    return (
      <>
        <Banner />
        <TopProducts />
      </>
    );
  }
}
