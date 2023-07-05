import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Laptops from "./pages/Laptops";
import Smartphones from "./pages/Smartphones";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL.
            It prevents reloading of an entire page, so better
            performance. */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
