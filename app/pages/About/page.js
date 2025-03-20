"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";  
const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerPage, setSlidesPerPage] = useState(4); // Default to 4 items per row
    
    const slides = [
      {
        image: "/image/Specialty9.png",
        title: "Sleeveless High Neck Top",
        price: "$500",
      },
      {
        image: "/image/shop4.jpeg",
        title: "Demo Product Name",
        price: "$500",
      },
      {
        image: "/image/Specialty12.png",
        title: "Sleeveless High Neck Top",
        price: "$500",
      },
      {
        image: "/image/shop6.jpeg",
        title: "Sleeveless High Neck Top",
        price: "$500",
      },
      {
        image: "/image/Specialty9.png",
        title: "Sleeveless High Neck Top",
        price: "$500",
      },
      {
        image: "/image/shop4.jpeg",
        title: "Demo Product Name",
        price: "$500",
      },
      {
        image: "/image/Specialty12.png",
        title: "Sleeveless High Neck Top",
        price: "$500",
      },
      {
        image: "/image/shop6.jpeg",
        title: "Sleeveless High Neck Top",
        price: "$500",
      },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % (slides.length - slidesPerPage + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? slides.length - slidesPerPage : prev - 1
      );
    };
  
    // Update the slidesPerPage based on screen size
    useEffect(() => {
      const updateSlidesPerPage = () => {
        if (window.innerWidth >= 1024) {
          setSlidesPerPage(4); // 4 items per row for desktop
        } else if (window.innerWidth >= 768) {
          setSlidesPerPage(2); // 2 items per row for tablets
        } else {
          setSlidesPerPage(1); // 1 item per row for mobile
        }
      };
  
      // Set the initial value
      updateSlidesPerPage();
  
      // Listen for resize events
      window.addEventListener("resize", updateSlidesPerPage);
  
      return () => window.removeEventListener("resize", updateSlidesPerPage);
    }, []);
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, [slidesPerPage]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const imagesSmall = [
      "/image/bannerslider1.png",
      "/image/bannerslider2.png",
      "/image/bannerslider3.png",
      "/image/bannerslider4.png",
      "/image/bannerslider5.png",
      "/image/bannerslider1.png",
    ];
  
    const slideWidth = 20; // Width of each slide in percentage (100% / 5 images = 20%)
    const maxScroll = (imagesSmall.length - 5) * slideWidth; // Maximum scroll position
  
    const handleScrollLeft = () => {
      setScrollPosition((prev) => Math.max(prev - slideWidth, 0));
    };
  
    const handleScrollRight = () => {
      setScrollPosition((prev) => Math.min(prev + slideWidth, maxScroll));
    };
  return (
    <div className="about">
      <div className="about-container">
      <div className="smallSlider">
          <div
            className="smallSliderImages"
            style={{ transform: `translateX(-${scrollPosition}%)` }}
          >
            {imagesSmall.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} />
            ))}
          </div>
          <div className="slider-controls">
            <button
              className="slider-arrow left"
              onClick={handleScrollLeft}
              disabled={scrollPosition === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              className="slider-arrow right"
              onClick={handleScrollRight}
              disabled={scrollPosition === maxScroll}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* <div className="about-head">
          <h2>About Us</h2>
          <p>Add featured products to weekly lineup</p>
        </div> */}
        {/* <div className="aboutimg">
          <img src="/image/about.jpeg" alt="" />
        </div> */}
        {/* <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
            adipiscing elit, sed incididunt ut labore dolore.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, consectetur adipiscing elit,
            sed incididunt ut labore dolore.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, consectetur adipiscing elit, sed
            incididunt ut labore dolore.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, consectetur adipiscing elit, sed incididunt ut
            labore dolore.
          </p>
        </div> */}
        <div className="about-content">
          <div className="about-content-head">
            <h2>Know Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              consectetur <br /> adipiscing elit, sed incididunt ut labore dolore.
            </p>
          </div>
          <div className="about-content-container">
            <div className="about-content-container-img">
              <div className="about-img-content-left90">
                <p>TRENDING DESIGNS</p>
              </div>
              <div className="about-img-content-top">
                <p>SHOP NEW ARRIVALS</p>
              </div>
              <img src="/image/Specialty8.png" alt="Specialty8" />
            </div>
            <div className="about-content-texts">
              <div className="about-texts-content">
                <h2>Classy Collections</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  consectetur adipiscing elit, sed incididunt ut labore dolore.
                </p>
                <div className="about-text-links">
                  <Link href="/pages/ClothShop">
                    Shop New Arrivals 
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content-container">
            <div className="about-content-texts">
              <div className="about-texts-content">
                <h2>New Collections</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  consectetur adipiscing elit, sed incididunt ut labore dolore.
                </p>
                <div className="about-text-links">
                  <Link href="/pages/JewelleryShop">
                    Shop New Arrivals
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
            <div className="about-content-container-img">
              <div className="about-img-content-left90">
                <p>TRENDING DESIGNS</p>
              </div>
              <div className="about-img-content-top">
                <p>TOP FASHION</p>
              </div>
              <img src="/image/shop1.png" alt="Specialty8" />
            </div>
          </div>
          </div>
          <div className="about-collection">
            <div className="about-collection-container">
              <div className="about-collection-content">
                <div className="about-collection-img-content">
                  <img src="/image/about1.png" alt="" />
                  <p>Bridal Sets</p>
                </div>
                <div className="about-collection-img-content">
                  <img src="/image/mainImg.jpeg" alt="" />
                  <p>Modern Dress</p>
                </div>
                <div className="about-collection-img-content">
                  <img src="/image/Specialty4.png" alt="" />
                  <p>Bangles</p>
                </div>
                <div className="about-collection-img-content">
                  <img src="/image/Specialty7.jpeg" alt="" />
                  <p>Sleeveless Dress</p>
                </div>
             
            </div>
          </div>
        </div>

        <div className="about-slider">
      <div className="about-slider-head">
        <h2>Famous Collection</h2>
      </div>
      <div className="slider-container">
        <button className="prev-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="about-slider-content">
          {slides
            .slice(currentSlide, currentSlide + slidesPerPage)
            .map((slide, index) => (
              <div key={index} className="about-slide">
                <img src={slide.image} alt={slide.title} />
                <div className="about-slide-content">
                  <p>{slide.title}</p>
                  <span>{slide.price}</span>

                  <Link href="/pages/Cart">
                    <p>Add to Cart</p>
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default About;
