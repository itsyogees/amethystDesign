"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState({
    billing: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    shipping: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    }
  });
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/components/Signup');
      return;
    }

    // Load user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData({
        firstName: storedUser.firstName || "",
        lastName: storedUser.lastName || "",
        email: storedUser.email || "",
        mobileNumber: storedUser.mobileNumber || "",
      });
    }

    // Load addresses if they exist
    const storedAddresses = JSON.parse(localStorage.getItem('addresses'));
    if (storedAddresses) {
      setAddresses(storedAddresses);
    }

    // Load newsletter preference
    const storedNewsletter = localStorage.getItem('newsletter');
    if (storedNewsletter) {
      setNewsletter(storedNewsletter === 'true');
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressChange = (type, e) => {
    const { name, value } = e.target;
    setAddresses(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [name]: value
      }
    }));
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('addresses', JSON.stringify(addresses));
    localStorage.setItem('newsletter', newsletter.toString());
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/components/Signup');
  };

  const toggleNewsletter = () => {
    setNewsletter(!newsletter);
  };

  return (
    <div className="user-profile">
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      
      <div className="user-profile-container">
        <div className="user-profile-img">
          <img src="/image/profile.png" alt="Profile" />
          <p>{`${userData.firstName} ${userData.lastName}`}</p>
        </div>

        <div className="welcome-message">
          <h2>Hello, {userData.firstName}!</h2>
          <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information.</p>
        </div>

        <div className="user-profile-contents">
          <div className="profile-section">
            <div className="section-header">
              <h3>CONTACT INFORMATION</h3>
              <button 
                className="edit-btn" 
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            <div className="user-data">
              <div className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      className="user-profile-content-input"
                      name="firstName"
                      type="text"
                      value={userData.firstName}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      className="user-profile-content-input"
                      name="lastName"
                      type="text"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="user-profile-content-input"
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      className="user-profile-content-input"
                      name="mobileNumber"
                      type="tel"
                      value={userData.mobileNumber}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="user-btn">
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={handleSave}>Save</button>
              </div>
            )}
          </div>

          {/* <div className="profile-section">
            <div className="section-header">
              <h3>NEWSLETTERS</h3>
              <button className="edit-btn" onClick={toggleNewsletter}>
                {newsletter ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>
            <p>
              {newsletter 
                ? "You are currently subscribed to our newsletter." 
                : "You are currently not subscribed to any newsletter."}
            </p>
          </div> */}

          {/* <div className="profile-section">
            <div className="section-header">
              <h3>ADDRESS BOOK</h3>
              <button 
                className="edit-btn" 
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel Editing' : 'Manage Addresses'}
              </button>
            </div>
            
            <div className="address-section billing-address">
              <h4>DEFAULT BILLING ADDRESS</h4>
              {addresses.billing.street ? (
                <div className="address-details2">
                  {isEditing ? (
                    <div className="address-form">
                      <input
                        name="street"
                        value={addresses.billing.street}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="Street Address"
                      />
                      <input
                        name="city"
                        value={addresses.billing.city}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="City"
                      />
                      <input
                        name="state"
                        value={addresses.billing.state}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="State"
                      />
                      <input
                        name="zip"
                        value={addresses.billing.zip}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="ZIP Code"
                      />
                      <input
                        name="country"
                        value={addresses.billing.country}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="Country"
                      />
                    </div>
                  ) : (
                    <>
                      <p>{addresses.billing.street}</p>
                      <p>{addresses.billing.city}, {addresses.billing.state} {addresses.billing.zip}</p>
                      <p>{addresses.billing.country}</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="no-address">
                  <p>You have not set a default billing address.</p>
                  {isEditing && (
                    <div className="address-form">
                      <input
                        name="street"
                        value={addresses.billing.street}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="Street Address"
                      />
                      <input
                        name="city"
                        value={addresses.billing.city}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="City"
                      />
                      <input
                        name="state"
                        value={addresses.billing.state}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="State"
                      />
                      <input
                        name="zip"
                        value={addresses.billing.zip}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="ZIP Code"
                      />
                      <input
                        name="country"
                        value={addresses.billing.country}
                        onChange={(e) => handleAddressChange('billing', e)}
                        placeholder="Country"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="address-section shipping-address">
              <h4>DEFAULT SHIPPING ADDRESS</h4>
              {addresses.shipping.street ? (
                <div className="address-details2">
                  {isEditing ? (
                    <div className="address-form">
                      <input
                        name="street"
                        value={addresses.shipping.street}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="Street Address"
                      />
                      <input
                        name="city"
                        value={addresses.shipping.city}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="City"
                      />
                      <input
                        name="state"
                        value={addresses.shipping.state}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="State"
                      />
                      <input
                        name="zip"
                        value={addresses.shipping.zip}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="ZIP Code"
                      />
                      <input
                        name="country"
                        value={addresses.shipping.country}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="Country"
                      />
                    </div>
                  ) : (
                    <>
                      <p>{addresses.shipping.street}</p>
                      <p>{addresses.shipping.city}, {addresses.shipping.state} {addresses.shipping.zip}</p>
                      <p>{addresses.shipping.country}</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="no-address">
                  <p>You have not set a default shipping address.</p>
                  {isEditing && (
                    <div className="address-form">
                      <input
                        name="street"
                        value={addresses.shipping.street}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="Street Address"
                      />
                      <input
                        name="city"
                        value={addresses.shipping.city}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="City"
                      />
                      <input
                        name="state"
                        value={addresses.shipping.state}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="State"
                      />
                      <input
                        name="zip"
                        value={addresses.shipping.zip}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="ZIP Code"
                      />
                      <input
                        name="country"
                        value={addresses.shipping.country}
                        onChange={(e) => handleAddressChange('shipping', e)}
                        placeholder="Country"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;