"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {

  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="max-w-full mx-auto">

        <div className="w-full h-full ">
          <Image
            className=""
            src="/sliderimg1.webp"
            alt="Slide"
            width={1536}
            height={1080}
            layout="responsive"
          />
        </div>

        <div className="absolute top-[250px] w-full h-[300px] flex items-center justify-center text-white">
          {showFirst ? (
            <div className="first md:flex space-x-20">
              <div className="image">
                <Image
                  className="py-5"
                  src="/rims1.webp"
                  alt="rims"
                  width={500}
                  height={500}
                  layout="intrinsic"
                />
              </div>
              <div className="font-robot firstItem transition-opacity duration-1000 ease-in-out opacity-100 xl:pt-20 pt-10">
                <h1 className="text-[68px]">Wheeling and Dealing</h1>
                <h1 className="text-[30px] text-gray-400"><span>Rock and Roll</span><span className="text-white font-semibold px-2">Dreams</span><span >Come True</span></h1>
                <button className="bg-primary px-5 py-5 font-semibold text-[20px] mt-12">Discover Rims</button>
              </div>
            </div>
          ) : (
            <div className="second md:flex xl:space-x-20 space-x-10">
              <div className="font-robot secondItem transition-opacity duration-1000 ease-in-out opacity-100 pt-32">
                <h1 className="xl:text-[68px] text-[48px] font-roboto">Give Your Car Wings.</h1>
                <h1 className="xl:text-[30px] text-[20px] text-gray-400"><span>We have over</span> <span className="text-white font-semibold px-2">4 million</span> <span>rims and tires in stock.</span></h1>
                <button className="bg-primary px-5 py-5 font-semibold text-[20px] mt-12">Discover Rims</button>
              </div>

              <div className="image 2xl:w-[500px] w-[400px] 2xl:h-[500px] h-[400px]">
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
