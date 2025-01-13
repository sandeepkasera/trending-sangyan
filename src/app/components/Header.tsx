"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from 'react-icons/fa'; // Using Font Awesome for hamburger menu icons
import { CgProfile } from "react-icons/cg";
import { FiSearch } from 'react-icons/fi'; // Import the search icon from react-icons
import clsx from 'clsx'



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    men: false,
    women: false,
    kids: false,
    homeANDliving: false,
    themes: false,
    wishlist: false,
    supersave: false,
  });
  const router = useRouter();

  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const part = parts.pop();
      if (part) {
        return part.split(';').shift();
      }
    }
    return undefined;
  };

  const handleProfilePage = () => {
    const user = getCookie('shit_user');
    if (user) {
      router.push(`/profile/${user}`);
    } else {
      router.push('/login');
    }
  };

  const handleTech = () => {
    router.push('/tech');
  };

  const searchProducts = () => {
    console.log('Searched');
  };

  return (
    <header className="bg-white text-black px-2 py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/"><h3 className="text-black text-xl font-bold whitespace-nowrap">Trending Sangyan</h3></Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-24 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:z-auto transition-all duration-300 ease-in-out`}>
          {/* Tech Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
            onClick={() => handleTech()}
          >
            <span className="cursor-pointer">Tech</span>
          </li>

          {/* Spiritual Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
          >
            <span className="cursor-pointer">Aadhyatmik</span>
          </li>

          {/* Swadesh Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
          >
            <span className="cursor-pointer">Swadesh</span>
          </li>
          {/* Videsh Dropdown */}
          <li
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
          >
            <span className="cursor-pointer">Videsh</span>
          </li>

          
          {/* Add other sections like Men, Women, Kids, etc. */}
          {/* Search */}
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <div className="relative w-full md:w-auto">
              <FiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="search"
                placeholder="Search Informations"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                onChange={searchProducts}
              />
            </div>
          </li>

          {/* Profile */}
          {/* <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <button onClick={handleProfilePage} className="text-black rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <CgProfile className={clsx('h-4 transition-all ease-in-out hover:scale-110')} />
            </button>
          </li> */}

        </ul>
      </nav>
    </header>
  );
};

export default Header;
