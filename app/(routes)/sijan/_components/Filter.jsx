import React, { useState } from 'react';

const FilterSidebar = ({ data, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

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

  const handleCheckboxChange = (item) => {
    let updatedFilters = [...selectedFilters];
    if (updatedFilters.includes(item)) {
      updatedFilters = updatedFilters.filter((filter) => filter !== item);
    } else {
      updatedFilters.push(item);
    }
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass updated filters to the parent
    console.log("Selected Filters:", updatedFilters); // Log the selected filters
  };

  return (
    <div className="p-4 pb-10 pl-10 bg-[#F8F8F8]">
      <div className="text-black">
        {Object.entries(categories).map(([category, { count, subcategories }]) => (
          <div key={category} className="">
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                id={category}
                onChange={() => handleCheckboxChange(category)}
                className="accent-sky-500 w-4 h-4 border border-gray-300 bg-slate-200  checked:bg-sky-500 checked:border-sky-500 appearance-none cursor-pointer checked:relative checked:after:content-[''] checked:after:w-2 checked:after:h-2 checked:after:rounded-full checked:after:bg-white checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
              <label htmlFor={category} className="text-xs text-sky-400 font-extrabold">
                {category} <span className="text-black btn btn-ghost btn-xs">({count})</span>
              </label>
            </div>
            {subcategories &&
              subcategories.map((sub) => (
                <div key={sub.subcategory} className="ml-4">
                  <div className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      id={sub.subcategory}
                      onChange={() => handleCheckboxChange(sub.subcategory)}
                      className="accent-sky-500 w-4 h-4 border border-gray-300 bg-slate-200  checked:bg-sky-500 checked:border-sky-500 appearance-none cursor-pointer checked:relative checked:after:content-[''] checked:after:w-2 checked:after:h-2 checked:after:rounded-full checked:after:bg-white checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                    />
                    <label htmlFor={sub.subcategory} className="text-xs font-extrabold">
                      {sub.subcategory}{" "}
                      <span className="text-black btn btn-ghost btn-xs">({sub.count})</span>
                    </label>
                  </div>
                  {sub.types &&
                    sub.types.map((type) => (
                      <div key={type.type} className="ml-6">
                        <div className="flex items-center space-x-1">
                          <input
                            type="checkbox"
                            id={type.type}
                            onChange={() => handleCheckboxChange(type.type)}
                            className="accent-sky-500 w-4 h-4 border border-gray-300 bg-slate-200  checked:bg-sky-500 checked:border-sky-500 appearance-none cursor-pointer checked:relative checked:after:content-[''] checked:after:w-2 checked:after:h-2 checked:after:rounded-full checked:after:bg-white checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                          />
                          <label htmlFor={type.type} className="text-sm font-thin  text-slate-700">
                            {type.type}{" "}
                            <span className="text-black btn btn-ghost btn-xs">({type.count})</span>
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
