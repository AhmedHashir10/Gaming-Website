import Image from "next/image";
import NavLogo from "../public/logo.svg";

export default function Header() {
  return (
    <div>
      <ul className="ml-60 hidden md:flex">
        <li className="ml-1">
          <Image alt="logo" src={NavLogo} width="100" height="40" />
        </li>
        <li className="">
        Header
        </li>
      </ul>
      <div className="flex justify-center  text-3xl text-center p-0">
        <span className="mr-30"></span>
      </div>
    </div>
  );
}
