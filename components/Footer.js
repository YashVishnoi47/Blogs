import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-black bg-[#e8e8e8] py-6 px-4">
      {/* Main Footer Content */}
      <div className="container w-full  mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Left Section: Logo, Social Links, and Credits */}
        <div className="flex flex-col items-center gap-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg">Yash's Blog</span>
          </div>
          {/* Created and Developed By */}
          <p className="text-sm">Created and Developed by Yash Bishnoi</p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        Thank You for visiting
      </div>
    </footer>
  );
};

export default Footer;
