import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar(){
    const [navbar,setNavbar] = useState(false);
    return (<div>
        <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
            <div className=' justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'></div>
        </nav>
    </div>)
}

export default Navbar;