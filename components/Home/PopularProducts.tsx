"use client";
import Image from "next/image";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import Lottie from "lottie-react";
import popularAnimation from "@/public/home/popularAnimation.json";
import dynamic from "next/dynamic";
import Link from "next/link";
// This would typically come from your data source
const relatedProducts = [
  {
    id: 1,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
];

export function PopularProducts() {
  // Dynamically import Lottie with SSR disabled
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <div className="bg-[#004b004c]   rounded-3xl pt-5 flex flex-col items-center">
      <div className=" max-w-[1280px]">
        <h1 className=" text-center text-[#073409] text-xl font-bold mt-10">
          Better Sourcing, Better Swag, Better Future
        </h1>
        <div className=" grid grid-cols-3 px-10 border-b-2s mx-10  ">
          <div className=" flex flex-col pt-16 ">
            <h2 className=" text-sm  font-semibold text-center">
              In a world of fast merch and forgotten products, we&apos;re here
              to do better.
            </h2>
            {/* <h2 className=" mt-3 text-sm">
            WE TAKE SOURCING SERIOUSLY, WORKING ONLY WITH ETHICAL, VERIFIED
            SUPPLIERS.
          </h2> */}
            <div className=" flex-1  flex flex-col items-center justify-center">
              <Link
                href="/sustainabilitypolicy"
                className=" w-52 text-xs text-[#073409] text-center  font-bold rounded-3xl border-2 border-[#073409] py-3 "
              >
                View Suistanability Policy
              </Link>
            </div>
          </div>
          <div className="-mb-2">
            <Lottie animationData={popularAnimation} loop={true} />
          </div>
          <div className=" flex flex-col pt-16 text-[#073409] ">
            <h2 className=" text-sm text-center font-semibold">
              We take sourcing seriously, working only with ethical, verified
              suppliers.
            </h2>
            <div className=" flex-1  flex flex-col items-center justify-center">
              <Link
                href={"/categories/eco-products"}
                className="  w-52 text-xs text-center text-[#073409] font-bold rounded-3xl border-2 border-[#073409] py-3 px-2"
              >
                Browse Eco Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-6  bg-[#568756] flex flex-col items-center border-t-2 border-white ">
        <div className=" max-w-[1280px]">
          <h2 className="text-lg text-center text-white  pl-5 font-bold tracking-tight ">
            Popular Sustainable Products
          </h2>

          {/* <ScrollArea className="w-full whitespace-nowrap rounded-lg"> */}
          <div className="flex flex-row items-center justify-center  w-full  space-x-4  p-4 ">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="w-[250px] shrink-0">
                <CardContent className="p-4 flex  justify-center items-center">
                  <Image
                    src={"/images/product.jpg"}
                    alt={product.name}
                    className="aspect-square object-cover rounded-md"
                    width={200}
                    height={200}
                    priority={false}
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 p-4">
                  <h3 className="font-bold italic text-newprimary uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <button
                    className="w-fit border-2 border-newprimary text-newprimary  px-5 py-1 text-xs font-bold italic uppercase rounded-full"
                    onClick={() =>
                      console.log(`Added ${product.name} to quote`)
                    }
                  >
                    Add to Quote
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        {/* <ScrollBar orientation="horizontal" /> */}
        {/* </ScrollArea> */}
        <div id="z"></div>
      </div>
    </div>
  );
}
