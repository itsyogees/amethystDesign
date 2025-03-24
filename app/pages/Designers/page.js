"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";

const Designers = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);
 
  const designers = [
    "Alexander Wang", "Balenciaga", "Calvin Klein",
    "Dior", "Elie Saab", "Fendi",
    "Gucci", "Hermes", "Isabel Marant",
    "Jimmy Choo", "Kenzo", "Louis Vuitton",
    "Marc Jacobs", "Narciso Rodriguez", "Oscar de la Renta",
    "Prada", "Quiksilver", "Ralph Lauren",
    "Stella McCartney", "Tom Ford", "Undercover",
    "Valentino", "Westwood", "Xander Zhou",
    "Yves Saint Laurent", "Zac Posen", "Armani",
    "Burberry", "Chanel", "Dolce & Gabbana"
  ];
 
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedLetter(null); 
  };
 
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter === selectedLetter ? null : letter);
    setSearchQuery(""); 
  };

  
  const handleAllClick = () => {
    setSelectedLetter(null);  
    setSearchQuery("");  
     setShowFilter(false);
  };

 
  const filteredDesigners = designers
    .filter((designer) => {
      if (selectedLetter) {
        return designer.startsWith(selectedLetter);
      }
      return designer.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => a.localeCompare(b));  

  return (
    <div className="shoppage">
      <div className="shoppageContainer">
        <div className="shoppageHead">
          <div className="templatesBtn">
            <button
              className="filterToggleBtn"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <LuSettings2 />
            </button>
          </div>
        </div>
        <div className="shoppageContent">
          <div className="templatesContent">
            <div
              className={`templatesFilter ${showFilter ? "visible" : "hidden"}`}
            >
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  onClick={handleAllClick}
                  htmlFor="ALL"
                >
                  ALL
                </label>
              </div>
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  htmlFor="CLOTHING"
                >
                  CLOTHING
                </label>
              </div>
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  htmlFor="JEWELLERY"
                >
                  JEWELLERY
                </label>
              </div>
              <div className="templateFilterGroup">
                <label
                  className="templateFilterName"
                  htmlFor="HOME"
                >
                  HOME
                </label>
              </div>
            </div>
            <div className="templateCards">
              <div className="templateCardsContent">
                {/* Search Input */}
                <div className="searchContainer">
                <h2>Designer</h2>
                  <div className="searchInputContainer">
                    
                    <input
                      type="text"
                      placeholder="Search designers..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <FaSearch className="searchIcon" />
                  </div>
                </div>

                <div className="alphabetFilter">
                  {alphabet.map((letter) => (
                    <button
                      key={letter}
                      className={`alphabetLetter ${
                        selectedLetter === letter ? "selected" : ""
                      }`}
                      onClick={() => handleLetterClick(letter)}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
 
                {filteredDesigners.length > 0 ? (
                  <div className="designersGrid">
                    {filteredDesigners.map((designer, index) => (
                      <div key={index} className="designerName">
                        {designer}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="noResults">No designers found.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;