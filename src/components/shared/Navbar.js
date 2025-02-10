"use client";
import Image from "next/image";
import logo from "../../assets/logo/Layer_1.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { FiChevronUp } from "react-icons/fi";
import { useRef, useState } from "react";
import Link from "next/link";
import Container from "../Container";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <section className="border border-[#DFE1E3] shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-3 ">
          <div className="flex items-center gap-16">
            {/* Logo */}
            <Image src={logo} alt="logo" width={200} height={200} />
            <div className="flex w-full items-center gap-5 pt-3">
              {/* Search Bar */}
              <div className="flex ">
                <div className="border-l border-t border-b border-[#E6E6E6] flex rounded-l-full items-center  w-full">
                  <FiSearch className="ml-3 text-[#1D242D]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none text-base flex-1 px-3 py-2"
                  />
                </div>
                <button className="bg-[#FF7D29] px-4 text-white py-2 rounded-r-full border border-[#FF7D29]">
                  Search
                </button>
              </div>
              {/* Category */}
              <div ref={dropdownRef} className="relative inline-block">
                {/* Dropdown Button */}
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 black px-4 py-2 "
                >
                  All Category
                  {isOpen ? (
                    <FiChevronUp className="rotate-0 transition-all 0.5s" />
                  ) : (
                    <FiChevronUp className="rotate-180 transition-all 0.5s" />
                  )}
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-5 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 black cursor-pointer">
                      Option s
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 black cursor-pointer">
                      Option 2
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 black cursor-pointer">
                      Option 3
                    </li>
                  </ul>
                </div>
              </div>
              <Link className="black " href={"/coupon"}>
                Coupon
              </Link>
              <Link className="black" href={"/support"}>
                Support
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-3">
            <AiOutlineShoppingCart size={25} />
            <RiUserLine size={25} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
