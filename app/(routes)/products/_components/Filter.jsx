import React, { useState } from 'react';

const FilterSidebar = ({ data, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
// console.log(categdataories)
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

  const categories = transformData(data);


  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };

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
    <div className="p-4 pb-10 bg-[#F8F8F8]">
    
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
              <label htmlFor={category} className="text-sm text-sky-400 font-bold">
                {category} <span className="text-black btn btn-ghost btn-xs">({count})</span>
              </label>
            </div>
            {/* Display subcategories if they exist */}
            {subcategories && subcategories.map((sub) => (
              <div key={sub.subcategory} className="ml-4">
                <div className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    id={sub.subcategory}
                    onChange={() => handleCheckboxChange(sub.subcategory)}
                    className="accent-sky-500"
                  />
                  <label htmlFor={sub.subcategory} className="text-sm font-bold">
                    {sub.subcategory} <span className="text-black btn btn-ghost btn-xs">({sub.count})</span>
                  </label>
                </div>
                {/* Display types under the subcategory */}
                {sub.types && sub.types.map((type) => (
                  <div key={type.type} className="ml-6 ">
                    <div className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        id={type.type}
                        onChange={() => handleCheckboxChange(type.type)}
                        className="accent-sky-500"
                      />
                      <label htmlFor={type.type} className="text-xs font-bold">
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

export default FilterSidebar;
