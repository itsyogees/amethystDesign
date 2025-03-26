"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { IoCartOutline } from "react-icons/io5";

import { FiSearch } from "react-icons/fi";
import { FiChevronUp, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Pagination from "@/app/utils/Pagenation/Pagenation";
import { LuSettings2 } from "react-icons/lu";
import { useRouter } from "next/navigation";
const ClothShop = () => {
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
    router.push("/pages/ClothShop/ViewClothDetails");
  };
  const handleViewProduct = () => {
    router.push("/pages/Cart");
  };

  const collections = [
    {
      id: 1,
      image: "/image/Specialty6.jpeg",
      title: "Demo Product Name 1",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 2,
      image: "/image/Specialty7.jpeg",
      title: "Demo Product Name 2",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 3,
      image: "/image/Specialty8.jpeg",
      title: "Demo Product Name 3",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 4,
      image: "/image/Specialty8.jpeg",
      title: "Demo Product Name 4",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 5,
      image: "/image/Specialty9.png",
      title: "Demo Product Name 5",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 6,
      image: "/image/Specialty10.png",
      title: "Demo Product Name 6",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 7,
      image: "/image/Specialty6.jpeg",
      title: "Demo Product Name 7",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 8,
      image: "/image/Specialty7.jpeg",
      title: "Demo Product Name 8",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 9,
      image: "/image/Specialty8.jpeg",
      title: "Demo Product Name 9",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 10,
      image: "/image/Specialty8.jpeg",
      title: "Demo Product Name 10",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 11,
      image: "/image/Specialty9.png",
      title: "Demo Product Name 11",
      oldPrice: "$600",
      nexPrice: "$500",
    },
    {
      id: 12,
      image: "/image/Specialty10.png",
      title: "Demo Product Name 12",
      oldPrice: "$600",
      nexPrice: "$500",
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
    "/image/clothimg1.png",
    "/image/clothimg2.png",
    "/image/clothimg3.png",
    "/image/clothimg4.png",
    "/image/clothimg5.png",
    "/image/clothimg1.png",
  ];
  const slideWidth = 20; // Width of each slide in percentage (100% / 5 images = 20%)
  const maxScroll = (imagesSmall.length - 5) * slideWidth; // Maximum scroll position

  const handleScrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - slideWidth, 0));
  };

  const handleScrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + slideWidth, maxScroll));
  };
  const handleClearAllFilters = () => {
    // Clear search input
    const searchInput = document.querySelector(".filterinput input");
    if (searchInput) searchInput.value = "";

    // Clear all checkboxes
    const checkboxes = document.querySelectorAll(
      '.filterOptions input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    const radios = document.querySelectorAll(
      '.filterOptions input[type="radio"]'
    );
    radios.forEach((radio) => {
      radio.checked = false;
    });
  };
  return (
    <div className="shoppage">
      {/* <div className="shop-banner">
        <img src="/image/cloth.png" alt="" />
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
            <div className="filterTab">
              <span className="filterLabel">Size</span>
              <div className="filterDropdown">
                <select aria-label="Size filter" ref={sizeSelectRef}>
                  <option>Select Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>

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
              {/* Search Input */}
              <div className="filterinput">
                <input type="text" placeholder="Search..." />
                <FiSearch />
              </div>
              <div className="clearAllButtonContainer">
                <button
                  className="clearAllButton"
                  onClick={handleClearAllFilters}
                >
                  Clear All Filters
                </button>
              </div>

              {/* Filters Section */}
              <div className="filterGroup">
                <h3 className="filterGroupTitle">FILTERS BY</h3>

                {/* Designer Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("DESIGNER")}
                  >
                    <span>Designer</span>
                    {openFilter === "DESIGNER" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "DESIGNER" && (
                    <div className="filterOptions">
                      {[
                        "Aditi Kant",
                        "Ahmev",
                        "Anamika Khanna",
                        "Preeti Mohan",
                        "Raabta By Rahul",
                        "Rozana By Zariin",
                        "Sangeeta Boochra",
                        "Studio Kassa",
                        "Suhani Pittie",
                      ].map((designer) => (
                        <label key={designer} className="filterOption">
                          <input
                            type="checkbox"
                            name="designer"
                            value={designer}
                          />
                          <span>{designer}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Occasion Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("OCCASION")}
                  >
                    <span>Occasion</span>
                    {openFilter === "OCCASION" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "OCCASION" && (
                    <div className="filterOptions">
                      {[
                        "Wedding",
                        "Casual",
                        "Party",
                        "Festive",
                        "Formal",
                        "Everyday",
                      ].map((occasion) => (
                        <label key={occasion} className="filterOption">
                          <input
                            type="checkbox"
                            name="occasion"
                            value={occasion}
                          />
                          <span>{occasion}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("PRICE")}
                  >
                    <span>Price</span>
                    {openFilter === "PRICE" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "PRICE" && (
                    <div className="filterOptions">
                      {[
                        "Under ₹1000",
                        "₹1000 - ₹3000",
                        "₹3000 - ₹5000",
                        "₹5000 - ₹10000",
                        "Above ₹10000",
                      ].map((priceRange) => (
                        <label key={priceRange} className="filterOption">
                          <input
                            type="checkbox"
                            name="price"
                            value={priceRange}
                          />
                          <span>{priceRange}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Size Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("SIZE")}
                  >
                    <span>Size</span>
                    {openFilter === "SIZE" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "SIZE" && (
                    <div className="filterOptions">
                      {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
                        (sizeRange) => (
                          <label key={sizeRange} className="filterOption">
                            <input
                              type="checkbox"
                              name="size"
                              value={sizeRange}
                            />
                            <span>{sizeRange}</span>
                          </label>
                        )
                      )}
                    </div>
                  )}
                </div>
                {/* Fabrics Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("FABRICS")}
                  >
                    <span>Fabrics </span>
                    {openFilter === "FABRICS" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "FABRICS" && (
                    <div className="filterOptions">
                      {[
                        "Cotton",
                        "Silk",
                        "Linen",
                        "Chiffon",
                        "Georgette",
                        "Velvet",
                      ].map((fabrics) => (
                        <label key={fabrics} className="filterOption">
                          <input
                            type="checkbox"
                            name="fabrics"
                            value={fabrics}
                          />
                          <span>{fabrics}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Color Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("COLOR")}
                  >
                    <span>Color</span>
                    {openFilter === "COLOR" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "COLOR" && (
                    <div className="filterOptions">
                      {[
                        "Red",
                        "Blue",
                        "Green",
                        "Black",
                        "White",
                        "Yellow",
                        "Multi-color",
                      ].map((color) => (
                        <label key={color} className="filterOption">
                          <input type="checkbox" name="color" value={color} />
                          <span>{color}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Shipping Filter */}
                <div className="filterSubGroup">
                  <div
                    className="filterSubHeader"
                    onClick={() => toggleFilter("SHIPPING")}
                  >
                    <span>Shipped In</span>
                    {openFilter === "SHIPPING" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                  {openFilter === "SHIPPING" && (
                    <div className="filterOptions">
                      {[
                        "1-3 Days",
                        "3-7 Days",
                        "7-14 Days",
                        "14-21 Days",
                        "Ready to Ship",
                      ].map((shipping) => (
                        <label key={shipping} className="filterOption">
                          <input
                            type="checkbox"
                            name="shipping"
                            value={shipping}
                          />
                          <span>{shipping}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
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
                    onClick={handleCardClick} // This handles clicking anywhere on the card
                  >
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="templatecardImage"
                      />
                      {hoveredCard === item.id && (
                        <div
                          className="add-to-cart-overlay"
                          onClick={(e) => {
                            e.stopPropagation(); // This prevents the card click from firing
                            handleViewProduct();
                          }}
                        >
                          <div className="specialy-img-content">
                            <p>Add to Cart</p>
                            <IoCartOutline />
                          </div>
                        </div>
                      )}
                    </div>
                    <p>{item.title}</p>
                    <div className="tabPrice">
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

export default ClothShop;
