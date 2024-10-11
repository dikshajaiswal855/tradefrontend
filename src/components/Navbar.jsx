import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import burger from "../assets/burger.png";
import cross from "../assets/cross.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex fixed w-full bg-white justify-between items-center shadow-md p-4 px-6 lg:px-16">
      {/* Logo */}
      <div className="nav_logo_name">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[18px] lg:h-8" />
        </Link>
      </div>

      {/* Full Navigation for larger screens */}
      <div className="hidden lg:flex space-x-6">
        <Link to="/" className="text-blue-500 py-1 px-2">
          Home
        </Link>
        <Link to="/pricing" className="hover:bg-[#E3EBFD] rounded-lg py-1 px-2">
          Pricing
        </Link>
        <Link to="/docs" className="hover:bg-[#E3EBFD] rounded-lg py-1 px-2">
          Docs
        </Link>
        <Link to="/support" className="hover:bg-[#E3EBFD] rounded-lg py-1 px-2">
          Support
        </Link>
        <Link
          to="/calculate"
          className="hover:bg-[#E3EBFD] rounded-lg py-1 px-2"
        >
          Calculate
        </Link>
      </div>

      {/* Login Button */}
      <div className="hidden lg:block">
        <button className="bg-[#407BFF] hover:bg-blue-400 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden p-1 hover:bg-[#E3EBFD] rounded-md">
        <button onClick={toggleMobileMenu}>
          <img
            src={isMobileMenuOpen ? cross : burger}
            alt="Menu Toggle"
            className="h-4  "
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-white z-10 lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 px-6">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-4" />
          </Link>

          {/* Close Icon */}
          <div className="hover:bg-[#E3EBFD] rounded-md p-1">
            <button onClick={toggleMobileMenu}>
              <img src={cross} alt="Close Menu" className="h-4 " />
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-start  space-y-4 ">
          <hr className="bg-black w-full" />
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="ml-6 text-balance text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            onClick={toggleMobileMenu}
            className="ml-4 w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] rounded-lg"
          >
            Pricing
          </Link>
          <Link
            to="/docs"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] rounded-lg"
          >
            Docs
          </Link>
          <Link
            to="/support"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] rounded-lg"
          >
            Support
          </Link>
          <Link
            to="/calculate"
            onClick={toggleMobileMenu}
            className="ml-4  w-[90%] py-1 px-2 text-balance  hover:bg-[#E3EBFD] rounded-lg"
          >
            Calculate
          </Link>

          <Link
            to="/login"
            onClick={toggleMobileMenu}
            className=" w-full flex justify-center items-center px-4"
          >
            <button className="bg-[#407BFF] hover:bg-blue-400 text-white px-4 py-2 rounded-lg mt-4 w-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
