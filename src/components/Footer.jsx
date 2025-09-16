import React, { useMemo } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  const navLinks = useMemo(
    () => [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy", href: "/privacy" },
      { label: "About", href: "/about" },
      { label: "Policy", href: "/policy" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        href: "https://www.facebook.com/people/Batteryfy-Life/61576253405425/",
        icon: <FaFacebookF className="text-white text-lg" />,
        hover: "hover:bg-green-600",
        label: "Facebook",
      },
      {
        href: "https://www.instagram.com/batteryfy_official/",
        icon: <FaInstagram className="text-white text-lg" />,
        hover: "hover:bg-pink-500",
        label: "Instagram",
      },
      {
        href: "https://www.linkedin.com/company/batteryfy",
        icon: <FaLinkedinIn className="text-white text-lg" />,
        hover: "hover:bg-blue-600",
        label: "LinkedIn",
      },
      {
        href: "https://www.youtube.com/@Batteryfy",
        icon: <FaYoutube className="text-white text-lg" />,
        hover: "hover:bg-red-600",
        label: "YouTube",
      },
    ],
    []
  );

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-6">
          {/* Logo / Brand */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Aultum</h2>
            <p className="text-sm text-gray-400 mt-1">
              Building a sustainable future.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-green-500 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center md:justify-between items-center mt-6 flex-col md:flex-row gap-4">
          <p className="text-sm text-gray-400">
            &copy; {year} Aultum. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2 rounded-full bg-gray-800 ${social.hover} transition-colors flex items-center justify-center shadow-md`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
