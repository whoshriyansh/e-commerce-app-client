import React from "react";
import { DropdownInputField } from "../common/FormFields";
import { Dropdown } from "flowbite-react";

const SortOptions = ({ sortOption, onSort }) => {
  const options = [
    { value: "priceAsc", label: "Price: Low to High" },
    { value: "priceDesc", label: "Price: High to Low" },
    { value: "nameAsc", label: "Name: A to Z" },
    { value: "nameDesc", label: "Name: Z to A" },
    { value: "mostRev", label: "Most Reviews" },
  ];

  const handleDropdownChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="flex item-center justify-center gap-4 w-full">
      <DropdownInputField
        name="sortOption"
        value={sortOption}
        onChange={handleDropdownChange}
        options={options}
        mainOption={"Sort By"}
      />
    </div>
  );
};

export default SortOptions;
