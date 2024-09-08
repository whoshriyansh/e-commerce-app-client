import React, { useState } from "react";
import {
  MagnifyingGlass,
  ShoppingCartSimple,
  Heart,
  User,
  List,
  X,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the side menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-blue border-t-2 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <p className="text-xl md:text-2xl">CLICON</p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white px-2 w-2/3 md:w-1/3">
          <input
            type="text"
            className="text-black/80 text-sm bg-transparent border-none focus:outline-none focus:ring-0 w-full"
            placeholder="Search for anything..."
          />
          <MagnifyingGlass size={20} className="text-black" />
        </div>

        {/* Icons for medium devices and larger */}
        <div className="flex items-center gap-5">
          <Link to="" className="hidden md:block">
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "white",
                  color: "blue",
                },
              }}
            >
              <ShoppingCartSimple size={32} className="text-white" />
            </Badge>
          </Link>

          <Link to="/wishlist" className="hidden md:block">
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "white",
                  color: "blue",
                },
              }}
            >
              <Heart size={32} className="text-white" />
            </Badge>
          </Link>

          <Link to="/signin" className="hidden md:block">
            <User size={32} className="text-white" />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="block md:hidden">
            <List size={32} className="text-white" />
          </button>
        </div>
      </div>

      {/* Close Button (X) - Positioned above the sliding menu */}
      {menuOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50 text-white"
        >
          <X size={32} />
        </button>
      )}

      {/* Side Menu - Slide in from the right */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue text-white w-64 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 flex flex-col items-start">
          {/* Wishlist with Icon */}
          <Link to="/wishlist" className="flex items-center mb-4">
            <Heart size={24} className="mr-2" />
            <span>Wishlist</span>
          </Link>

          {/* Sign In with Icon */}
          <Link to="/signin" className="flex items-center mb-4">
            <User size={24} className="mr-2" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
