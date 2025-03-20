"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const ViewClothDetails = () => {
  const router = useRouter();
  const handleCardClick = () => {
    router.push("/pages/Cart");
  };
  const initialImages = [
    "/image/Specialty11.png",
    "/image/Specialty12.png",
    "/image/Specialty10.png",
    "/image/Specialty9.png",
    "/image/Specialty7.jpeg",
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
            <h2>Textured Cotton Silk Pink Kurta with Gota Dupatta & Pants</h2>
          </div>
          <div className="viewDetails-content-price">
            <h2>$23,500</h2>
            <p>Inclusive of all Taxes.</p>
          </div>
          <div className="viewDetials-content-size">
            <p>Select Sizes</p>
            <div className="content-sizes">
              <div className="content-size">
                <p>S</p>
              </div>
              <div className="content-size">
                <p>M</p>
              </div>
              <div className="content-size">
                <p>L</p>
              </div>
              <div className="content-size">
                <p>XL</p>
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
          <div className="viewDetails-shopinfo">
            <div className="shopinfo-head">
              <p>Shipping Info</p>
            </div>
            <ul>
              <li>This product cannot be returned or exchanged</li>
              <li>To be shipped In 15-20 working days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shoppage-might">
          <div className="shoppage-might-head">
            <h2>You Might Also Like</h2>
          </div>
          <div className="home-specialty-content">
          <div className="home-specialty-img">
              <img src="/image/Specialty5.jpeg" alt="" />
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
              <img src="/image/Specialty6.jpeg" alt="" />
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
              <img src="/image/Specialty7.jpeg" alt="" />
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
              <img src="/image/Specialty8.jpeg" alt="" />
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

export default ViewClothDetails;
