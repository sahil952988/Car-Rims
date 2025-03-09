"use client";

import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io"; // Import Close Icon
import { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="flex justify-between pl-[20px] bg-black opacity-85 text-white font-medium md:h-[110px] h-[80px]">

          <div className="w-[100px] md:w-[170px]">
            <Image
              className="py-5"
              src="/logo-rims.png"
              alt="headLogo"
              width={170}
              height={100}
              layout="intrinsic"
            />
          </div>

          <div className={`md:flex items-center  right-0 md:bg-transparent bg-black opacity-95 md:relative absolute h-full md:w-auto w-[50%] ${isOpen ? "block" : "hidden"}`}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl md:hidden text-white transition-transform duration-300 hover:rotate-180"
            >
              <IoMdClose />
            </button>

            <div className="navigation_text md:flex md:space-x-10 pt-14 md:pt-0 md:space-y-0 space-y-3">
              <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">home.</h1>
              <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">brand.</h1>

              <div className="md:hidden xl:block ">
                <div className="md:flex md:space-x-10 md:space-y-0 space-y-3">
                  <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">size.</h1>
                  <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">color.</h1>
                  <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">rims.</h1>
                  <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">blog.</h1>
                  <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">page.</h1>
                  <h1 className="md:border-none border-b-[1px] pb-2 pl-5 border-b-gray-600">contact.</h1>
                </div>
              </div>
              <HiDotsHorizontal className="hidden md:block xl:hidden mt-1 text-[20px] cursor-pointer" />
            </div>
          </div>


          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="icons flex space-x-10 text-[20px] items-center border-l-2 border-l-gray-600 pl-5 ">
                <IoSearchOutline />
                <GoPerson />
                <FaRegHeart />
              </div>
            </div>
          </div>

          <div className="flex space-x-5 md:mr-0 mr-[20px] md:my-0 my-5">
            <div className="cart bg-[#eeca52] md:w-[100px] w-[50px] flex items-center justify-center h-full  ">
              <GrCart className="text-black md:text-[32px] text-[22px]" />
            </div>

            <div onClick={() => setIsOpen(!isOpen)} className="menu md:hidden">
              <div className="bg-[#eeca52] md:w-[100px] w-[50px] flex items-center justify-center md:h-[110px] h-full cursor-pointer">
                <TiThMenu className="text-[22px] text-black" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
