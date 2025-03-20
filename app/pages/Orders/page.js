"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Orders = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/pages/TrackOrder");
  };
  const handleCardClickOrder = () => {
    router.push("/pages/OrderDetails");
  };
  return (
    <div className="orders">
      <div className="orders-container">
        <div className="orders-head">
          <h2>Your Orders</h2>
        </div>
        <div className="orders-content">
          <div className="order-list">
            <div className="order-left">
              <img src="/image/Specialty1.png" alt="img" />
              <div className="order-left-content">
                <div className="order-left-content-text">
                  <h2>925 Sterling Silver American Diamond Necklace</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                  <div className="order-delivery-date">
                    <p>Arriving Mon, 18 November</p>
                  </div>
                </div>
                <div className="order-left-content-btn">
                  <button onClick={handleCardClickOrder}>View Details</button>
                  <button onClick={handleCardClick}>Track Order</button>
                </div>
              </div>
            </div>
            <div className="order-right">
              <p>$60.00 USD</p>
            </div>
          </div>
          <div className="order-list">
            <div className="order-left">
              <img src="/image/featured1.png" alt="img" />
              <div className="order-left-content">
                <div className="order-left-content-text">
                  <h2>Textured Cotton Silk Pink Kurta</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                  <div className="order-delivery-date">
                    <p>Arriving Mon, 18 November</p>
                  </div>
                </div>
                <div className="order-left-content-btn">
                  <button onClick={handleCardClickOrder}>View Details</button>
                  <button onClick={handleCardClick}>Track Order</button>
                </div>
              </div>
            </div>
            <div className="order-right">
              <p>$60.00 USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
