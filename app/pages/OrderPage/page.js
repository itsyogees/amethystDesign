"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    countryId: "",
    stateId: "",
  });
  const [errors, setErrors] = useState({});

  // Static addresses
  const addresses = [
    {
      id: "1",
      fullName: "John Doe",
      phoneNumber: "1234567890",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "New York",
      postalCode: "10001",
    },
    {
      id: "2",
      fullName: "Jane Smith",
      phoneNumber: "0987654321",
      addressLine1: "456 Elm St",
      addressLine2: "",
      city: "Los Angeles",
      postalCode: "90001",
    },
  ];

  // Static cart items
  const cartItems = [
    {
      productId: "101",
      productName: "Product 1",
      unitPrice: 29.99,
      tax: 2.99,
      quantity: 2,
    },
    {
      productId: "102",
      productName: "Product 2",
      unitPrice: 49.99,
      tax: 4.99,
      quantity: 1,
    },
  ];

  // Static image URLs
  const imageUrls = {
    "101": "https://via.placeholder.com/150",
    "102": "https://via.placeholder.com/150",
  };

  // Static total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.unitPrice + item.tax) * item.quantity;
  }, 0);

  const selectedAddress = addresses.find((addr) => addr.id === selectedAddressId);

  const handleAddNewAddress = () => {
    setIsFormVisible(true);
  };

  const handleAddressChange = (value) => {
    setSelectedAddressId(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  const handlePlaceOrder = () => { 
    router.push("/pages/Orders");
  };

  return (
    <div className="placeOrder">
      <div className="placeOrderContainer">
        <div className="placeOrderHead">
          <h2>Place Order</h2>
        </div>
        {loading ? (
          <p>Loading cart items...</p>
        ) : (
          !isFormVisible && (
            <>
              <div className="placeOrderContentMain">
                <div className="placeOrderContentHead">
                  <h2>Shipping Address</h2>
                  <button onClick={handleAddNewAddress}>Add New Address</button>
                </div>

                {addresses.length > 1 ? (
                  <div className="placeOrderContent">
                    <label htmlFor="addressSelect">
                      <strong>Select Address:</strong>
                    </label>
                    <select
                      id="addressSelect"
                      className="addressDropdown"
                      value={selectedAddressId || ""}
                      onChange={(e) => handleAddressChange(e.target.value)}
                    >
                      <option value="" disabled>
                        Select an Address
                      </option>
                      {addresses.map((address) => (
                        <option key={address.id} value={address.id}>
                          {address.fullName} - {address.city},{" "}
                          {address.postalCode}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : addresses.length === 0 ? (
                  <p>No Addresses Available, Please Add a New Address</p>
                ) : null}

                {selectedAddress && (
                  <div>
                    <p>
                      <strong>Full Name:</strong> {selectedAddress.fullName}
                    </p>
                    <p>
                      <strong>Phone Number:</strong>{" "}
                      {selectedAddress.phoneNumber}
                    </p>
                    <p>
                      <strong>Address Line 1:</strong>{" "}
                      {selectedAddress.addressLine1}
                    </p>
                    <p>
                      <strong>Address Line 2:</strong>{" "}
                      {selectedAddress.addressLine2}
                    </p>
                    <p>
                      <strong>City:</strong> {selectedAddress.city}
                    </p>
                    <p>
                      <strong>Postal Code:</strong> {selectedAddress.postalCode}
                    </p>
                  </div>
                )}
              </div>
            </>
          )
        )}

        {isFormVisible && (
          <form className="placeOrderForm" onSubmit={handleSubmit}>
            <div className={`formGroup ${errors.fullName ? "errorGroup" : ""}`}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                className={`inputField ${errors.fullName ? "inputError" : ""}`}
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div
              className={`formGroup ${errors.phoneNumber ? "errorGroup" : ""}`}
            >
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className={`inputField ${
                  errors.phoneNumber ? "inputError" : ""
                }`}
                maxLength={10}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div
              className={`formGroup ${errors.addressLine1 ? "errorGroup" : ""}`}
            >
              <label>Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                className={`inputField ${
                  errors.addressLine1 ? "inputError" : ""
                }`}
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                className={`inputField ${
                  errors.addressLine1 ? "inputError" : ""
                }`}
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>

            <div className={`formGroup ${errors.city ? "errorGroup" : ""}`}>
              <label>City</label>
              <input
                type="text"
                name="city"
                className={`inputField ${errors.city ? "inputError" : ""}`}
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div
              className={`formGroup ${errors.postalCode ? "errorGroup" : ""}`}
            >
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                className={`inputField ${
                  errors.postalCode ? "inputError" : ""
                }`}
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>

            <div
              className={`formGroup ${errors.countryId ? "errorGroup" : ""}`}
            >
              <label>Country</label>
              <select
                name="countryId"
                className={`selectField ${
                  errors.countryId ? "inputError" : ""
                }`}
                value={formData.countryId}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="1">United States</option>
                <option value="2">Canada</option>
              </select>
            </div>

            <div className={`formGroup ${errors.stateId ? "errorGroup" : ""}`}>
              <label>State</label>
              <select
                name="stateId"
                className={`selectField ${errors.stateId ? "inputError" : ""}`}
                value={formData.stateId}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="1">California</option>
                <option value="2">New York</option>
              </select>
            </div>

            <div className="formActions">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit">Add Address</button>
            </div>
          </form>
        )}
      </div>

      <div className="OrderContainer">
        <div className="orderContainerHead">
          <h2>Place Your Order</h2>
          <div className="orderContainerContent">
            {loading ? (
              <p>Loading cart items...</p>
            ) : cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <table className="place-cart-items">
                <thead>
                  <tr> 
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Tax</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      
                      <td className="place-details-column">
                        {item.productName}
                      </td>
                      <td className="place-price-column">
                        {item.unitPrice.toFixed(2)}
                      </td>
                      <td>{item.tax.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                  <tr className="place-card-bottom">
                    <td colSpan="4">Total: ₹ {totalAmount.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <div className="place-order-btn">
            <button className="update-btn" onClick={handlePlaceOrder}>
             Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;