"use client";

import React from "react"; 

const UserProfile = () => {
  const userData = {
    firstName: "John",
    lastName: "Doe",
    emailId: "johndoe@example.com",
    mobileNumber: "1234567890",
  };

  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <div className="user-profile-img">
            <img src="/image/profile.png" alt="" />
            <p>John Rebecca</p>
        </div>
        <div className="user-profile-contents">
         

          <div className="user-data">
            <div className="form">
              <div className="form1">
                <label>First Name</label>
                <input
                  className="user-profile-content-input"
                  name="firstName"
                  type="text"
                  value={userData.firstName}
                  readOnly
                />
              </div>
              <div className="form1">
                <label>Last Name</label>
                <input
                  className="user-profile-content-input"
                  name="lastName"
                  type="text"
                  value={userData.lastName}
                  readOnly
                />
              </div>
              <div className="form1">
                <label>Phone Number</label>
                <input
                  className="user-profile-content-input"
                  name="mobileNumber"
                  type="text"
                  value={userData.mobileNumber}
                  readOnly
                />
              </div>
              <div className="form1">
                <label>Email</label>
                <input
                  className="user-profile-content-input"
                  name="emailId"
                  type="text"
                  value={userData.emailId}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="user-btn">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
