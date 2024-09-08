import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className="flex items-center bg-white px-2  md:w-2/4 border-[1px] border-[#E4E7E9]">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for anything..."
        className="text-black/50 text-sm bg-transparent border-none focus:outline-none focus:ring-0 w-full"
      />
      <MagnifyingGlass size={20} className="text-black" />
    </div>
  );
};

export default SearchBar;
