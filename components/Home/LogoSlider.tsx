"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ourBrands = [
  { icon: "/image/OurBrands/UnderArmour-1.png", title: "Under Armour" },
  { icon: "/image/OurBrands/Titleist-1.png", title: "Titleist" },

  { icon: "/image/OurBrands/Nike-1.png", title: "Nike" },

  { icon: "/image/OurBrands/Adidas-1.png", title: "Adidas" },
  { icon: "/image/OurBrands/HellyHansen-1.png", title: "Helly Hansen" },
  { icon: "/image/OurBrands/Bellroy-1.png", title: "Bellroy" },
  { icon: "/image/OurBrands/Bic-1.png", title: "Bic" },
  { icon: "/image/OurBrands/Blunt-1.png", title: "Blunt" },
  { icon: "/image/OurBrands/Callaway-1.png", title: "Callaway" },
  { icon: "/image/OurBrands/Camelbak-1.png", title: "Camelbak" },
  { icon: "/image/OurBrands/Coleman-1.png", title: "Coleman" },
  { icon: "/image/OurBrands/Footjoy-1.png", title: "Footjoy" },
  { icon: "/image/OurBrands/Moleskine-1.png", title: "Moleskine" },
  { icon: "/image/OurBrands/Thule-1.png", title: "Thule" },
  { icon: "/image/OurBrands/Titleist-1.png", title: "Titleist" },
  { icon: "/image/OurBrands/Flexfit-1.png", title: "Flexfit" },
];

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden my-2 max-w-7xl mx-auto">
      <div
        ref={scrollRef}
        className="flex items-center whitespace-nowrap space-x-4 scrolling-touch"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        {ourBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 p-4">
            <Image
              height={650}
              width={650}
              src={brand.icon}
              alt={`Brand ${index}`}
              className=" h-10 w-auto block"
            />
          </div>
        ))}
        {/* Duplicate content for smooth infinite loop */}
        {ourBrands.map((brand, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 p-4">
            <Image
              height={650}
              width={650}
              src={brand.icon}
              alt={`Brand duplicate ${index}`}
              className="h-20 w-auto block"
            />
          </div>
        ))}
        {/* three time content for smooth infinite loop */}
        {ourBrands.map((brand, index) => (
          <div key={`threetime-${index}`} className="flex-shrink-0 p-4">
            <Image
              height={650}
              width={650}
              src={brand.icon}
              alt={`Brand duplicate ${index}`}
              className="h-20 w-auto block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
