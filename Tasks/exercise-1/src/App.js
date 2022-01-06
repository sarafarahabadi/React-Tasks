import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar.js"
import Header from "./components/header.js";
import Body from "./components/body.js";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Body />
      </Router>
    </div>
  );
}
