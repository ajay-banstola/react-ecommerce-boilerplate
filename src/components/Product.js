import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div class="card text-left">
          <img class="card-img-top" src="holder.js/100px180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">{title}</h4>
            <p class="card-text">{img}</p>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
