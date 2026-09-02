import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow relative">
        <nav className="flex justify-around items-center h-16 px-4 md:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            
            <span className="font-bold text-red-500 text-xl">Ebazar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 ">
            <Link
              to="/"
              className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-1 rounded active:bg-gray-300"
            >
              Home
            </Link>

            <div className="relative group">
  <Link
    to="/fashion"
    className="block px-5 py-2 font-semibold hover:text-red-500 hover:bg-gray-200 rounded"
  >
    Fashion
  </Link>

  <div className="absolute top-full  left-[-50px] hidden group-hover:block bg-white shadow-lg rounded-md w-50 z-50">
    <ul>

      <Link to="man"><li className="px-4 text-center py-3 hover:bg-gray-100 hover:text-red-500">Man</li></Link>
      <Link to="women"><li className="px-4 text-center py-3 hover:bg-gray-100 hover:text-red-500">Women</li></Link>
      <Link to="kids"><li className="px-4 text-center py-3 hover:bg-gray-100 hover:text-red-500">Kids</li></Link>
    </ul>
  </div>
</div>
            <Link
              to="/contact"
              className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-1 rounded active:bg-gray-300"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-1 rounded active:bg-gray-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="font-semibold hover:text-red-500 hover:bg-gray-200 px-5 py-1 rounded active:bg-gray-300"
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
            <ul className="flex flex-col p-4 gap-4">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/fashion" onClick={() => setMenuOpen(false)}>
                  Fashion
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>

              <hr />

              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
