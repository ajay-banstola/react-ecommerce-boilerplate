import React, { Component, Fragment } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Product />
        <Details />
        <Cart />
        <Default />
      </Fragment>
    );
  }
}

export default App;
