// components/ResponsiveMenu.tsx
"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResponsiveMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <ul className="hidden space-x-8 text-gray-800 md:flex">
        <li className="hover:text-blue-500">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <IconButton
        onClick={toggleMenu}
        className="block md:hidden"
        aria-label="Toggle Menu"
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 w-48 p-4 bg-white rounded-lg shadow-lg top-12 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#home" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-800 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-800 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveMenu;
