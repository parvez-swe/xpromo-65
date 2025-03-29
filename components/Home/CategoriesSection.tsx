"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    title: "Apparel",
    image: "/image/popular-categories/Apparel.jpg",
    description: "Trendy and comfortable clothing",
  },
  {
    title: "Bags & Backpacks",
    image: "/image/popular-categories/Bags & Backpacks.jpg",
    description: "Stylish and durable bags",
  },
  {
    title: "Construction",
    image: "/image/popular-categories/Construction.jpg",
    description: "Essential gear for construction work",
  },
  {
    title: "Drinkweare",
    image: "/image/popular-categories/drinkwear.jpg", // Converted from PDF to image
    description: "Custom bottles and mugs",
  },
  {
    title: "Eco Products",
    image: "/image/popular-categories/Eco-Product.jpg",
    description: "Sustainable merchandise",
  },
  {
    title: "Headwear",
    image: "/image/popular-categories/Headwear.jpg",
    description: "Custom headwear for your brand",
  },
  {
    title: "Pet Supplies",
    image: "/image/popular-categories/Pet Supplies.jpg",
    description: "Quality pet accessories",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-16 bg-[#CFCFCF]">
      <div className="max-w-[1280px] mx-auto">
        <div className="px-4">
          <div className="flex items-center justify-center">
            <div className="bg-[#CFCFCF] px-10 py-5 w-fit mb-14">
              <h2 className="text-4xl text-newprimary font-bold text-center">
                POPULAR CATEGORIES
              </h2>
            </div>
          </div>

          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                type: "bullets",
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 5 },
              }}
            >
              {categories.map((category, idx) => (
                <SwiperSlide key={idx} className="flex justify-center mb-16">
                  <div className="transition-all duration-300 opacity-100 scale-100">
                    <div className="flex flex-col w-full items-center justify-center">
                      <div className="relative flex w-48 h-48 mb-4">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="rounded-full object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {category.title}
                    </h3>
                    <div className="flex justify-center">
                      <Link href={`/categories/${category.title}`}>
                        <button className="rounded-full px-12 uppercase text-base font-bold text-newprimary  hover:text-white border-2 border-newprimary hover:bg-newprimary flex flex-row items-center ">
                          <span className=" text-2xl ">X</span>plore
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Custom Pagination */}
            <div className="custom-pagination flex justify-center gap-1 mt-4 !relative" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #000;
        }
        .custom-prev::after,
        .custom-next::after {
          content: none !important;
        }
        .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}
