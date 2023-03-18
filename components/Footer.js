import Link from 'next/link';
import logo1 from '../public/footerIcons/logo1.svg'
import logo2 from '../public/footerIcons/logo2.svg'
import logo3 from '../public/footerIcons/logo3.svg'
import logo4 from '../public/footerIcons/logo4.svg'

const Footer = () => {
    return (
        <footer className="bg-[#f0f0f0] text-[rgba(5,18,26,.6)] py-8 ">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <ul className="mb-4 md:mb-0">
                        <li className="inline-block mr-6">
                            <Link href="/privacy-cookies">
                                Privacy &amp; Cookies
                            </Link>
                        </li>
                        <li className="inline-block mr-6">
                            <Link href="/terms-of-use">
                                Terms of use
                            </Link>
                        </li>
                        <li className="inline-block mr-6">
                            <Link href="/legal">
                                Legal
                            </Link>
                        </li>
                        <li className="inline-block mr-6">
                            <Link href="/support">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 text-center">
                    <img src={logo1} alt="Obsidian Entertainment Logo" className="h-8 inline-block mx-2" />
                    <img src={logo2} alt="The Outer Worlds Logo" className="h-8 inline-block mx-2" />
                    <img src={logo3} alt="Take-Two Interactive Logo" className="h-8 inline-block mx-2" />
                    <img src={logo4} alt="AMD Logo" className="h-8 inline-block mx-2" />
                </div>
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <p className="text-sm mt-2 text-[#303030]">
                        &copy; 2023 Obsidian Entertainment, Inc. Obsidian Entertainment and the Obsidian Entertainment logo are trademarks or registered trademarks of Obsidian Entertainment, Inc. The Outer Worlds and The Outer Worlds logos are trademarks or registered trademarks of Obsidian Entertainment, Inc.
                    </p>
                    <p className="text-sm mt-2 text-[#303030]">
                        &copy; 2023 Take-Two Interactive Software, Inc. Trademarks belong to their respective owners. All rights reserved.
                    </p>
                    <p className="text-sm mt-2 text-[#303030]">
                        &copy; 2023 PS4 is a trademark of Sony Computer Entertainment Inc.
                    </p>
                    <p className="text-sm mt-2 text-[#303030]">
                        &copy; 2023 Nintendo Switch is a trademark of Nintendo.
                    </p>
                    <p className="text-sm mt-2 text-[#303030]">
                        &copy; 2023 Advanced Micro Devices, Inc. All rights reserved. AMD, the AMD Arrow logo, Radeon, Ryzen and combinations thereof are trademarks of Advanced Micro Devices, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
