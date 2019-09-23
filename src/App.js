import React, { Component, Fragment } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import ValidatedLoginForm from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={ValidatedLoginForm} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
