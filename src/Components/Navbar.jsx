import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fashionOpen, setFashionOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setFashionOpen(false);
  };

  return (
    <header className="bg-white shadow relative z-50">
      <nav className="flex justify-around items-center h-16 px-4 md:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-red-500 text-xl">
            Ebazar
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {/* Home */}
          <Link
            to="/"
            className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-2 rounded"
          >
            Home
          </Link>

          {/* Fashion Dropdown */}
          <div className="relative group">

            <Link
              to="/fashion"
              className="flex items-center gap-1 px-5 py-2 font-semibold hover:text-red-500 hover:bg-gray-200 rounded"
            >
              Fashion
              <IoChevronDown />
            </Link>

            {/* Dropdown */}
            <div className="absolute top-full left-[-30px] hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
              <ul className="py-2">

                <li>
                  <Link
                    to="/man"
                    className="block px-4 py-3 text-center hover:bg-gray-100 hover:text-red-500"
                  >
                    Man
                  </Link>
                </li>

                <li>
                  <Link
                    to="/women"
                    className="block px-4 py-3 text-center hover:bg-gray-100 hover:text-red-500"
                  >
                    Women
                  </Link>
                </li>

                <li>
                  <Link
                    to="/kids"
                    className="block px-4 py-3 text-center hover:bg-gray-100 hover:text-red-500"
                  >
                    Kids
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-2 rounded"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">

          <Link
            to="/login"
            className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-2 rounded"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-2 rounded"
          >
            Signup
          </Link>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <IoMenu className="text-3xl" />
            )}
          </IconButton>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">

          <ul className="flex flex-col p-5 gap-3">

            {/* Home */}
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block font-semibold py-2 hover:text-red-500"
              >
                Home
              </Link>
            </li>

            {/* Fashion */}
            <li>

              <button
                onClick={() => setFashionOpen(!fashionOpen)}
                className="w-full flex items-center justify-between font-semibold py-2 hover:text-red-500"
              >
                Fashion
                <IoChevronDown
                  className={`transition-transform ${
                    fashionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Fashion Submenu */}
              {fashionOpen && (
                <ul className="ml-4 border-l-2 border-gray-200">

                  <li>
                    <Link
                      to="/man"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:text-red-500"
                    >
                      Man
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/women"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:text-red-500"
                    >
                      Women
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/kids"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:text-red-500"
                    >
                      Kids
                    </Link>
                  </li>

                </ul>
              )}

            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block font-semibold py-2 hover:text-red-500"
              >
                Contact
              </Link>
            </li>

            <hr />

            {/* Login */}
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className="block font-semibold py-2 hover:text-red-500"
              >
                Login
              </Link>
            </li>

            {/* Signup */}
            <li>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="block font-semibold py-2 hover:text-red-500"
              >
                Signup
              </Link>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
