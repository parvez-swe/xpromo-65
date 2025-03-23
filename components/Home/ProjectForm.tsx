"use client";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
// import Lottie from "lottie-react";
import factoryDirectAnimation from "@/public/home/let's-keep-it-simple.json";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomDatePicker } from "../CustomDatePicker";

export default function ProjectForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Dynamically import Lottie with SSR disabled
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  const [peopleCount, setPeopleCount] = useState(50);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center   p-6 ">
      {/* <h1 className="text-center text-3xl font-semibold mb-6">
        LET&apos;S KEEP IT SIMPLE
      </h1> */}
      <div className="  max-w-[1280px] flex flex-col items-center justify-center ">
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
              <div className=" w-[90%]">
                <Lottie animationData={factoryDirectAnimation} loop={true} />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <>
              <Accordion
                type="single"
                collapsible
                defaultValue="step-1"
                className="w-full"
              >
                <AccordionItem
                  value="step-1"
                  className="border rounded-3xl overflow-hidden bg-newsecondary"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline ">
                    <h2 className="text-xl font-semibold text-slate-800">
                      STEP 1 - Your Project
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 space-y-4">
                    <div className="px-10 mt-5 w-full">
                      {/* div1 */}
                      <div className=" grid grid-cols-2  ">
                        <div className=" flex flex-col justify-center">
                          <label
                            htmlFor="project-for"
                            className="block font-medium text-[#3E6AA2]"
                          >
                            What&apos;s it FOR?
                          </label>
                        </div>

                        <div className="relative w-[90%]">
                          <select
                            id="project-for"
                            className="mt-1 w-full h-9 py-1 rounded-3xl border-gray-300 shadow-sm 
                   focus:ring-newprimary focus:border-newprimary appearance-none pl-3 pr-10"
                          >
                            <option></option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                          </select>
                          {/* Custom Chevron Icon */}
                          <ChevronDownIcon className="absolute top-1/2 right-3 w-5 h-5 text-gray-500 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* line 1 */}
                      <div className=" flex justify-center items-center">
                        <div className="w-[90%] h-px bg-white my-4" />
                      </div>

                      {/* div 2 */}
                      <div className=" grid grid-cols-2 ">
                        <div className=" flex flex-col justify-center">
                          <label
                            htmlFor="project-for"
                            className="block font-medium text-[#3E6AA2]"
                          >
                            What&apos;s your budget?
                          </label>
                        </div>
                        <div className="relative w-[90%]">
                          <select
                            id="project-for"
                            className="mt-1 w-full h-9 py-1 rounded-3xl border-gray-300 shadow-sm 
                   focus:ring-newprimary focus:border-newprimary appearance-none pl-3 pr-10"
                          >
                            <option></option>
                            <option>100</option>
                            <option>2000</option>
                          </select>
                          {/* Custom Chevron Icon */}
                          <ChevronDownIcon className="absolute top-1/2 right-3 w-5 h-5 text-newprimary transform -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* line 2 */}
                      <div className=" flex justify-center items-center">
                        <div className="w-[90%] h-px bg-white my-4" />
                      </div>

                      {/* div 3 */}
                      <div className=" grid   grid-cols-2">
                        <div className=" flex flex-col justify-center">
                          <label className="block font-medium text-[#3E6AA2]">
                            What&apos;s the quantity needed?
                          </label>
                        </div>

                        <div className=" flex flex-row  items-center justify-center">
                          <div className="felx-1 flex items-center justify-center">
                            <div className="flex  items-center mt-2 space-x-4 border-2 border-newprimary ml-10 rounded-full ">
                              <button
                                type="button"
                                onClick={() =>
                                  setPeopleCount((prev) =>
                                    Math.max(0, prev - 1)
                                  )
                                }
                                className="px-3 text-3xl rounded-md"
                              >
                                -
                              </button>
                              <span className="text-lg italic  font-semibold">
                                {peopleCount}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  setPeopleCount((prev) => prev + 1)
                                }
                                className="px-3 text-3xl rounded-md"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* line 2 */}
                      <div className=" flex justify-center items-center">
                        <div className="w-[90%] h-px bg-white my-4" />
                      </div>

                      {/* div 4 */}
                      <div className=" grid grid-cols-2 ">
                        <div className=" flex flex-col justify-center">
                          <label className="text-[#3E6AA2] ">
                            What&apos;s your target date?
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-2">
                          <div>
                            <CustomDatePicker date={date} setDate={setDate} />
                          </div>
                          <label className="flex items-center space-x-2">
                            <button className="px-4 italic  text-[10px] h-6   rounded-full  border-2 border-newprimary focus:ring-2  text-nowrap focus: ring-newprimary focus: bg-newprimary focus: text-white  ">
                              No Deadline
                            </button>
                          </label>
                        </div>
                      </div>

                      {/* line 3 */}
                      <div className=" flex justify-center items-center">
                        <div className="w-[90%] h-px bg-white my-4" />
                      </div>
                      {/* div 5 */}
                      <div className=" flex items-center justify-center">
                        <div className=" gap-3 pt-5 flex flex-row">
                          <label
                            htmlFor="logo"
                            className=" px-4 rounded-full  italic  border-2 border-newprimary focus:ring-2  focus:ring-newprimary bg-newprimary focus:bg-newprimary text-white  font-medium "
                          >
                            UPLOAD YOUR LOGO
                          </label>

                          <input
                            id="logo"
                            type="file"
                            className="mt-2  hidden w-full border rounded-md bg-white shadow-sm focus:ring-newprimary focus:newprimary"
                          />
                          <p className=" text-sm text-[#7A869F] italic flex items-center justify-center uppercase">
                            EPS, AI, or SVG preferred
                          </p>
                        </div>
                      </div>

                      {/* line 4 */}
                      <div className=" flex justify-center items-center">
                        <div className="w-[90%] h-px bg-white my-4" />
                      </div>

                      {/* div 6 */}
                      <div className="   pb-5">
                        {/* <label className="block font-medium"></label> */}
                        <textarea
                          className="mt-2 w-full border rounded-full italic font-bold  text-xs h-12 px-5 pt-3 shadow-sm focus:ring-newprimary focus:newprimary placeholder:text-[#989AA0]"
                          //   rows="4"
                          placeholder="SPECIAL INSTRUCTIONS "
                        ></textarea>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* step 2 */}
              <Accordion
                type="single"
                collapsible
                defaultValue="step-1"
                className="w-full"
              >
                <AccordionItem
                  value="step-2"
                  className="border rounded-3xl overflow-hidden mt-4 "
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline bg-newsecondary">
                    <h2 className="text-xl font-semibold text-slate-800">
                      STEP 2 - Contact Details
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-newsecondary pb-10">
                    <div className="px-10  bg-newsecondary">
                      {/* Your STEP 2 content (contact inputs) goes here */}
                      <div className=" space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <label className="text-[#4573A9]" htmlFor="Name">
                              Name
                            </label>
                            <input
                              type="text"
                              id="Name"
                              className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[#4573A9]" htmlFor="company">
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[#4573A9]" htmlFor="phone">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phone"
                              className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[#4573A9]" htmlFor="email">
                              Business Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>

            <div className="mt-8 text-center flex flex-col items-center">
              <button className=" text-sm text-white font-bold bg-newprimary px-10 py-2  rounded-full uppercase">
                Submit
              </button>
              {/* <p className="mt-4 text-start text-sm text-newprimary w-[50%]">
              WHAT NEXT? <br /> After finalizing your product selection, submit
              your quote request. We will create free mock-ups and provide a
              quotation.
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
