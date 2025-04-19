import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={"w-full bg-gray-900 text-white h-40 flex flex-col justify-center transition-all duration-500 bottom-0 padding-0"}
    >
      {/* <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center"> */}
        {/* Left Section - Branding */}
        {/* <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-400 transition"></Link>
        </div> */}

        {/* Middle Section - Links */}
        {/* <div className="flex space-x-6 my-4 md:my-0">
          <Link to="/" className="hover:text-gray-400 transition">Dashboard</Link>
          <Link to="/resumes" className="hover:text-gray-400 transition">Resumes</Link>
          <Link to="/login" className="hover:text-gray-400 transition">Log In</Link>
        </div> */}
      {/* </div> */}

      {/* Social Media Icons */}
      <div className="text-center text-sm">
          <a href="https://github.com/Vladicki/webProject" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-github">Github</i>
          </a>
      </div>

      {/* Just our names */}
      <div className="text-center text-sm text-gray-400">
        Quentin Laumonier | Harsh Patil | Vladislav Iurev | Dezzy Berg
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
