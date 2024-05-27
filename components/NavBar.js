import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
// import { useRouter } from 'next/router';
import NavLogo from "../public/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("black");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
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
          <div className="text-lg font-bold text-white">AM Players</div>
          <div className="flex mb-4">
            <ul className="hidden md:flex text-white">
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
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={NavLogo} width="87" height="35" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    News
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Media
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Community
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Gear Support
                  </li>
                </Link>
                <Link href="/resume">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Buy Now
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
