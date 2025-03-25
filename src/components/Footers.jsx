import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white h-40 flex flex-col justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-400 transition"></Link>
        </div>

        {/* Middle Section - Links */}
        {/* <div className="flex space-x-6 my-4 md:my-0">
          <Link to="/" className="hover:text-gray-400 transition">Dashboard</Link>
          <Link to="/resumes" className="hover:text-gray-400 transition">Resumes</Link>
          <Link to="/login" className="hover:text-gray-400 transition">Log In</Link>
        </div> */}

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4">
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a> */}
          <a href="https://github.com/Vladicki/webProject" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-github">Github</i>
          </a>
        </div>
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
