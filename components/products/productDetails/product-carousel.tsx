"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface ProductCarouselProps {
  images: string[];
}

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const thumbnailsRef = React.useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setSelectedIndex((current) => {
      const newIndex = current === 0 ? images.length - 1 : current - 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setSelectedIndex((current) => {
      const newIndex = current === images.length - 1 ? 0 : current + 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const scrollToThumbnail = (index: number) => {
    if (thumbnailsRef.current) {
      const thumbnails = thumbnailsRef.current.children;
      const targetThumbnail = thumbnails[index] as HTMLElement;

      // Scroll the container to make the target thumbnail visible
      thumbnailsRef.current.scrollTo({
        left: targetThumbnail.offsetLeft - thumbnailsRef.current.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full bg-white h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src={images[selectedIndex]}
          alt="Product image"
          fill
          className="object-contain p-4"
          priority
        />
      </div>

      {/* Thumbnails and Controls */}
      <div className="relative">
        <div className="flex items-center space-x-2 sm:space-x-4 px-5">
          {/* Previous Button */}
          <div
            className="absolute flex items-center justify-center left-2 sm:-left-5 cursor-pointer z-10 p-2 sm:p-3"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            {/* <p className=" text-5xl">&lt;</p> */}
          </div>

          {/* Thumbnails */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={thumbnailsRef}
              className="flex space-x-2 sm:space-x-4 px-4 sm:px-8 overflow-x-auto scrollbar-hide"
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedIndex(index);
                    scrollToThumbnail(index);
                  }}
                  className={`relative aspect-square w-16 sm:w-20 lg:w-24 flex-shrink-0 cursor-pointer border-2 ${
                    selectedIndex === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div
            className="absolute  right-2 sm:-right-5 z-10 flex items-center justify-center cursor-pointer  p-2 sm:p-3 "
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            {/* <p className="text-5xl">&gt;</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
