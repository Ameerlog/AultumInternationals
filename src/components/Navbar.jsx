import React, { useState, useMemo, useCallback } from "react";
import { FaChevronDown, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Memoize menu items to prevent re-creation on re-renders
  const menuItems = useMemo(
    () => [
      { name: "What We Do", navigateTo: "/" },
      { name: "What We Think", navigateTo: "/what-we-think" },
      { name: "About Aultum", navigateTo: "/about" },
      { name: "Careers", navigateTo: "/careers" },
      { name: "Contact Us", navigateTo: "/contact" },
      { name: "Geographies", navigateTo: "/geographics" },
      { name: "EN", icon: <FaGlobe className="inline-block mr-1" /> },
    ],
    []
  );

  // ✅ Memoized callbacks for stable references
  const toggleDropdown = useCallback((menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  }, []);

  return (
    <nav className="bg-white shadow-md p-3 flex justify-between sm:justify-evenly items-center relative">
      {/* Logo */}
      <Link to="/" className="flex items-center" aria-label="Go to homepage">
        <img
          src={logo}
          alt="Aultum Logo"
          width="180"
          height="40"
          className="object-contain"
          loading="lazy"
        />
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu List */}
      <ul
        className={`${
          mobileMenuOpen
            ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-6 space-y-4 z-50"
            : "hidden"
        } md:flex md:flex-row md:space-x-6 md:static md:w-auto md:bg-transparent md:shadow-none md:p-0 md:space-y-0 text-gray-700 text-lg`}
        role="menubar"
      >
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="relative group"
            onMouseEnter={() =>
              !mobileMenuOpen && item.subMenu && setOpenDropdown(item.name)
            }
            onMouseLeave={() =>
              !mobileMenuOpen && item.subMenu && setOpenDropdown(null)
            }
          >
            <Link
              to={item.navigateTo || "#"}
              className="flex items-center hover:text-blue-600 font-medium"
              onClick={() => item.subMenu && toggleDropdown(item.name)}
              aria-haspopup={!!item.subMenu}
              aria-expanded={openDropdown === item.name}
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
            </Link>

            {/* Dropdown */}
            {item.subMenu && openDropdown === item.name && (
              <ul
                role="menu"
                className={`${
                  mobileMenuOpen
                    ? "ml-4 mt-2 space-y-2"
                    : "absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                }`}
              >
                {item.subMenu.map((sub) => (
                  <li key={sub}>
                    <a
                      href="#"
                      role="menuitem"
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
