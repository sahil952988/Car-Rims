"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="max-w-[1536px] mx-auto relative">
        <div className="w-full h-screen">
          <Image
            className="object-cover w-full h-full"
            src="/sliderimg1.webp"
            alt="Slide"
            width={1536}
            height={1080}
          />
        </div>

        <div className="absolute md:top-[35%] top-[25%] w-full h-[300px] flex items-center justify-center text-white px-4">
          {showFirst ? (
            <div className="first flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-20 md:space-y-0">
              <div className="image  md:w-[500px] w-[220px] md:h-[500px] h-[220px]">
                <Image
                  className="py-5"
                  src="/rims1.webp"
                  alt="rims"
                  width={500}
                  height={500}
                  layout="intrinsic"
                />
              </div>

              <div className="font-robot text-center md:text-left md:pt-20">
                <h1 className="text-[48px] md:text-[68px]">Wheeling and Dealing</h1>
                <h1 className="text-[24px] md:text-[30px] text-gray-400">
                  <span>Rock and Roll</span>
                  <span className="text-white font-semibold px-2">Dreams</span>
                  <span>Come True</span>
                </h1>
                <button className="bg-primary px-5 py-5 font-semibold text-[18px] md:text-[20px] mt-8">
                  Discover Rims
                </button>
              </div>
            </div>
          ) : (
            <div className="second flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-20 md:space-y-0">
              <div className="font-robot text-center md:text-left pt-32 md:pt-0">
                <h1 className="text-[36px] md:text-[68px]">Give Your Car Wings.</h1>
                <h1 className="text-[20px] md:text-[30px] text-gray-400">
                  <span>We have over</span> <span className="text-white font-semibold px-2">4 million</span> <span>rims and tires in stock.</span>
                </h1>
                <button className="bg-primary px-5 py-5 font-semibold text-[18px] md:text-[20px] mt-8">
                  Discover Rims
                </button>
              </div>

              <div className="image  md:w-[500px] w-[220px] md:h-[500px] h-[220px]">
                <Image
                  className="py-5"
                  src="/rims2.png"
                  alt="rims"
                  width={500}
                  height={500}
                  layout="intrinsic"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;
