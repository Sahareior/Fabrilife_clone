"use client"
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";

const categoriesData = {
  Mens: [
    "Half Sleeve T-shirt",
    "Blank",
    "Cut & Stitch",
    {
      "Cut & Stitch (Designer Edition)": ["Printed", "Embroidery", "Custom Design"],
    },
    "Drop Shoulder T-shirt",
    "Raglan",
    {
      Raglan: ["Striped", "Solid", "Graphic"],
    },
  ],
  Sports: [
    "Full Sleeve T-shirt",
    {
      Maggie: ["Jackets", "Sports Tops", "Accessories"],
    },
    "Joggers",
  ],
  Kids: {
    Boys: [
      "Blank T-shirt",
      {
        "Boys Combo Set": ["Winter Wear", "Summer Wear"],
      },
    ],
    Girls: ["Design T-shirt", "Frock"],
  },
  FaceMask: [
    "Professional 7 Layer Mask",
    {
      "Womens Designer Edition": ["Printed", "Embroidery"],
    },
  ],
};

const NestedList = ({ items }) => {
  const [expanded, setExpanded] = useState([]);

  const toggleItem = (item) => {
    if (expanded.includes(item)) {
      setExpanded(expanded.filter((cat) => cat !== item));
    } else {
      setExpanded([...expanded, item]);
    }
  };

  return (
    <ul className="ml-4 space-y-2">
      {items.map((item, index) =>
        typeof item === "string" ? (
            <Link href="/products" ><li key={index}>{item}</li></Link>
        ) : (
          Object.entries(item).map(([subCategory, subItems]) => (
            <li key={subCategory}>
              <div className="flex justify-between items-center">
            <span className="lato-b cursor-pointer mt-2">{subCategory}</span>
                <button
                  onClick={() => toggleItem(subCategory)}
                  className="text-blue-500 font-bold text-sm"
                >
                  {expanded.includes(subCategory) ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {expanded.includes(subCategory) && (
                <NestedList items={subItems} />
              )}
            </li>
          ))
        )
      )}
    </ul>
  );
};

export const Modal = ({ isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((cat) => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div>
      <div
        className={`drawer ${isOpen ? "open" : ""}`}
        style={{
          position: "absolute",
          top: "90px", 
          right: "0",
          zIndex: 50,
        }}
      >
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={() => {}}
        />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={onClose}
            style={{
              backgroundColor: "transparent", // No background overlay
            }}
          ></label>
          <ul className="menu bg-base-200 text-base-content overflow-y-auto w-72 mt-20 min-h-full p-2 shadow-lg">
            <li>
              <a className="font-bold text-xl">Categories</a>
            </li>
            {Object.entries(categoriesData).map(([category, items]) => (
              <li key={category}>
                <div className="flex justify-between items-center">
                <Link href="/products" >   <h2 className="font-bold lato-b mt-1">{category}</h2> </Link>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="font-extrabold text-[20.5px]"
                  >
                    {expandedCategories.includes(category)
                      ? <FaMinus></FaMinus>
                      : <FaPlus></FaPlus>}
                  </button>
                </div>
                {expandedCategories.includes(category) && (
                  <NestedList items={Array.isArray(items) ? items : [items]} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
