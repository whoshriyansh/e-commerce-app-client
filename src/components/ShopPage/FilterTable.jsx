import React from "react";
import { Label, Radio } from "flowbite-react";
import { SearchNumberInput } from "../common/FormFields";

const FilterTable = ({ filters, onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const Categories = [
    "SmartPhone",
    "iPhone",
    "Laptop",
    "Smartwatch",
    "Headphones",
  ];

  const Brands = ["Apple", "Samsung", "Amazfit", "Dell", "Asus"];

  return (
    <>
      <div className="w-full flex flex-col items-start gap-5">
        {/* Category Filter */}
        <div className="flex flex-col gap-3">
          <h3 className="text-body-large text-black">CATEGORY</h3>
          {Categories.map((category, index) => (
            <div key={index} className="flex items-center gap-3">
              <Radio
                id={`category-${index}`}
                name="categories"
                value={category}
                onChange={handleFilterChange}
                className="focus:ring-0 text-orange"
              />
              <Label
                className="flex items-center text-black/80 font-light text-sm"
                htmlFor={`category-${index}`}
              >
                {category}
              </Label>
            </div>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="flex flex-col gap-3">
          <h3 className="text-body-large text-black">BY BRANDS</h3>
          {Brands.map((brand, index) => (
            <div key={index} className="flex items-center gap-3">
              <Radio
                id={`brand-${index}`}
                name="brand"
                value={brand}
                onChange={handleFilterChange}
                className="focus:ring-0 text-orange"
              />
              <Label
                className="flex items-center text-black/80 font-light text-sm"
                htmlFor={`brand-${index}`}
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="flex flex-col gap-3 mt-4">
        <h3 className="text-body-large text-black">PRICE RANGE</h3>
        <div className="flex items-center gap-3 w-1/4">
          <SearchNumberInput
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            placeholder="Min"
          />
          <SearchNumberInput
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            placeholder="Max"
          />
        </div>
      </div>
    </>
  );
};

export default FilterTable;
