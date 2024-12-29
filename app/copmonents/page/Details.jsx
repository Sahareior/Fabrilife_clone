import React, { useState } from "react";

const data = [
  { category: "New Arrival", count: 63 },
  { category: "Top Selling", count: 228 },
  { category: "Free Delivery", count: 541 },
  {
    category: "Mens",
    count: 943,
    subcategories: [
      {
        subcategory: "Half Sleeve T-shirt",
        count: 319,
        types: [
          { type: "Blank", count: 51 },
          { type: "Cut & Stitch", count: 24 },
          { type: "Cut & Stitch (Designer Edition)", count: 28 },
          { type: "Drop Shoulder T-shirt", count: 7 },
          { type: "Printed", count: 151 },
        ],
      },
      {
        subcategory: "Full Sleeve T-shirt",
        count: 143,
        types: [
          { type: "Blank", count: 46 },
          { type: "Cut & Stitch", count: 18 },
          { type: "Cut & Stitch (Designer Edition)", count: 32 },
          { type: "Printed", count: 47 },
        ],
      },
      {
        subcategory: "Shirt",
        count: 52,
        types: [
          { type: "Casual Shirt", count: 38 },
          { type: "Formal Shirt", count: 14 },
        ],
      },
    ],
  },
];

const transformData = (data) => {
  const categories = {};
  data.forEach((item) => {
    categories[item.category] = { count: item.count, subcategories: [] };
    if (item.subcategories) {
      item.subcategories.forEach((sub) => {
        categories[item.category].subcategories.push({
          subcategory: sub.subcategory,
          count: sub.count,
          types: sub.types,
        });
      });
    }
  });
  return categories;
};

const App = () => {
  const categories = transformData(data);
console.log(categories)
  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };

  return (
    <div className="flex">
      <FilterSidebar categories={categories} onFilterChange={handleFilterChange} />
    </div>
  );
};

const FilterSidebar = ({ categories, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (category) => {
    let updatedFilters = [...selectedFilters];
    if (updatedFilters.includes(category)) {
      updatedFilters = updatedFilters.filter((item) => item !== category);
    } else {
      updatedFilters.push(category);
    }
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass updated filters to the parent
  };

  return (
    <div className="p-4 space-y-2 bg-[#F8F8F8]">
      <h2 className="text-lg font-bold text-black">Filters</h2>
      <div className="text-black font-thin">
        {Object.entries(categories).map(([category, { count, subcategories }]) => (
          <div key={category} className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={category}
                onChange={() => handleCheckboxChange(category)}
                className="accent-sky-500"
              />
              <label htmlFor={category} className="text-sm font-medium">
                {category} <span className="text-black btn btn-ghost btn-xs">({count})</span>
              </label>
            </div>
            {/* Display subcategories if they exist */}
            {subcategories && subcategories.map((sub) => (
              <div key={sub.subcategory} className="ml-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={sub.subcategory}
                    onChange={() => handleCheckboxChange(sub.subcategory)}
                    className="accent-sky-500"
                  />
                  <label htmlFor={sub.subcategory} className="text-sm">
                    {sub.subcategory} <span className="text-black btn btn-ghost btn-xs">({sub.count})</span>
                  </label>
                </div>
                {/* Display types under the subcategory */}
                {sub.types && sub.types.map((type) => (
                  <div key={type.type} className="ml-6 space-y-1">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={type.type}
                        onChange={() => handleCheckboxChange(type.type)}
                        className="accent-sky-500"
                      />
                      <label htmlFor={type.type} className="text-sm">
                        {type.type} <span className="text-black btn btn-ghost btn-xs">({type.count})</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
