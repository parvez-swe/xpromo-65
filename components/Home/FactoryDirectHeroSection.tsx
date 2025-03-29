// import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Lottie from "lottie-react";
import factoryDirectAnimation from "@/public/animation/factoryDirectAnimation.json";
import dynamic from "next/dynamic";
const FactoryDirectHeroSection = () => {
  // Dynamically import Lottie with SSR disabled
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <div className="bg-newsecondary flex flex-col items-center justify-center">
      <div className=" grid grid-cols-2   py-20 max-w-[1280px] mx-auto ">
        <div className=" pt-10 ">
          <h1 className=" text-4xl font-bold  ">
            Rush order? We&apos;ve Got You Covered!
          </h1>
          <p className="py-5 text-base  font-thin">
            Get your merch as fast as possible with Xpromo 24-hour production
            time!
          </p>

          {/* button  */}
          <div className=" flex ice justify-center py-5 mt-10">
            <Link
              href="categories/cagegoryid"
              className=" hover:bg-newprimary border-2  border-newprimary text-newprimary  hover:border-2  font-bold text-xl  hover:text-white  rounded-3xl px-14 py-2"
            >
              GET STARTED
            </Link>
          </div>
        </div>
        <div className="flex ice justify-center ">
          <div className="">
            <Lottie animationData={factoryDirectAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryDirectHeroSection;
