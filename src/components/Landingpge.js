import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

export default class Landingpge extends Component {
  state = {
    isLoggedIn: false
  };
  render() {
    return (
      <div>
        This is landing page.
        {this.state.isLoggedIn ? (
          <Redirect to="/list" />
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}
