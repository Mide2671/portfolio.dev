import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: 1, name: "Home", to: "home" },
  { id: 2, name: "About", to: "about" },
  { id: 3, name: "Projects", to: "projects" },
  { id: 4, name: "Contact", to: "contact" },
];

import React from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md shadow-sm text-slate-100">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-sky-400">Muhammed.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-sky-400 transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-slate-900 px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setNavOpen(false)}
                className="cursor-pointer font-medium text-lg hover:text-sky-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
