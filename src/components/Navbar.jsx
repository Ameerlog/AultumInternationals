import React, { useState } from "react";
import { FaChevronDown, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null); // reset dropdown when closing mobile menu
  };

  const menuItems = [
    {
      name: "What We Do",
      subMenu: ["Consulting", "Technology", "Operations"],
      showDropdownIcon: true,
    },
    { name: "What We Think" }, // no dropdown
    {
      name: "About Aultum",
      subMenu: ["Our Story", "Leadership", "Sustainability"],
      showDropdownIcon: true,
    },
    { name: "Careers" }, // no dropdown
    { name: "Contact Us" }, // no dropdown
    { name: "Geographies" }, // no dropdown
    {
      name: "EN",
      subMenu: ["English", "French", "German"],
      icon: <FaGlobe className="inline-block mr-1" />,
      showDropdownIcon: true,
      onlyClick: true, // EN works only on click
    },
  ];

  return (
    <nav className="bg-white shadow-md p-6 flex justify-evenly items-center relative">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-blue-600">
        Aultum
      </h1>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          mobileMenuOpen
            ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-6 space-y-4 z-50"
            : "hidden"
        } md:flex md:flex-row md:space-x-6 md:static md:w-auto md:bg-transparent md:shadow-none md:p-0 md:space-y-0 text-gray-700 text-lg`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative group"
            // Hover only works on desktop for non-EN dropdowns
            onMouseEnter={() =>
              !mobileMenuOpen &&
              item.subMenu &&
              !item.onlyClick &&
              setOpenDropdown(item.name)
            }
            onMouseLeave={() =>
              !mobileMenuOpen &&
              item.subMenu &&
              !item.onlyClick &&
              setOpenDropdown(null)
            }
          >
            {/* Main Link */}
            <button
              onClick={() => item.subMenu && toggleDropdown(item.name)}
              className="flex items-center hover:text-blue-600 focus:outline-none w-full font-medium"
            >
              {item.icon && item.icon}
              {item.name}
              {item.showDropdownIcon && (
                <FaChevronDown
                  className={`ml-2 text-sm transition-transform duration-200 ${
                    openDropdown === item.name ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Dropdown */}
            {item.subMenu && openDropdown === item.name && (
              <ul
                className={`${
                  mobileMenuOpen
                    ? "ml-4 mt-2 space-y-2" // Mobile dropdown (inline, indented)
                    : `absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 flex flex-col ${
                        item.name === "EN" ? "right-0 mr-4" : "left-0"
                      }`
                }`}
              >
                {item.subMenu.map((sub, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
