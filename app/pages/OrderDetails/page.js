import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const OrderDetails = () => {
  return (
    <div className="order-product-details">
      <div className="order-product-details-container">
        <div className="order-product-details-head">
          <h2>Order Details</h2>
        </div>
        <div className="order-product-details-content">
          <div className="order-product-details-content-list">
            <p>Order Date</p>
            <p>18-Nov-2024</p>
          </div>
          <div className="order-product-details-content-list">
            <p>Order Id</p>
            <p>12345</p>
          </div>
          <div className="order-product-details-content-list">
            <p>Order Total</p>
            <p>$60.00</p>
          </div>
        </div>
        <div className="order-prodcut">
          <img src="/image/Specialty9.png" alt="img" />
          <div className="order-product-text">
            <h2>Textured Cotton Silk Pink Kurta</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.
            </p>
            <div className="order-product-text-date">
                <p>Arriving Mon, 18 November</p>
            </div>
          </div>
        </div>
        <div className="order-product-navigate">
            <div className="navigate-links">
<p>Track Package</p>
<IoIosArrowForward/>
            </div>
            <div className="navigate-links">
<p>Request Cancellation</p>
<IoIosArrowForward/>
            </div>
            <div className="navigate-links">
<p>Return or Replace Items</p>
<IoIosArrowForward/>
            </div>
            <div className="navigate-links">
<p>Write Product Review</p>
<IoIosArrowForward/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
