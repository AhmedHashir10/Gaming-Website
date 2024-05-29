import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../public/logo.svg";
import Logo from "../public/logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("black");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleShadow() {
      if (window.scrollY >= 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="flex flex-row items-center justify-between w-full h-full px-16 py-4 2xl:px-16 bg-black">
          <div className="flex items-center">
            <Image src={Logo} width={60} height={60} alt="AM Players Logo" />
            <div className="text-lg font-bold text-white ml-[-12px]">
              AM Players
            </div>
          </div>
          <div className="flex mb-4">
            <ul
              className={`hidden md:flex text-white ${navOpen ? "hidden" : ""}`}
            >
              <li className="mt-5 ml-10 text-sm uppercase hover:text-[#ffd700] hover:border-[#ffd700] hover:border-b-2">
                <Link href="/home">Home</Link>
              </li>
              <li className="mt-5 ml-10 text-sm uppercase hover:text-[#ffd700] hover:border-[#ffd700] hover:border-b-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mt-5 ml-10 text-sm uppercase hover:text-[#ffd700] hover:border-[#ffd700] hover:border-b-2">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden"
            >
              {navOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {navOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-50">
            <div className="flex flex-col justify-center h-full text-white text-center">
              <Link
                href="/home"
                className="block py-4 border-b border-gray-400"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-4 border-b border-gray-400"
              >
                About Us
              </Link>
              <Link href="/contact" className="block py-4">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
