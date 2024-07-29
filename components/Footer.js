import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import logo1 from "../public/footerIcons/logo1.svg";
import logo2 from "../public/footerIcons/logo2.svg";
import logo3 from "../public/footerIcons/logo3.svg";
import logo4 from "../public/footerIcons/logo4.svg";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-8 pb-10">
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center pl-4 md:pl-0 gap-20">
        <div className="w-1/2 md:w-1/4 text-center md:text-left">
          <div
            className="text-3xl font-bold mb-2"
            style={{ letterSpacing: "4px" }}
          >
            AM Players
          </div>
          <div className="text-[#eaeae4] text-sm">
            Our goal is to develop exceptionally entertaining games. We believe
            in presenting high-quality, engaging, and innovative features in our
            games to be the best in the gaming industry.
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left mt-4 md:mt-0">
          <div className="text-xl text-[#b0b0ad] mb-4">Contact Us</div>
          <div>
            <ul>
              <li className="mb-2">
                <FiMail className="inline-block mr-4" />{" "}
                amplay.entertainment@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 mt-4 md:mt-0">
        <div className="w-full text-center sm:text-left md:order-1 flex justify-center md:justify-start items-center">
          {" "}
          {/* Modified */}
          <ul className="mb-4 md:mb-0 flex">
            {" "}
            {/* Modified */}
            <li className="inline-block mr-6  md:mt-0 md:mr-0">
              {" "}
              {/* Added margin top for small screens */}
              <Link href="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li className="inline-block mr-6">
              <Link href="/app-add.txt">Terms of use</Link>
            </li>
            <li className="inline-block mr-6">
              <Link href="/legal">Legal</Link>
            </li>
            <li className="inline-block mr-6">
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className="w-full  text-center md:text-right md:order-2">
          <div className="text-1.75xl py-10">
            2024 © AM Players | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
