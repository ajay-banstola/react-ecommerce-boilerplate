import React, { Component, Fragment } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";
import "./css/style.css";
import Landingpage from "./components/Landingpge";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/list" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={Landingpage} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
