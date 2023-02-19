import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
export default class idnex extends Component {
  render() {
    return (
      <>
        <h1 style={{ fontsize: "50px" }}>React-Router-Dom</h1>
        <About />
        <Home />
      </>
    );
  }
}
