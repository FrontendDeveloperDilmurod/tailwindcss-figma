import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" max-w-[1240px]   mx-auto flex justify-between items-center h-20 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
        REACT
      </h1>
      <ul className=" hidden md:flex  items-center  ">
        <button className="p-4 cursor-pointer hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500">
          Home
        </button>
        <button className="p-4 cursor-pointer hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500">
          Company
        </button>
        <button className="p-4 cursor-pointer hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500">
          Resources
        </button>
        <button className="p-4 cursor-pointer hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500">
          About
        </button>
        <button className="p-4 cursor-pointer hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500">
          Contact
        </button>
        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[120px]  h-[40px] hover:border-white hover:underline hover:font-semibold">
          Sign Up
        </button>
      </ul>

      {/* Burger Menu */}
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? (
          <IoClose className="text-3xl cursor-pointer font-bold " />
        ) : (
          <CiMenuBurger className="text-2xl cursor-pointer font-bold " />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-black  ease-in-out duration-500"
            : "fixed  left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold p-4 text-[#00df9a] cursor-pointer">
          REACT
        </h1>
        <ul className=" p-4 uppercase">
          <li className="p-4 border-b border-gray-600 hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500 cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500 cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:underline hover:text-[#00df9a] hover:ease-in-out hover:duration-500 cursor-pointer">
            About
          </li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
