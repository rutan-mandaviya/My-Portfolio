import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-16 z-20 bg-[#0c0d0d] border-b border-zinc-900 fixed top-0 font-medium text-[#979797] flex items-center px-6 md:px-16 lg:px-32">
      {/* Logo */}
      <div className="text-lg font-semibold text-white">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Portfolio
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 ml-auto">
        <Link to="about" smooth={true} duration={500} className="hover:text-white cursor-pointer">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-white cursor-pointer">
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500} className="hover:text-white cursor-pointer">
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-white cursor-pointer">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-auto text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0c0d0d] border-t border-zinc-900 flex flex-col items-center gap-4 py-4 text-lg md:hidden">
          <Link to="about" smooth={true} duration={500} className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
