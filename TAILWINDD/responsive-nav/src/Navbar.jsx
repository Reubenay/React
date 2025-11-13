import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { HiPaperAirplane } from "react-icons/hi";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 text-xl font-bold">Reutech hub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-green-200">
              Home
            </a>
            <a href="#" className="hover:text-green-200">
              Shop
            </a>
            <a href="#" className="hover:text-green-200">
              About
            </a>
            <a href="#" className="hover:text-green-200">
              Contact
            </a>
          </div>

          {/* Cart & Login */}
          <div className="flex items-center space-x-4">
            <FiShoppingCart className="text-2xl cursor-pointer" />
            <button className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100">
              Login
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiOutlineMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {}
      {menuOpen && (
        <div className="md:hidden bg-green-600">
          <a href="#" className="block px-4 py-2 hover:bg-green-500">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-500">
            Shop
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-500">
            About
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;