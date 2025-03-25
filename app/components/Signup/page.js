"use client";

import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === "login") {
      if (!formData.email || !formData.password) {
        alert("Please fill in all required fields");
        return;
      }
      
      // In a real app, you would verify credentials here
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email) {
        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/pages/UserProfile'); // Redirect to profile page
      } else {
        alert("Invalid credentials or user not found");
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        alert("Please fill in all required fields");
        return;
      }
      
      // Split full name into first and last name
      const nameParts = formData.name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const userData = {
        firstName,
        lastName,
        email: formData.email,
        mobileNumber: formData.mobile || "",
      };

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
      
      alert("Registration successful!");
      router.push('/pages/UserProfile'); // Redirect to profile page
    }
    
    clearForm();
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="tabs">
          <button className={`tab ${activeTab === "login" ? "active" : ""}`} onClick={() => setActiveTab("login")}>
            Login
          </button>
          <button className={`tab ${activeTab === "register" ? "active" : ""}`} onClick={() => setActiveTab("register")}>
            Register
          </button>
        </div>

        <div className="social-login">
          <p className="social-title">Continue with</p>
          <div className="social-buttons">
            <button className="social-btn google">
              <FaGoogle className="social-icon" /> Google
            </button>
            <button className="social-btn facebook">
              <FaFacebookF className="social-icon" /> Facebook
            </button>
          </div>
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">or use email</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {activeTab === "login" ? (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No. (Optional)</label>
              <input 
                type="tel" 
                id="mobile" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        )}

        <div className="auth-switch">
          {activeTab === "login" ? (
            <p>Don't have an account? <span onClick={() => setActiveTab("register")}>Register</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setActiveTab("login")}>Login</span></p>
          )}
        </div>
      </div>
      <div className="right-section">
        <div className="image-placeholder"></div>
      </div>
    </div>
  );
};

export default Signup;