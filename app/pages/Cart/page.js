"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "925 Sterling Silver American Diamond Necklace | 925 | 475 gm",
      price: 23500,
      discount: 3500,
      quantity: 1,
      image: "/image/Specialty3.png",
    },
    {
      id: 2,
      name: "Women's Elegant Floral Dress | Size M | Red",
      price: 4500,
      discount: 500,
      quantity: 1,
      image: "/image/WomensDress.png",
    },
  ]);

  const deliveryCharge = 500;
  const router = useRouter();

  const incrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleCardClick = () => {
    router.push("/pages/OrderPage");
  };

  // Calculate total price, discount, and order total
  const cartTotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const cartDiscount = products.reduce(
    (total, product) => total + product.discount * product.quantity,
    0
  );
  const orderTotal = cartTotal - cartDiscount + deliveryCharge;

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-head">
          <h2>Cart</h2>
        </div>

        <div className="cart-container-content">
          {products.map((product) => (
            <div key={product.id} className="cart-product">
              <div className="cart-product-left">
                <img src={product.image} alt={product.name} />
                <div className="cart-product-details">
                  <div className="cart-product-details-head">
                    <h2>{product.name}</h2>
                  </div>
                  <div className="quntity">
                    <button onClick={() => decrementQuantity(product.id)}>
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button onClick={() => incrementQuantity(product.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart-product-right">
                <h2>${product.price.toLocaleString()}</h2>
                <h2>${(product.price - product.discount).toLocaleString()}</h2>
              </div>
            </div>
          ))}

          <div className="cart-product-total">
            <div className="cart-product-total-head">
              <h2>Order Details</h2>
            </div>
            <div className="card-product-total-contnet">
              <div className="total-content">
                <p>Cart Total</p>
                <p>${cartTotal.toLocaleString()}</p>
              </div>
              <div className="total-content">
                <p>Cart Discount</p>
                <p>-${cartDiscount.toLocaleString()}</p>
              </div>
              <div className="total-content">
                <p>Delivery Charge</p>
                <p>${deliveryCharge.toLocaleString()}</p>
              </div>
              <div className="total-content">
                <b>Order Total</b>
                <b>${orderTotal.toLocaleString()}</b>
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