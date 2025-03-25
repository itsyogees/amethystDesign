"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
const ViewJewelleryDetails = () => {
  const router = useRouter();
  const [isShippingInfoVisible, setIsShippingInfoVisible] = useState(false);
  const [isCouponVisible, setIsCouponVisible] = useState(false);
  const [isProductDetailsVisible, setIsProductDetailsVisible] = useState(false);
  const handleCardClick = () => {
    router.push("/pages/Cart");
  };
  const handleAllProductClick = () => {
    router.push("/pages/JewelleryShop");
  };
  const initialImages = [
    "/image/shop1.jpeg",
    "/image/shop2.jpeg",
    "/image/shop3.jpeg",
    "/image/shop4.jpeg",
    "/image/shop5.jpeg",
  ];

  const [slideImages, setSlideImages] = useState(initialImages);

  const [mainImage, setMainImage] = useState(initialImages[0]);

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const toggleShippingInfo = () => {
    setIsShippingInfoVisible((prev) => !prev);
  };

  const toggleCoupon = () => {
    setIsCouponVisible((prev) => !prev);
  };

  const toggleProductDetails = () => {
    setIsProductDetailsVisible((prev) => !prev);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const newImages = [...slideImages.slice(1), slideImages[0]];
      setSlideImages(newImages);

      setMainImage(newImages[0]);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideImages]);

  return (
    <div className="viewDetails">
      <div className="viewDetails-container">
        <div className="viewDetails-imgs">
          <div className="viewDetails-slides-img">
            {slideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`img-${index}`}
                onClick={() => setMainImage(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
          <div className="viewDetails-main-img">
            <img src={mainImage} alt="main-img" />
          </div>
        </div>
        <div className="viewDetails-content">
          <div className="viewDetails-content-head">
            <h2>
              925 Sterling Silver American Diamond Necklace | 925 | 475 gm
            </h2>
          </div>
          <div className="viewDetails-content-price">
            <h2>$23,500</h2>
            <p>Inclusive of all Taxes.</p>
          </div>
          <div className="viewDetials-content-size">
            <p>Select Metal Purity</p>
            <div className="content-sizes">
              <div className="content-size">
                <p>925</p>
              </div>
              
            </div>
          </div>
          <div className="viewDetials-content-size">
            <p>Select Size</p>
            <div className="content-sizes">
              <div className="content-size">
                <p>475</p>
              </div>
              
            </div>
          </div>
          <div className="viewDetails-quantity">
            <p>Quantity</p>
            <div className="quntity">
              <button onClick={decrementQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className="viewDetails-btns">
            <button onClick={handleCardClick}>Add To Cart</button>
            <button>BUY IT NOW</button>
          </div>
          <div
        className={`viewDetails-shopinfo ${
          isShippingInfoVisible ? "visible" : ""
        }`}
      >
        <div className="shopinfo-head" onClick={toggleShippingInfo}>
          <p>Shipping Info</p>
          <span>{isShippingInfoVisible ? <LuMinus /> : <LuPlus />}</span>
        </div>
        <ul>
          <li>This product cannot be returned or exchanged.</li>
          <li>Free shipping on all orders above $50.</li>
          <li>Estimated delivery time: 7-10 business days.</li>
        </ul>
      </div>

      {/* Coupon Section */}
      <div
        className={`viewDetails-shopinfo ${isCouponVisible ? "visible" : ""}`}
      >
        <div className="shopinfo-head" onClick={toggleCoupon}>
          <p>Coupon</p>
          <span>{isCouponVisible ? <LuMinus /> : <LuPlus />}</span>
        </div>
        <ul>
          <li>
            Use code <strong>JEWEL20</strong> to get 20% off on your first
            jewelry order.
          </li>
          <li>Coupons are applicable only on orders above $100.</li>
          <li>Valid until December 31, 2023.</li>
        </ul>
      </div>

      {/* Product Details Section */}
      <div
        className={`viewDetails-shopinfo ${
          isProductDetailsVisible ? "visible" : ""
        }`}
      >
        <div className="shopinfo-head" onClick={toggleProductDetails}>
          <p>Product Details</p>
          <span>{isProductDetailsVisible ? <LuMinus /> : <LuPlus />}</span>
        </div>
        <ul>
          <li>Material: 18K Gold Plated Sterling Silver</li>
          <li>Gemstone: Genuine Diamond</li>
          <li>Weight: 5 grams</li>
          <li>Dimensions: 1.5 cm (length) x 1 cm (width)</li>
          <li>Care Instructions: Avoid contact with water and chemicals.</li>
        </ul>
      </div>
        </div>
      </div>
      <div className="shoppage-might">
          <div className="shoppage-might-head">
          <h2>We're saving these for you</h2>
          <button className="btn-shoppage" onClick={handleAllProductClick}>View All</button>
          </div>
          <div className="home-specialty-content">
          <div className="home-specialty-img">
              <img src="/image/shop4.jpeg" alt="" />
              <div className="specialy-img-content">
                <p>Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/newcollection2.jpg" alt="" />
              <div className="specialy-img-content">
                <p>Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/newarr3.jpg" alt="" />
              <div className="specialy-img-content">
                <p>Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/shop3.jpeg" alt="" />
              <div className="specialy-img-content">
                <p>Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ViewJewelleryDetails;
