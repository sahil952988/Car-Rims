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
    <div className="bg-[#1f1f1f] py-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="logo text-center md:text-left">
          <Image src="/logo-rims.png" height={75} width={170} alt="Logo" />
          <p className="text-[#FFFFFF99] mt-6 max-w-md">
            We offer many hot styles to choose from in custom wheels and tires packages. We provide fast shipping on all custom wheels, right to your door! Buy custom wheels at discount prices.
          </p>
          <div className="social_links text-white flex justify-center md:justify-start space-x-3 mt-6">
            {[
              { icon: FaFacebookF, bg: "hover:bg-[#1877F2]" },
              { icon: FaXTwitter, bg: "hover:bg-black" },
              { icon: FaInstagram, bg: "hover:bg-gradient-to-br from-pink-600 to-yellow-300" },
              { icon: FaYoutube, bg: "hover:bg-[#b00]" },
              { icon: FaSkype, bg: "hover:bg-[#00aff0]" },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-[#FFFFFF05] p-4 rounded-full flex justify-center items-center ${item.bg} transition-transform duration-300 hover:rotate-180`}
              >
                {<item.icon className="text-[20px]" />}
              </div>
            ))}
          </div>
        </div>

        <div className="photo_gallery">
          <h1 className="text-white text-[18px] font-bold border-b border-gray-500 pb-2 relative">
            Photo Gallery
            <div className="absolute bottom-[-1px] left-0 w-[60px] h-[5px] bg-primary"></div>
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {galleryImages.map((imgSrc, index) => (
              <Image key={index} src={imgSrc} height={80} width={80} alt={`Gallery image ${index + 1}`} className="rounded-md" />
            ))}
          </div>
        </div>

        <div className="quick_access text-white">
          <h1 className="text-[18px] font-bold border-b border-gray-500 pb-2 relative">
            Quick Access
            <div className="absolute bottom-[-1px] left-0 w-[60px] h-[5px] bg-primary"></div>
          </h1>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 mt-6">
            {quickLinks.map((column, index) => (
              <div key={index} className="space-y-2">
                {column.map((link, i) => (
                  <h1 key={i} className="flex font-semibold cursor-pointer hover:text-primary hover:translate-x-1 duration-75">
                    <RiArrowRightDoubleFill className="mt-1 mr-2" />
                    {link}
                  </h1>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="copyright border-t border-gray-400 mt-10 pt-6 flex flex-col md:flex-row justify-between text-center md:text-left text-[#FFFFFF99] text-sm">
        <h1>Copyright © 2025 Sahil Ali. All Rights Reserved.</h1>
        <div className="flex justify-center md:justify-end space-x-5 mt-4 md:mt-0">
          <h1>Privacy Policy</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
