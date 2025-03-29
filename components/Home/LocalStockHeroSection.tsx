import Link from "next/link";
import React from "react";
// import Lottie from "lottie-react";
import LocalStockAnimation from "@/public/animation/localStockAnimation.json";
import dynamic from "next/dynamic";

const LocalStockHeroSection = () => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <div className="bg-newsecondary">
      <div className=" grid grid-cols-2  py-20 max-w-[1280px] mx-auto">
        <div className=" pt-10 ">
          <h1 className=" text-4xl font-bold  ">
            Wholesale Merch,
            <br />
            Made Simple
          </h1>
          <p className="py-5 text-base  font-thin">
            Xpromo connects businesses directly to manufacturers, providing
            merchandise at factory-direct prices.
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
          <div className=" w-[90%]s">
            <Lottie animationData={LocalStockAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalStockHeroSection;

/** 
 * 
 *
 * RUSH ORDER? WE'VE GOT YOU COVERED!
GET YOUR CUSTOM MERCHANDISE RAPIDLY WITH XPROMO, FEATURING PREMIUM RETAIL BRANDS AT THE BEST PRICE
& XPROMO SPEED - 24-HOUR PRODUCTION
& RETAIL BRANDS AVAILABLE - GET TOP BRANDS LIKE NIKE, ADIDAS, AND MORE.
O PRICE MATCH GUARANTEE- WE MATCH ANY COMPETITOR'S PRICE
 */
