import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/*
        
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk 
       */}
        <Link to="/">
          <img src={logo} className="navbar-brand" alt="logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <Link to="/list" className="nav-link ml-5">
            Products
          </Link>
        </ul>
        {/* Login */}
        <ul className="navbar-nav align-items-center">
          <Link to="/login" className="nav-link ml-5">
            Login
          </Link>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" aria-hidden="true"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
