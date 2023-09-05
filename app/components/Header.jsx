'use client';
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 py-4 shadow-lg text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" passHref legacyBehavior>
            <a className="text-2xl font-semibold text-white">
              EduConnect
            </a>
          </Link>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
            <NavLink href="/" title="Home" />
            <NavLink href="/courses" title="Courses" />
            <NavLink href="/about" title="About Us" />
            <NavLink href="/contact" title="Contact Us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, title }) => (
  <Link href={href} passHref legacyBehavior>
    <a className="text-gray-100 hover:text-white block mt-4 md:inline-block md:mt-0 md:ml-4">{title}</a>
  </Link>
);

export default Header;
