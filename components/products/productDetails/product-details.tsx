"use client";

import { Textarea } from "@/components/ui/textarea";
import { ProductCarousel } from "./product-carousel";
import { useState } from "react";

const productImages = [
  "/images/tshirt.jpg",
  "/images/product.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
  "/images/tshirt.jpg",
];

export function ProductDetails() {
  const [productCount, setProductCount] = useState(50);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
      {/* Product Carousel */}
      <ProductCarousel images={productImages} />

      {/* Product Information */}
      <div className="rounded-lg p-4 md:px-6 md:py-8">
        <h1 className=" text-2xl font-bold tracking-tight lg:text-3xl">
          Nike Men&apos;s Team R-Legend Tee
        </h1>
        <p>SKU: 123456</p>

        {/* Details Section */}
        <div className="space-y-6 rounded-3xl bg-newsecondary p-4 md:p-6 mt-2">
          {/* Description */}
          <div>
            <h2 className="mb-2 text-lg font-semibold lg:text-xl">
              DESCRIPTION
            </h2>
            <p className="text-sm text-gray-700 lg:text-base">
              Delight your customers and reward your team for years to come with
              the Nike Men&apos;s Team Legend Tee. Made from recycled polyester.
              Add your company logo and make it yours!
            </p>
            <button className="mt-2 text-newprimary font-bold hover:underline">
              Read more...
            </button>
          </div>

          <div className=" grid grid-cols-3 mt-2 ">
            <h2 className=" font-bold text-lg ">Quantity:</h2>
            {/* Quantity */}
            <div className="flex items-center  space-x-4  border-2 border-newprimary rounded-full w-fit">
              <button
                type="button"
                onClick={() => setProductCount((prev) => Math.max(0, prev - 1))}
                className="px-3  text-3xl rounded-md"
              >
                -
              </button>
              <span className="text-lg font-semibold italic">
                {productCount}
              </span>
              <button
                type="button"
                onClick={() => setProductCount((prev) => prev + 1)}
                className="px-3  text-3xl rounded-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <h2 className="mb-2 text-lg font-semibold lg:text-xl">
              SPECIAL INSTRUCTIONS
            </h2>
            <Textarea
              placeholder="PRINT POSITION, COLOURS, DIFFERENT QUANTITIES AND SIZES ETC."
              className="min-h-[100px] bg-gray-50 rounded-3xl"
            />
          </div>

          {/* Add to Quote Button */}
          <div className=" flex flex-col items-center justify-center">
            <button className=" px-5 text-xs font-bold   py-2 rounded-full border-black border-2 ">
              ADD TO QUOTE
            </button>
          </div>

          {/* What's Next Section */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold lg:text-xl">
              WHAT&apos;S NEXT?
            </h2>
            <p className="text-sm text-gray-700 lg:text-base">
              AFTER FINALIZING YOUR PRODUCT SELECTION, SUBMIT YOUR QUOTE
              REQUEST. WE WILL CREATE FREE MOCK-UPS AND PROVIDE A QUOTATION
            </p>
            <p className="font-bold text-sm lg:text-base">
              NO PAYMENT IS REQUIRED AT THIS STAGE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
