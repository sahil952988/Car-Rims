import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="flex justify-between pl-[20px] bg-black opacity-85 text-white font-medium">
          <Image className="py-5" width={170}
            height={100} src="/logo-rims.png" alt="headLogo" />

          <div className="navigation_text flex space-x-10 items-center">
            <h1>home.</h1>
            <h1>brand.</h1>
            <h1>size.</h1>
            <h1>color.</h1>
            <h1>rims.</h1>
            <h1>blog.</h1>
            <h1>page.</h1>
            <h1>contact.</h1>
          </div>

          <div className="icons flex space-x-10 text-[20px] items-center border-l-2 border-l-gray-600 pl-5">
            <IoSearchOutline />
            <GoPerson />
            <FaRegHeart />
          </div>

          <div className="cart ">
            <GrCart className="text-[24px] bg-[#eeca52] py-[25px] px-[25px] h-full w-[100px] text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
