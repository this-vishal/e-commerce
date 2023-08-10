import React from "react";
import "./Cart.css";
import p from "./assets/p.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Cart() {
  const cartItem = JSON.parse(localStorage.getItem("cartItem"));
  const countArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {cartItem.map((item) => (
          <>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="row cart-color  my-2 m-0 p-3 cart-row">
                  <div className="col-md-4 col-12 text-center">
                    <img
                      className="img-fluid p-image "
                      src={item.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-12">
                    <h4 className="p-detail">{item.title}</h4>

                    <div className="p-description">
                      {" "}
                      <p>{item.description}</p>
                    </div>
                    <h5 className="price">Price : {item.price}.00</h5>
                    <div className="bottom-item">
                      <div className="quantity-icon">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>0</span>
                        <i className="fa-solid fa-circle-minus"></i>
                      </div>
                      <div className="remove-icon ">
                        <i class="fas fa-trash"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-12"></div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12"></div>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
{
  /* <table className="cart-item-table">
            <tr className="cart-heading">
              <th className="text-center pd-image">Product Image</th>
              <th className="pd-heading">Product Detail</th>
            
              <th className="text-center pd-price">Price</th>
             
            </tr>
            {cartItem.map((item) => {
              return (
                <>
                  <tr className="cart-item-row">
                  <td className="text-center">
                    
                    <div>  <img className="img-fluid p-image "  src={item.images[0]} alt="" /></div>
                   
                    </td>
                    <td className="text-center">
                    
                      <h4 className="p-detail">{item.title}</h4>

                      <div className="p-description">  <p >{item.description}</p></div>
                      <div className="quantity-icon">
                      <i className="fa-solid fa-circle-plus"></i>
                      <h2>0</h2>
                      <i className="fa-solid fa-circle-minus"></i>
                    </div>
                    
                  
                    </td>
                    {/* <td className="text-center">
                    <div className="quantity-icon">
                      <i className="fa-solid fa-circle-plus"></i>
                      <h2>0</h2>
                      <i className="fa-solid fa-circle-minus"></i>
                    </div>
                    </td> *
                    <td className="text-center">
                 
                      <h3 className="price">{item.price}.00</h3>
                  
                    </td>
                  </tr>
                </>
              );
            })}
            </table> */
}
