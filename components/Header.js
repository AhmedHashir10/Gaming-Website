import Image from "next/image";
import NavLogo from "../public/logo.svg";
import logoHeader from "../public/icons/logo-header.svg";

export default function Header() {
  return (
    // <div className="bg-bg-black bg-med1a1a1a">
    //   <ul className="ml-60 md:flex">
    //     <li className="ml-1">
    //       <Image alt="logo" src={NavLogo} width="100" height="40" />
    //     </li>
    //     <li className="">
    //     Header
    //     </li>
    //   </ul>
    //   <div className="flex justify-center  text-3xl text-center p-0">
    //     <span className="mr-30"></span>
    //   </div>
    // </div>
    <div className=" bg-[#1a1a1a]  ">
      <header class="px-35 py-4 flex items-center justify-between mr-10 ml-10 bg-[#1a1a1a] h-10">
        <div class="flex items-center">
          <Image alt="logo" src={logoHeader} width="100" height="40" className="invert" />
        </div>
        <div class="flex items-center">
          <button class="bg-[#1a1a1a] hover:bg-blue-700 text-[#b3b3b3] font-bold py-2 px-4  mr-4">Sign In</button>
          <button class="bg-[#e8e8e8] hover:bg-red-700 text-[#1a1a1a] font-bold py-2 px-4 ">Sign Up</button>
        </div>
      </header>
    </div>

  );
}
