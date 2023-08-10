import React, { useEffect, useState } from "react";
import "./Product.css";
import { products } from "./ProductData";

export default function Product() {

  const productId = [];

  const setCartItem = (item) => {
    const cartItem = JSON.parse(localStorage.getItem('cartItem'));



    if (cartItem.length <= 0) {
      cartItem.push(item);
    }
    else {
      cartItem.map((cartProduct, index) => {
        productId.push(cartProduct.id);
      });

      if (productId.includes(item.id)) {
        alert("Product hass been already added into cart")
      }
      else {
        cartItem.push(item);
        alert("Product  added Successfully");
      }

    }
    localStorage.setItem('cartItem', JSON.stringify(cartItem));

    console.log(cartItem);
  }


  console.log(products);
  return (
    <>
      <div className="row product-container">
        {products.map((item, index) => {
          return (
            <>
              <div className="col-md-4 col-lg-3 col-sm-12  ">
                <div className="m-1 card  product-item">
                  <img className=" img-fluid product-image card-img-top" src={item.images[0]} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6>{item.brand}</h6>
                    <div className="product-description">
                      <p className="card-text">
                        {item.description}
                      </p>
                    </div>
                    <div className="product-price-detail">
                      <h6>Price : {item.price}</h6>
                      <h6>Discount : {item.discountPercentage}</h6>

                    </div>
                    <button onClick={() => {

                      setCartItem(item);

                    }} href="#" class="btn btn-primary product-button">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
