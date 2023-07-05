import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <p className="container mx-auto">Main</p>
        <Footer />
      </>
    );
  }
}
