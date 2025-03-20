"use client";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="contactDetails">
          <div className="footerLogo">
            <h1 className="logo">Amethyst</h1>
          </div>
          <p>
            The Amethyst boutique hosts a selection of Indian design across
            clothing, fine and costume jewellery, as well as accents for home.
          </p> 
          <div className="footerIcons">
            <RiWhatsappFill />
            <FaFacebook />
            <RiInstagramFill />
          </div>
        </div>

        <div className="explore-detail">
          <h3>Explore</h3>

          <div className="footer-lists">
            <Link href="/" className="footer-list-item">
              <MdKeyboardDoubleArrowRight /> Home
            </Link>
            <Link href="/pages/About" className="footer-list-item">
              <MdKeyboardDoubleArrowRight /> About Us
            </Link>
            <Link href="/pages/ClothShop" className="footer-list-item">
              <MdKeyboardDoubleArrowRight /> Fashion
            </Link>
            <Link href="/pages/JewelleryShop" className="footer-list-item">
              <MdKeyboardDoubleArrowRight /> Accessories
            </Link>
            <Link href="/pages/Contact" className="footer-list-item">
              <MdKeyboardDoubleArrowRight /> Contact Us
            </Link>
          </div>
        </div>

        {/* <div className="recent-detail">
                <h3>Recent</h3>
                <p>Lorem ipsum dolor sit amet dolor sit amet</p>
           
            </div> */}

        <div className="contacts">
          <h3>Contacts</h3>

          <div className="address">
            <div className="address-icon">
              <FaLocationDot />
            </div>

            <div className="address-details">
              <div className="address-info">
                <p className="address-head">Our Location</p>
                <p className="address-head">
                  Amethyst, Whites Road, Royapettah,
                </p>
                <p className="address-head">Chennai - 600 014</p>
              </div>
            </div>
          </div>

          <div className="address">
            <div className="address-icon">
              <FaPhoneAlt />
            </div>

            <div className="address-details">
              <div className="address-info">
                <p className="address-head">Our Phone</p>
                <p className="address-head">044 45991630 / 31 / 32</p>
              </div>
            </div>
          </div>

          <div className="address">
            <div className="address-icon">
              <MdOutlineMailOutline />
            </div>

            <div className="address-details">
              <div className="address-info">
                <p className="address-head">Our Email</p>
                <p className="address-head">shops@amethystchennai.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-buttom">
        <p>&copy; 2024 Amethyst. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
