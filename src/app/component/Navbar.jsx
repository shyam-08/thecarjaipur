// components/Navbar.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import SearchBox from './SearchBox'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-3 font-bold ">
      <div>
        <Link href="/home" passHref>
        The Car Jaipur
        </Link>
      </div>
<SearchBox/>
      <button   onClick={toggleMenu} className="lg:hidden">
        Menu
      </button>

      <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <li>
            <Link legacyBehavior href="/contactus" passHref>
            Contact Us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/aboutus" passHref>
            About Us
            </Link>
          </li>
          <li>
            <Link  legacyBehavior href="/sellcar" passHref>
            Sell Car
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/sell" passHref>
            SellCar:874206801
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/sell" passHref>
              Buy Car:768604392
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
