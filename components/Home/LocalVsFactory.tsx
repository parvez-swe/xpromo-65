"use client";
import Image from "next/image";
// import { Player } from "@lottiefiles/react-lottie-player";

export default function LocalVsFactory() {
  return (
    <div id="lvf" className="container mx-auto px-4 py-12 max-w-[1280px]">
      <div>
        <div className="grid grid-cols-12  justify-center pb-5 ">
          <div className=" col-span-2"></div>
          <h2 className="text-2xl text-[#05172D] font-bold text-center col-span-4 ">
            FACTORY DIRECT
          </h2>
          <div className="hidden md:flex items-center justify-center mx-4 col-span-2">
            <span className="text-5xl font-bold  text-[#05172D] italic  bg-[] ">
              VS
            </span>
          </div>
          <h2 className="text-2xl text-[#05172D]  font-bold text-center col-span-4 ">
            LOCAL STOCK
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-start text-left">
          <div className="col-span-2 grid gap-2 p-6">
            <div className="flex items-center h-20 ">
              <p className="font-bold text-xl text-[#05172D] text-center w-full">
                PRICE
              </p>
            </div>
            <div className="flex items-center h-20">
              <p className="font-bold text-xl text-[#05172D]  text-center w-full ">
                LEAD TIME
              </p>
            </div>
            <div className="flex items-center h-20">
              <p className="font-bold text-xl text-[#05172D]  text-center w-full ">
                QUANTITIES
              </p>
            </div>
            <div className="flex items-center h-20">
              <p className="font-bold text-lg whitespace-nowrap text-[#05172D]  text-center w-full">
                PRODUCT RANGE &<br />
                CUSTOMISATION
              </p>
            </div>
          </div>

          <div className="col-span-5 grid gap-2 bg-newsecondary border border-newprimary rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-center mb-8 md:hidden">
              FACTORY DIRECT
            </h2>
            <ComparisonItem
              icon="/home/off.png"
              header="WHOLESALE SAVINGS"
              subText="UP TO 70% OFF"
            />
            <ComparisonItem
              icon="/home/callender.png"
              header="LONG TERM PLANNING"
              image="/image/home/callender.png"
            />
            <ComparisonItem
              icon="/home/high.png"
              header="HIGH MINIMUM ORDER QUANTITIES"
            />
            <ComparisonItem
              icon="/home/edit.png"
              header="TAILORED SOLUTIONS FOR UNIQUE REQUIREMENTS"
            />
          </div>

          <div className="col-span-5 grid gap-2 bg-newsecondary border border-newprimary rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-center mb-8 md:hidden">
              LOCAL STOCK
            </h2>
            <ComparisonItem
              icon="/home/dollar.png"
              header="PRICE MATCH GUARANTEE"
            />
            <ComparisonItem icon="/home/24.png" header="24H PRODUCTION TIME" />
            <ComparisonItem
              icon="/home/low.png"
              header="FLEXIBLE ORDERING"
              subText="LOW MINIMUM QUANTITIES"
            />
            <ComparisonItem
              icon="/home/retails.png"
              header="ACCESS TO POPULAR RETAIL BRANDS"
            />
          </div>
        </div>
      </div>

      {/* how to use animation.lotttie file */}
      {/* <div className="flex justify-center items-center">
        <Player
          autoplay
          loop
          src="/facvslocal.lottie" // Replace with your .lottie file path
          style={{ height: "300px", width: "300px" }}
        />
      </div> */}
    </div>
  );
}

function ComparisonItem({ icon, header, subText }: any) {
  return (
    <div className="flex items-center gap-4 h-20">
      {/* {" "} */}
      {/* Set a fixed height */}
      {/* {icon} */}
      <Image src={icon} height={40} width={40} alt="icon" />
      <div className="  flex-1 flex flex-col  justify-center items-center">
        <p className="font-semibold italic text-[#3E6AA2] text-center">
          {header}
        </p>
        {subText && (
          <p className="text-[#3E6AA2] font-bold text-center italic">
            {subText}
          </p>
        )}
      </div>
    </div>
  );
}
