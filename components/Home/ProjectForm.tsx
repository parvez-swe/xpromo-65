"use client";
import factoryDirectAnimation from "@/public/home/let's-keep-it-simple.json";
import dynamic from "next/dynamic";
import PForm from "./PForm";

export default function ProjectForm() {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <div className="min-h-screen  max-w-[1280px] mx-auto  my-20 ">
      {/* <h1 className="text-center text-3xl font-semibold mb-6">
        LET&apos;S KEEP IT SIMPLE
      </h1> */}
      <div className=" grid grid-cols-2">
        <div>
          <h1 className="mb-3 text-3xl font-extrabold">
            We take the work of your plate.
          </h1>
          <p className="mb-3 text-sm font-thin">
            Tell us about your project, and we&apos;ll handle the rest
            <br />
            finding the best solutions to save you time.
          </p>
          <p className="mb-3 text-sm">fast, simple, and stress-free.</p>

          <div className="flex ice justify-center ">
            <div className="">
              <Lottie
                className=" h-[450px] w-auto"
                animationData={factoryDirectAnimation}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className=" w-full px-5 ">
          <PForm />
        </div>
      </div>
    </div>
  );
}
