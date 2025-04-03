import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShortPage, setIsShortPage] = useState(false);

  useEffect(() => {
    const checkPageHeight = () => {
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      setIsShortPage(pageHeight <= windowHeight);
    };

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollPosition >= pageHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    checkPageHeight(); // Vérifier au chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <footer
      className={`w-full bg-gray-900 text-white h-40 flex flex-col justify-center transition-opacity duration-500 ${
        isShortPage || isVisible ? "opacity-100 relative" : "opacity-0 pointer-events-none fixed bottom-0 left-0"
      }`}
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
        Quentin Laumonier | Harsh Patel | Vladick Iurev | Dezzy
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
