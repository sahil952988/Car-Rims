import Image from "next/image";
import { FaFacebookF, FaInstagram, FaSkype, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const galleryImages = [
  "/footer/car1.jpg",
  "/footer/car2.jpg",
  "/footer/car7.jpg",
  "/footer/car4.jpg",
  "/footer/car5.jpg",
  "/footer/car6.jpg",
];

const quickLinks = [
  ["Home", "City Store", "Toolkit", "News", "Clients", "Consultation", "Publicity", "Support Forums"],
  ["Maps", "Careers", "Employees", "Teams", "Benefits", "Privacy Policy"],
];

const Footer = () => {
  return (
    <div className="bg-[#222222] py-[50px] px-[100px]">
      <div className="  flex justify-between">
        <div className="logo">
          <Image src="/logo-rims.png" height={75} width={170} alt="Logo" />
          <p className="text-[#FFFFFF99] w-[372px] mt-10">
            We offer many hot styles to choose from in custom wheels and tires packages. We provide fast shipping on all custom wheels, right to your door! Buy custom wheels at discount prices.
          </p>
          <div className="social_links text-white flex mt-10 space-x-2">

            <div className="bg-[#FFFFFF05] group hover:bg-[#1877F2] p-5 flex justify-center items-center">
              <FaFacebookF className="text-[20px] group-hover:transition-transform  group-hover:duration-300 group-hover:rotate-180" />
            </div>

            <div className="bg-[#FFFFFF05] group hover:bg-black p-5 flex justify-center items-center">
              <FaXTwitter className="text-[20px] group-hover:transition-transform  group-hover:duration-300 group-hover:rotate-180" />
            </div>


            <div className="bg-[#FFFFFF05] group hover:bg-gradient-to-br from-pink-600 to-yellow-300 p-5 flex justify-center items-center">
              <FaInstagram className="text-[20px] group-hover:transition-transform  group-hover:duration-300 group-hover:rotate-180" />
            </div>

            <div className="bg-[#FFFFFF05] group hover:bg-[#b00] p-5 flex justify-center items-center">
              <FaYoutube className="text-[20px] group-hover:transition-transform  group-hover:duration-300 group-hover:rotate-180" />
            </div>

            <div className="bg-[#FFFFFF05] group hover:bg-[#00aff0] p-5 flex justify-center items-center">
              <FaSkype className="text-[20px] group-hover:transition-transform  group-hover:duration-300 group-hover:rotate-180" />
            </div>
          </div>
        </div>

        <div className="photo_gallery">
          <h1 className="text-white text-[18px] font-bold border-b-[1px] border-b-gray-500 pb-2 relative">
            Photo Gallery
            <div className="absolute bottom-[-1px] left-0 w-[60px] h-[5px] bg-primary"></div>
          </h1>

          <div className="gallery grid grid-cols-3 gap-4 mt-10">
            {galleryImages.map((imgSrc, index) => (
              <Image key={index} src={imgSrc} height={114} width={114} alt={`Gallery image ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="quick_access text-white">
          <h1 className="text-white text-[18px] font-bold border-b-[1px] border-b-gray-500 pb-2 relative">
            Quick Access
            <div className="absolute bottom-[-1px] left-0 w-[60px] h-[5px] bg-primary"></div>
          </h1>
          <div className="flex space-x-5 mt-10">
            {quickLinks.map((column, index) => (
              <div key={index} className="space-y-2">
                {column.map((link, i) => (
                  <h1 key={i} className="flex font-semibold cursor-pointer hover:text-primary hover:text-[17px] hover:translate-x-1 duration-75">
                    <RiArrowRightDoubleFill className=" mt-1 mr-2" />
                    {link}
                  </h1>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="copyright border-t-[0.1px] border-gray-400 mt-[50px] flex justify-between">
        <h1 className="text-white text-[#FFFFFF99] mt-5 text-[14px]">Copyright © 2025 Xtra Theme. All Rights Reserved. Powered by WordPress.</h1>

        <div className="flex space-x-5 mt-5">
          <h1 className="text-[#FFFFFFD9]">Privacy Policy</h1>
          <h1 className="text-[#FFFFFFD9]">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;