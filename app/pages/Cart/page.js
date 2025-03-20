 
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleCardClick = () => {
    router.push("/pages/OrderPage");
  };
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-head">
          <h2>Cart</h2>
        </div>

        <div className="cart-container-content">
          <div className="cart-product">
            <div className="cart-product-left">
              <img src="/image/Specialty3.png" alt="" />
              <div className="cart-product-details">
                <div className="cart-product-details-head">
                  <h2>
                    925 Sterling Silver American Diamond Necklace | 925 | 475 gm
                  </h2>
                </div>

                <div className="quntity">
                  <button onClick={decrementQuantity}>-</button>
                  <p>{quantity}</p>
                  <button onClick={incrementQuantity}>+</button>
                </div>
              </div>
            </div>
            <div className="cart-product-right">
              <h2>$23,500</h2>
              <h2>$33,500</h2>
            </div>
          </div>
          <div className="cart-product-total">
            <div className="cart-product-total-head">
              <h2>Order Details</h2>
            </div>
            <div className="card-product-total-contnet">
              <div className="total-content">
                <p>Cart Total</p>
                <p>$23,500</p>
              </div>
              <div className="total-content">
                <p>Cart Discount</p>
                <p>-$3,500</p>
              </div>
              <div className="total-content">
                <p>Delivery Charge</p>
                <p>$500</p>
              </div>
              <div className="total-content">
                <b>Order Total</b>
                <b>$20,500</b>
              </div>
            </div>
          </div>
          <div className="product-total-btn">
<button onClick={handleCardClick}>PROCEED TO SHIPPING</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
