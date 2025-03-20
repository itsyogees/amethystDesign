import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { LuPhoneCall, LuMapPin } from "react-icons/lu";
import { FiUser, FiMail, FiGrid, FiPhone, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-head">
          <h2>Our Contact Information</h2>
        </div>
        <div className="contact-content">
          <div className="contact-content-cards">
            <div className="contact-content-card">
              <div className="contact-card-logo">
                <LuMapPin />
              </div>
              <div className="contact-card-text">
                <h2>Open daily from</h2>
                
                <p>11 am till 7.30 pm.</p>
              </div>
            </div>
            <div className="contact-content-card">
              <div className="contact-card-logo">
                <FiMail />
              </div>
              <div className="contact-card-text">
                <h2>Our Mail</h2>
                <p> shops@amethystchennai.com</p>
              </div>
            </div>
            <div className="contact-content-card">
              <div className="contact-card-logo">
                <LuPhoneCall />
              </div>
              <div className="contact-card-text">
                <h2>Our Phone</h2>
                <p> 044 45991630 / 31 /32</p>
                
              </div>
            </div>
          </div>
          <div className="content-touch-content">
            <div className="input-row">
              <div className="input-group">
                <input type="text" placeholder="Your Name*" />
                <div className="input-icon">
                  <FiUser /> {/* Icon for Name */}
                </div>
              </div>

              <div className="input-group">
                <input type="email" placeholder="Email Address*" />
                <div className="input-icon">
                  <FiMail /> {/* Icon for Email */}
                </div>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <select>
                  <option value="">Interior Designing</option>
                  <option value="designing">Designing</option>
                  <option value="consulting">Consulting</option>
                  <option value="renovation">Renovation</option>
                </select>
                <div className="input-icon">
                  <FiGrid /> {/* Icon for Select Box */}
                </div>
              </div>

              <div className="input-group">
                <input type="tel" placeholder="Phone Number*" />
                <div className="input-icon">
                  <FiPhone /> {/* Icon for Phone */}
                </div>
              </div>
            </div>

            <div className="input-group b-2">
              <textarea placeholder="Message"></textarea>
              <div className="input-icon">
                <FiMessageCircle /> {/* Icon for Message */}
              </div>
            </div>

            <button className="send-message-btn">Send Message</button>
          </div>
        </div>
        <div className="contact-map">
          <div
            style={{
              overflow: "hidden",
              resize: "none",
              maxWidth: "100%",
              width: "100%",
              height: "500px",
            }}
          >
            <div
              id="embed-map-display"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.3285976428738!2d80.25981!3d13.057479000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663d4d0f17b5%3A0x75821027f81c5851!2sAmethyst!5e0!3m2!1sen!2sin!4v1738379837361!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              className="googlecoder"
              rel="nofollow"
              href="https://www.bootstrapskins.com/themes"
              id="authmaps-data"
            >
              premium bootstrap themes
            </a>
            <style>
              {`
                #embed-map-display .text-marker {}
                .map-generator { max-width: 100%; max-height: 100%; background: none; }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
