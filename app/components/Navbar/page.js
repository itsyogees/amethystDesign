"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFashionDropdownOpen, setIsFashionDropdownOpen] = useState(false);
  const [isAccessoriesDropdownOpen, setIsAccessoriesDropdownOpen] =
    useState(false);
  const [mobileFashionOpen, setMobileFashionOpen] = useState(false);
  const [mobileDesignersOpen, setMobileDesignersOpen] = useState(false);
  const [mobileAccessoriesOpen, setMobileAccessoriesOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBorders, setShowBorders] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
        // Remove borders when scrolling down
        setShowBorders(false);
      } else {
        setScrollDirection("up");
        // Show borders when scrolling up, but only at the top
        setShowBorders(currentScrollY <= 50);
      }

      setLastScrollY(currentScrollY);
      setIsSticky(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Reset mobile dropdowns when opening menu
      setMobileFashionOpen(false);
      setMobileAccessoriesOpen(false);
    }
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleFashionDropdown = () => {
    setIsFashionDropdownOpen(!isFashionDropdownOpen);
  };

  const toggleAccessoriesDropdown = () => {
    setIsAccessoriesDropdownOpen(!isAccessoriesDropdownOpen);
  };

  const toggleMobileFashion = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileFashionOpen(!mobileFashionOpen);
    setMobileAccessoriesOpen(false); // Close other dropdown
  };

  const toggleMobileAccessories = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileAccessoriesOpen(!mobileAccessoriesOpen);
    setMobileFashionOpen(false); // Close other dropdown
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbarMain ${isSticky ? "sticky" : ""}`}>
      {/* Navigation Links */}
      {scrollDirection === "up" && (
        <div className="navbarContainer">
          {/* Logo */}

          <Link href="/">
            <h1 className="logo">Amethyst</h1>
          </Link>

          {/* Search Bar */}
          <div className="searchBar">
            <div className="searchInputContainer">
              <input type="text" placeholder="Search..." className="active" />
              <button className="searchButton" onClick={toggleSearch}>
                <FaSearch className="searchIcon" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="navIcons">
            <Link href="/pages/Cart">
              <CiShoppingCart className="icon" title="Cart" />
            </Link>

            <Link href="/pages/UserProfile">
              <RiUser3Line className="icon" title="User" />
            </Link>
            <button className="menuToggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Search Bar */}
      <div className="mobileSearchBar">
        <div className="mobileSearchInputContainer">
          <input type="text" placeholder="Search..." />
          <button className="mobileSearchButton">
            <FaSearch className="mobileSearchIcon" />
          </button>
        </div>
      </div>

      <nav
        className={`navLinks ${
          showBorders ? "with-borders" : "without-borders"
        }`}
      >
        <ul className="navList">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li
            onMouseEnter={toggleFashionDropdown}
            onMouseLeave={toggleFashionDropdown}
          >
            <Link href="/pages/ClothShop">Clothing</Link>
            {isFashionDropdownOpen && (
              <ul className="dropdownMenu">
                {/* Categories Section */}
                <li className="dropdownHeading">Categories</li>
                <li>
                  <Link href="/pages/ClothShop">Anarkalis</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Blouses</Link>
                </li>

                <li>
                  <Link href="/pages/ClothShops">Co-Ords</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Dhoti Sets</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Dresses</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Dupatta</Link>
                </li>

                <li>
                  <Link href="/pages/ClothShop">Jackets</Link>
                </li>

                <li>
                  <Link href="/pages/ClothShop">Kurtas</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Lehengas</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Sarees</Link>
                </li>

                <li>
                  <Link href="/pages/ClothShop">Shirts</Link>
                </li>

                <li>
                  <Link href="/pages/ClothShop">Tops</Link>
                </li>

                <li>
                  <Link href="/pages/ClothShop">Pants</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Salwar</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Lounge Wear</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Overlay</Link>
                </li>

                {/* Trending Labels Section */}
                <li className="dropdownHeading">Trending Labels</li>
                <li>
                  <Link href="/pages/ClothShop">Vineet Rahul</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Paulmi & Harsh</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Yam India</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">One Not Two</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Chandrima</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Punit Balana</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Rajdeep Ranawat</Link>
                </li>
                <li>
                  <Link href="/pages/ClothShop">Torani</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={toggleAccessoriesDropdown}
            onMouseLeave={toggleAccessoriesDropdown}
          >
            <Link href="/pages/JewelleryShop">Jewellery</Link>
            {isAccessoriesDropdownOpen && (
              <ul className="dropdownMenu">
                {/* Categories Section */}
                <li className="dropdownHeading">Categories</li>
                <li>
                  <Link href="/pages/JewelleryShop">Anklets</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Bangles & Bracelets</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Brooch</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Buttons</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Cufflinks</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Cuffs</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Earrings</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Hair Accessories</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Hand Accessories</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Maang-Tika</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Necklaces</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Rings</Link>
                </li>
                <li>
                  <Link href="/pages/JewelleryShop">Studs</Link>
                </li>

                {/* Collections Section */}
                <li className="dropdownHeading">Collections</li>
                <li>
                  <Link href="/categories/wedding-worthy-jewels">
                    Wedding Worthy Jewels
                  </Link>
                </li>
                <li>
                  <Link href="/categories/timeless-pearls">
                    Timeless Pearls
                  </Link>
                </li>
                <li>
                  <Link href="/categories/modern-jewellery-edit">
                    Modern Jewellery Edit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/silver-accents">Silver Accents</Link>
                </li>
                <li>
                  <Link href="/categories/handcrafted-jewels">
                    Handcrafted Jewels
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={toggleAccessoriesDropdown}
            onMouseLeave={toggleAccessoriesDropdown}
          >
            Designers
            {isAccessoriesDropdownOpen && (
              <ul className="dropdownMenu">
                {/* Categories Section */}
                <li className="dropdownHeading">Our Favourites</li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Alexander-Wang">
                    Alexander Wang
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Balenciaga">
                    Balenciaga
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Dior">
                    Dior
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Fendi">
                    Fendi
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Gucci">
                    Gucci
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Hermes">
                    Hermes
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Isabel-Marant">
                    Isabel Marant
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Jimmy-Choo">
                    Jimmy Choo
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Kenzo">
                    Kenzo
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Louis-Vuitton">
                    Louis Vuitton
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Marc-Jacobs">
                    Marc Jacobs
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Oscar-de-la-Renta">
                    Oscar de la Renta
                  </Link>
                </li>
                <li>
                  <Link href="/pages/DesignedByDesigner?designer=Prada">
                    Prada
                  </Link>
                </li>

                {/* Collections Section */}
              </ul>
            )}
          </li>

          <li>
            <Link href="/pages/About">About Us</Link>
          </li>
          <li>
            <Link href="/pages/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay and Side Menu */}
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
      <div
        className={`sideMenu ${isMenuOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sideMenuHeader">
          <h2 className="sideMenuLogo">Amethyst</h2>
          <button className="closeButton" onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        <ul className="mobileNavList">
          <li onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          

          {/* Clothing with dropdown */}
          <li className="mobileDropdownItem">
            <div className="mobileDropdownHeader" onClick={toggleMobileFashion}>
              <Link
                href="/pages/ClothShop"
                onClick={(e) => {
                  e.stopPropagation();
                  // closeMenu();
                }}
              >
                Clothing
              </Link>

              <span className="dropdownToggle">
                {mobileFashionOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>

            {mobileFashionOpen && (
              <div className="mobileDropdownContent">
                <div className="mobileDropdownSection">
                  <h3 className="mobileDropdownHeading">Categories</h3>
                  <ul className="mobileDropdownList">
                    <li onClick={closeMenu}>
                      <Link href="/categories/anarkalis">Anarkalis</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/blouses">Blouses</Link>
                    </li>

                    <li onClick={closeMenu}>
                      <Link href="/categories/dhoti-sets">Dhoti Sets</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/dresses">Dresses</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/dupatta">Dupatta</Link>
                    </li>

                    <li onClick={closeMenu}>
                      <Link href="/categories/jackets">Jackets</Link>
                    </li>

                    <li onClick={closeMenu}>
                      <Link href="/categories/kurtas">Kurtas</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/lehengas">Lehengas</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/sarees">Sarees</Link>
                    </li>
                  </ul>
                </div>

                <div className="mobileDropdownSection">
                  <h3 className="mobileDropdownHeading">Trending Labels</h3>
                  <ul className="mobileDropdownList">
                    <li onClick={closeMenu}>
                      <Link href="/categories/vineet-rahul">Vineet Rahul</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/paulmi-harsh">
                        Paulmi & Harsh
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/yam-india">Yam India</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/one-not-two">One Not Two</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/chandrima">Chandrima</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Accessories with dropdown */}
          <li className="mobileDropdownItem">
            <div
              className="mobileDropdownHeader"
              onClick={toggleMobileAccessories}
            >
              <Link
                href="/pages/JewelleryShop"
                onClick={(e) => {
                  e.stopPropagation();
                  // closeMenu();
                }}
              >
                Jewellery
              </Link>
              <span className="dropdownToggle">
                {mobileAccessoriesOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>

            {mobileAccessoriesOpen && (
              <div className="mobileDropdownContent">
                <div className="mobileDropdownSection">
                  <h3 className="mobileDropdownHeading">Categories</h3>
                  <ul className="mobileDropdownList">
                    <li onClick={closeMenu}>
                      <Link href="/categories/anklets">Anklets</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/bangles-bracelets">
                        Bangles & Bracelets
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/brooch">Brooch</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/buttons">Buttons</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/cufflinks">Cufflinks</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/earrings">Earrings</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/necklaces">Necklaces</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/rings">Rings</Link>
                    </li>
                  </ul>
                </div>

                <div className="mobileDropdownSection">
                  <h3 className="mobileDropdownHeading">Collections</h3>
                  <ul className="mobileDropdownList">
                    <li onClick={closeMenu}>
                      <Link href="/categories/wedding-worthy-jewels">
                        Wedding Worthy Jewels
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/timeless-pearls">
                        Timeless Pearls
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/categories/modern-jewellery-edit">
                        Modern Jewellery Edit
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Replace this section: */}
       

          {/* With this expanded version: */}
          <li className="mobileDropdownItem">
            <div
              className="mobileDropdownHeader"
              onClick={(e) => {
                e.stopPropagation();
                setMobileFashionOpen(false);
                setMobileAccessoriesOpen(false);
                // Toggle designers dropdown
                setMobileDesignersOpen(!mobileDesignersOpen);
              }}
            >
              <Link
                href="/"
                onClick={(e) => {
                  e.stopPropagation();
                  // closeMenu();
                }}
              >
                Designers
              </Link>
              <span className="dropdownToggle">
                {mobileDesignersOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>

            {mobileDesignersOpen && (
              <div className="mobileDropdownContent">
                <div className="mobileDropdownSection">
                  <h3 className="mobileDropdownHeading">Our Favourites</h3>
                  <ul className="mobileDropdownList">
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Alexander-Wang">
                        Alexander Wang
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Balenciaga">
                        Balenciaga
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Dior">
                        Dior
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Fendi">
                        Fendi
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Gucci">
                        Gucci
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Hermes">
                        Hermes
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Isabel-Marant">
                        Isabel Marant
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Jimmy-Choo">
                        Jimmy Choo
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Kenzo">
                        Kenzo
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Louis-Vuitton">
                        Louis Vuitton
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Marc-Jacobs">
                        Marc Jacobs
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Oscar-de-la-Renta">
                        Oscar de la Renta
                      </Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link href="/pages/DesignedByDesigner?designer=Prada">
                        Prada
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li onClick={closeMenu}>
            <Link href="/pages/About">About Us</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/pages/Contact">Contact Us</Link>
          </li>
        </ul>

        <div className="mobileNavFooter">
          {/* <div className="mobileNavSocial">
            <Link href="#" className="socialIcon">
              Instagram
            </Link>
            <Link href="#" className="socialIcon">
              Facebook
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
