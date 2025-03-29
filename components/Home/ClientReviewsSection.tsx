"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageWrapper from "../PageWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const reviews = [
  {
    name: "Elissa Martin",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    review:
      "I was honestly surprised by how quickly everything came together with Xpromo—from order to delivery, the whole process was smooth and fast. The swag looks and feels amazing. Super happy with the experience and will definitely come back for more.",
  },
  {
    name: "Will Dowd",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    review:
      "What stood out to me most with Xpromo was the quality. The pricing is also really fair for what you get, especially considering how solid and well-made everything is. Great value, great service. ELITE!",
  },
  {
    name: "Carolyn Yvellez",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    review:
      "I try to shop consciously, so I was really impressed to see how committed Xpromo is to sustainability. The materials, the packaging, even their production process—everything felt intentional and eco-friendly. And on top of that, the product is beautiful and really well done.",
  },
  {
    name: "Ryan Mitchell",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    review:
      "Honestly just a seamless experience from Xpromo. Customer service was responsive and helpful, my branded merch arrived quickly, and the final result exceeded my expectations. It’s refreshing to find a business that actually delivers on both speed and quality.",
  },
  {
    name: "Jessica Langford",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    review:
      "Absolutely thrilled with our swag from Xpromo. It arrived much sooner than I anticipated, and it was clear from the get-go that quality wasn’t sacrificed for speed. It also felt great knowing that sustainability is part of their ethos—makes supporting them even more worthwhile.",
  },
  {
    name: "Nathan Reid",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    review:
      "I couldn’t be happier with the products we received from Xpromo. The price was surprisingly affordable for merch that feels this high-end. Definitely a return customer in the making.",
  },
];

export default function CustomerReviews() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="max-w-[1280px] mx-auto">
      <PageWrapper className="py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 italic">
          What our customers say about us
        </h2>

        <div className="relative px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error - Refs are guaranteed to be assigned by React before Swiper initialization
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error - Refs are guaranteed to be assigned by React before Swiper initialization
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            pagination={{
              clickable: true,
              el: ".review-pagination",
              type: "bullets",
            }}
            className="w-full"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name} className="h-auto pb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="relative p-6 rounded-xl overflow-hidden shadow-lg h-full min-h-[300px] flex flex-col">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-black rounded-bl-3xl flex items-center justify-center">
                      <span className="text-white text-3xl font-serif">
                        &quot;
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col  items-center space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold">{review.name}</h3>
                        <p className="text-muted-foreground text-2xl  ">
                          {review.rating}
                        </p>
                      </div>
                      <p className="text-gray-800 leading-relaxed text-center">
                        {review.review}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <Button
            ref={prevRef}
            variant="ghost"
            size="icon"
            className="absolute hidden left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-lg w-12 h-12"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            ref={nextRef}
            variant="ghost"
            size="icon"
            className="absolute hidden right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-lg w-12 h-12"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Custom Pagination */}
          <div className="review-pagination flex justify-center gap-2 mt-6 !relative" />
        </div>

        <style jsx global>{`
          .review-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: rgba(0, 0, 0, 0.2);
            opacity: 1;
            transition: all 0.3s ease;
          }
          .review-pagination .swiper-pagination-bullet-active {
            background: #000;
            transform: scale(1.2);
          }
        `}</style>
      </PageWrapper>
    </div>
  );
}
