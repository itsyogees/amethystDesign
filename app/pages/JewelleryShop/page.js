"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Pagination from "@/app/utils/Pagenation/Pagenation";

const JewelleryShop = () => {
  const [openFilter, setOpenFilter] = useState("CATEGORIES");
  const [openSubFilter, setOpenSubFilter] = useState("dogs");
  const [price, setPrice] = useState(30); // Default price value
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0); // Initialize to 1
  const itemsPerPage = 6; // Number of cards per page

  const toggleFilter = (filterName) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const toggleSubFilter = (subFilterName) => {
    setOpenSubFilter((prev) => (prev === subFilterName ? null : subFilterName));
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = () => {
    router.push("/pages/JewelleryShop/ViewJewelleryDetails");
  };

  const collections = [
    {
      id: 1,
      image: "/image/shop1.jpeg",
      title: "Demo Product Name 1",
     
      oldPrice: "$600",
    },
    {
      id: 2,
      image: "/image/shop2.jpeg",
      title: "Demo Product Name 2",
     
      oldPrice: "$600",
    },
    {
      id: 3,
      image: "/image/shop3.jpeg",
      title: "Demo Product Name 3",
     
      oldPrice: "$600",
    },
    {
      id: 4,
      image: "/image/shop4.jpeg",
      title: "Demo Product Name 4",
     
      oldPrice: "$600",
    },
    {
      id: 5,
      image: "/image/shop5.jpeg",
      title: "Demo Product Name 5",
     
      oldPrice: "$600",
    },
    {
      id: 6,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 6",
     
      oldPrice: "$600",
    },
    {
      id: 7,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 7",
     
      oldPrice: "$600",
    },
    {
      id: 8,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 8",
     
      oldPrice: "$600",
    },
    {
      id: 9,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 9",
     
      oldPrice: "$600",
    },
    {
      id: 10,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 10",
     
      oldPrice: "$600",
    },
    {
      id: 11,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 11",
     
      oldPrice: "$600",
    },
    {
      id: 12,
      image: "/image/shop6.jpeg",
      title: "Demo Product Name 12",
     
      oldPrice: "$600",
    },
  ];
  const [showFilter, setShowFilter] = useState(false);

  // Calculate total number of pages
  const totalPages = Math.ceil(collections.length / itemsPerPage);

  // Get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = collections.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Debugging logs
  console.log("Current Page:", currentPage);
  console.log("Start Index:", startIndex);
  console.log("End Index:", endIndex);
  console.log("Current Items:", currentItems);
  const [searchValue, setSearchValue] = useState("");

  // Refs for select dropdowns
  const sizeSelectRef = useRef(null);
  const priceSelectRef = useRef(null);
  const sortSelectRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Clear all filters function
  const handleClearAll = () => {
    // Reset all select dropdowns to first option
    if (sizeSelectRef.current) sizeSelectRef.current.selectedIndex = 0;
    if (priceSelectRef.current) priceSelectRef.current.selectedIndex = 0;
    if (sortSelectRef.current) sortSelectRef.current.selectedIndex = 0;

    // Clear search input
    setSearchValue("");
  };
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
    <div className="shoppage">
      {/* <div className="shop-banner">
            <img src="/image/jewelle.png" alt="" />
        </div> */}
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
      <div className="shoppageContainer">
        <div className="shoppageHead">
          {/* <div className="shoppageHeadContainer">
            <h2>Featured Collection</h2>
            <p>Add featured products to weekly lineup</p>
          </div> */}
          <div className="templatesBtn">
            <button
              className="filterToggleBtn"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <LuSettings2 />
            </button>
          </div>
        </div>
        <div className="filterBar">
          {/* Top Section with NEW NOW Filter and Clear Button */}
          <div className="filterBar-head">
            <div className="filterTab">
              <h2>
                NEW NOW <span>(1024)</span>
              </h2>
            </div>
            <button
              className="clearBtn"
              aria-label="Clear all filters"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>

          {/* Filters and Search - Bottom Section */}
          <div className="filterBar-content">
            {/* <div className="filterTab">
              <span className="filterLabel">Size</span>
              <div className="filterDropdown">
                <select aria-label="Size filter" ref={sizeSelectRef}>
                  <option>Select Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div> */}

            {/* Price Filter */}
            <div className="filterTab">
              <span className="filterLabel">Price</span>
              <div className="filterDropdown">
                <select aria-label="Price filter" ref={priceSelectRef}>
                  <option>Select Price</option>
                  <option>$0 - $50</option>
                  <option>$50 - $100</option>
                  <option>$100 - $200</option>
                </select>
              </div>
            </div>

            {/* Sort By Filter */}
            <div className="filterTab">
              <span className="filterLabel">Sort By</span>
              <div className="filterDropdown">
                <select aria-label="Sort preference" ref={sortSelectRef}>
                  <option>Latest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Search Box with Search Button */}
            <div className="searchGroup">
              <div className="searchBox">
                <FiSearch className="searchIcon" />
                <input
                  type="text"
                  placeholder="Search..."
                  aria-label="Search products"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
              <button className="searchBtn" aria-label="Search products">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="shoppageContent">
          <div className="templatesContent">
            <div
              className={`templatesFilter ${showFilter ? "visible" : "hidden"}`}
            >
              {/* New Now Dropdown */}
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("NEW_NOW")}
                  htmlFor="NEW_NOW"
                >
                  NEW NOW
                  {/* <span>
                    {openFilter === "NEW_NOW" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
                {openFilter === "NEW_NOW" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>
                        Men
                        {/* {openSubFilter === "MEN" && (
                          <ul className="subDropdown">
                            <li>All Clothing</li>
                            <li>Kurta Sets</li>
                            <li>Kurtas</li>
                            <li>Sherwanis</li>
                            <li>Bandhgalas</li>
                            <li>Jackets</li>
                            <li>Bottoms</li>
                            <li>Shirts</li>
                            <li>Pants</li>
                            <li>Waist Coats</li>
                            <li>View All</li>
                          </ul>
                        )} */}
                      </li>
                      <li>
                        Women
                        {/* {openSubFilter === "WOMEN" && (
                          <ul className="subDropdown">
                            <li>All Clothing</li>
                            <li>Dresses</li>
                            <li>Kurtas</li>
                            <li>Tunics</li>
                            <li>Lehengas</li>
                            <li>Saris & Concept Saris</li>
                            <li>Gowns</li>
                            <li>Coordinate Sets</li>
                            <li>Tops</li>
                            <li>Capes & Cape Sets</li>
                            <li>View All</li>
                          </ul>
                        )} */}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Women Dropdown */}
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("WOMEN")}
                  htmlFor="WOMEN"
                >
                  WOMEN
                  {/* <span>
                    {openFilter === "WOMEN" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
                {openFilter === "WOMEN" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>All Clothing</li>
                      <li>Dresses</li>
                      <li>Kurtas</li>
                      <li>Tunics</li>
                      <li>Lehengas</li>
                      <li>Saris & Concept Saris</li>
                      <li>Gowns</li>
                      <li>Coordinate Sets</li>
                      <li>Tops</li>
                      <li>Capes & Cape Sets</li>
                      <li>View All</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Men Dropdown */}
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("MEN")}
                  htmlFor="MEN"
                >
                  MEN
                  {/* <span>
                    {openFilter === "MEN" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
                {openFilter === "MEN" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>All Clothing</li>
                      <li>Kurta Sets</li>
                      <li>Kurtas</li>
                      <li>Sherwanis</li>
                      <li>Bandhgalas</li>
                      <li>Jackets</li>
                      <li>Bottoms</li>
                      <li>Shirts</li>
                      <li>Pants</li>
                      <li>Waist Coats</li>
                      <li>View All</li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Jewellery Dropdown */}
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("JEWELLERY")}
                  htmlFor="JEWELLERY"
                >
                  JEWELLERY
                  {/* <span>
                    {openFilter === "JEWELLERY" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
                {openFilter === "JEWELLERY" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>Necklace Sets</li>
                      <li>Necklaces</li>
                      <li>Bracelets</li>
                      <li>Rings</li>
                      <li>Earrings</li>
                      <li>Hair Accessories</li>
                      <li>Nose Accessories</li>
                      <li>All Jewellery</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("ACCESSORIES")}
                  htmlFor="ACCESSORIES"
                >
                  ACCESSORIES
                  {/* <span>
                    {openFilter === "ACCESSORIES" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
                {openFilter === "ACCESSORIES" && (
                  <div className="templateCustomSelect">
                    <ul className="templateDropdown">
                      <li>Bags</li>
                      <li>Belts</li>
                      <li>Footwear</li>
                      <li>All Accessories</li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Other Dropdowns */}
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("EID")}
                  htmlFor="EID"
                >
                  EID
                  {/* <span>
                    {openFilter === "EID" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("DESIGNERS")}
                  htmlFor="DESIGNERS"
                >
                  DESIGNERS
                  {/* <span>
                    {openFilter === "DESIGNERS" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("CURATED_FOR_YOU")}
                  htmlFor="CURATED_FOR_YOU"
                >
                  CURATED FOR YOU
                  {/* <span>
                    {openFilter === "CURATED_FOR_YOU" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("CELEBRITY_STYLES")}
                  htmlFor="CELEBRITY_STYLES"
                >
                  CELEBRITY STYLES
                  {/* <span>
                    {openFilter === "CELEBRITY_STYLES" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("WEDDING")}
                  htmlFor="WEDDING"
                >
                  WEDDING
                  {/* <span>
                    {openFilter === "WEDDING" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("READY_TO_SHIP")}
                  htmlFor="READY_TO_SHIP"
                >
                  READY TO SHIP
                  {/* <span>
                    {openFilter === "READY_TO_SHIP" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("SALE")}
                  htmlFor="SALE"
                >
                  SALE
                  {/* <span>
                    {openFilter === "SALE" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>

              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={() => toggleFilter("CONTACT_US")}
                  htmlFor="CONTACT_US"
                >
                  CONTACT US
                  {/* <span>
                    {openFilter === "CONTACT_US" ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span> */}
                </label>
              </div>
            </div>

            <div className="templateCards">
              <div className="templateCardsContent">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="tabCard"
                    
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="templatecardImage"
                      />
                      {hoveredCard === item.id && (
                        <div className="add-to-cart-overlay">
                          <div className="specialy-img-content">
                            <Link href="/pages/Cart">
                              <p>Add to Cart</p>
                            </Link>
                            <IoCartOutline />
                          </div>
                        </div>
                      )}
                    </div>
                    <p>{item.title}</p>
                    {/* <span>{item.modal}</span> */}
                    <div className="tabPrice" onClick={handleCardClick}>

                      <p>{item.oldPrice}</p>
                     
                      <p>{item.nexPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination Component */}
              <Pagination
                currentPage={currentPage}
                pageCount={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelleryShop; 
