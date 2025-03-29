import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomDatePicker } from "../CustomDatePicker";
import Image from "next/image";
const PForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [nodeadline, setNoDeadline] = useState(false);

  // Dynamically import Lottie with SSR disabled
  const [peopleCount, setPeopleCount] = useState(50);

  const resetDeadline = () => {
    setDate(undefined);
    setNoDeadline(false);
  };
  return (
    <div className=" w-full">
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
                        className="block font-bold text-[#3E6AA2]"
                      >
                        What&apos;s FOR?
                      </label>
                    </div>

                    <div className="relative w-[90%]">
                      <select
                        id="project-for"
                        className="mt-1 w-full h-9 py-1 rounded-3xl border-gray-300 shadow-sm 
                   focus:ring-newprimary focus:border-newprimary appearance-none pl-3 pr-10"
                      >
                        <option></option>
                        <option>Onboarding</option>
                        <option>Employee Gift</option>
                        <option>Office Merch</option>
                        <option>Event</option>
                        <option>Customers Gift</option>
                        <option>Other</option>
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
                        className="block font-bold text-[#3E6AA2]"
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
                        <option>$0 - $1,000</option>
                        <option>$1,000 - $5,000</option>

                        <option>$10,000 - $50,000</option>
                        <option>$50,000+</option>
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
                      <label className="block font-bold text-[#3E6AA2]">
                        What&apos;s the quantity needed?
                      </label>
                    </div>

                    <div className="flex flex-row items-center justify-center">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center mt-2 space-x-4 border-2 border-newprimary ml-10 rounded-full">
                          <button
                            type="button"
                            onClick={() =>
                              setPeopleCount((prev) => Math.max(0, prev - 1))
                            }
                            className="px-3 text-3xl rounded-md"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={peopleCount}
                            onChange={(e) =>
                              setPeopleCount(
                                Math.max(0, parseInt(e.target.value) || 0)
                              )
                            }
                            className="text-lg italic font-semibold w-16 bg-transparent text-center border-0 focus:outline-none"
                            min="0"
                          />
                          <style>
                            {`
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield; /* Firefox */
        }
        `}
                          </style>
                          <button
                            type="button"
                            onClick={() => setPeopleCount((prev) => prev + 1)}
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
                      <label className="text-[#3E6AA2]  font-bold">
                        What&apos;s your target date?
                      </label>
                    </div>

                    <div className="flex items-center space-x-4 mt-2">
                      {!date && (
                        <label className="flex items-center space-x-2">
                          <button
                            onClick={() => setNoDeadline(true)}
                            className={`px-4 italic  text-[10px] h-6   rounded-full  border-2 border-newprimary focus:ring-2  ring-newprimary  bg-newprimary  text-white  `}
                          >
                            No Deadline
                          </button>
                        </label>
                      )}
                      {!nodeadline && (
                        <div>
                          <CustomDatePicker date={date} setDate={setDate} />
                        </div>
                      )}

                      {nodeadline === true && (
                        <button className="" onClick={resetDeadline}>
                          <Image
                            className="h-4 w-auto"
                            src={"/cross.png"}
                            alt="cross"
                            height={100}
                            width={100}
                          />
                        </button>
                      )}
                      {date !== undefined && (
                        <button className="" onClick={resetDeadline}>
                          <Image
                            className="h-4 w-auto"
                            src={"/cross.png"}
                            alt="cross"
                            height={100}
                            width={100}
                          />
                        </button>
                      )}
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
                      className="mt-2 w-full border rounded-full italic   text-xs h-12 px-5 pt-3 shadow-sm focus:ring-newprimary focus:newprimary placeholder:text-[#989AA0]"
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
                        <label
                          className="text-[#4573A9] font-bold"
                          htmlFor="Name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="Name"
                          className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          className="text-[#4573A9] font-bold"
                          htmlFor="company"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          className="text-[#4573A9] font-bold"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="px-2 border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:newprimary"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          className="text-[#4573A9] font-bold"
                          htmlFor="email"
                        >
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
          <button className=" text-2xl text-newprimary border-2 border-newprimary  hover:text-white font-bold hover:bg-newprimary px-20 py-2  rounded-full uppercase">
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
  );
};

export default PForm;
