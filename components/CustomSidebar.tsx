"use client";

import React, { useState } from "react";
// import { ShoppingCart } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  decreaseQty,
  increaseQty,
  // decreaseQty,
  // increaseQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { CustomDatePicker } from "./CustomDatePicker";

const CustomSidebar = ({ isFactoryDirect }: any) => {
  const dispatch = useDispatch();
  const { cartItems, totalQty } = useSelector((state: RootState) => state.cart);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [nodeadline, setNoDeadline] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // console.log(cartItems);
  const [peopleCount, setPeopleCount] = useState(50);
  // console.log(cartItems?.quantity as number);

  const resetDeadline = () => {
    setDate(undefined);
    setNoDeadline(false);
  };
  return (
    <>
      {/* Trigger Button */}
      <div
        onClick={toggleSidebar}
        className="flex items-center gap-2  cursor-pointer relative mr-2"
      >
        {totalQty > 0 && (
          <p
            className={`w-fit  ${
              !isFactoryDirect
                ? "   text-white bg-newprimary "
                : "text-white bg-newprimary"
            }  rounded-full flex items-center justify-center absolute -top-2 -right-2    text-xs  min-h-5 min-w-5 text-center`}
          >
            {totalQty}
          </p>
        )}

        {/* <ShoppingCart
          className={` ${
            !isFactoryDirect ? " text-newprimary " : "text-newprimary"
          } h-7 w-7`}
        /> */}
        <Image
          src="/cart.png"
          className="h-10 w-auto"
          width={100}
          height={100}
          alt="phone"
        />
      </div>

      {/* Custom Sidebar */}
      <div
        className={`fixed w-[100vw] md:w-[50vw] top-0 right-0 h-[100vh]  border-l-2 border-graytext bg-white shadow-lg z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4  flex justify-between items-center">
          <h2 className="text-3xl font-semibold uppercase">Quote Summary</h2>
          <button className=" text-3xl" onClick={toggleSidebar}>
            <Image
              src={"/cross.png"}
              height={100}
              width={100}
              alt="X"
              className="h-5 w-auto"
            />
          </button>
        </div>

        {/* Sidebar Content */}
        {totalQty > 0 ? (
          <ScrollArea className="px-4 overflow-hidden overscroll-y-auto h-[90vh]">
            <div className="max-w-3xl mx-auto p-4 space-y-8">
              {/* <h1 className="text-3xl font-bold">QUOTE SUMMARY</h1> */}

              {/* Product Section */}

              {cartItems.map((citem) => (
                <Card key={citem.id} className="p-4 relative border-newprimary">
                  <button
                    onClick={() => dispatch(removeFromCart(citem.id))}
                    className=" absolute right-4 top-0"
                  >
                    <Image
                      src={"/cross.png"}
                      height={100}
                      width={100}
                      alt="X"
                      className="h-4 w-auto mt-1"
                    />
                  </button>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center pt-2">
                    <Image
                      src={citem?.images[0]}
                      alt="Trucker Cap"
                      width={200}
                      height={200}
                      className="object-contain h-20 w-20"
                    />
                    <div className="lg:space-y-4">
                      <h2 className="text-lg font-bold ">{citem.name}</h2>
                      <div className="flex items-center gap-4">
                        <span className="font-bold">QTY</span>

                        <div className="flex flex-row items-center justify-center">
                          <div className="flex-1 flex items-center justify-center">
                            <div className="flex items-center mt-2 space-x-4 border-2 border-newprimary ml-10 rounded-full">
                              <button
                                type="button"
                                onClick={() => dispatch(decreaseQty(citem.id))}
                                // onClick={() =>
                                //   setPeopleCount((prev) =>
                                //     Math.max(0, prev - 1)
                                //   )
                                // }
                                className="px-3 text-3xl rounded-md"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={citem.quantity}
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
                                onClick={() => dispatch(increaseQty(citem.id))}
                                className="px-3 text-3xl rounded-md"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-auto  flex-1">
                      <textarea
                        className=" border italic rounded-lg text-xs h-20 w-full p-2"
                        placeholder="SPECIAL INSTRUCTIONS"
                        name="special-instruction"
                        id="special-instruction"
                      />
                    </div>
                  </div>
                </Card>
              ))}

              {/* ///////////////// */}
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
                    <AccordionContent className="px-6  space-y-4">
                      <div className="bg-newsecondary  rounded-3xl ">
                        <div className="mb-4 flex items-center ">
                          <label className="block font-bold mr-5 text-[#3E6AA2]">
                            What&apos;s your taeget date?
                          </label>
                          <div className="flex items-center space-x-4 mt-2">
                            {/* <input
                              type="date"
                              className=" bg-newsecondary rounded-md shadow-sm focus:ring-newprimary focus:border-newprimary"
                            /> */}

                            {!date && (
                              <label className="flex items-center space-x-2">
                                <button
                                  onClick={() => setNoDeadline(true)}
                                  className={`px-4 italic  text-[10px] h-6   rounded-full  border-2 border-newprimary focus:ring-2   focus: ring-newprimary focus: bg-newprimary text-white  `}
                                >
                                  No Deadline
                                </button>
                              </label>
                            )}
                            {!nodeadline && (
                              <div>
                                <CustomDatePicker
                                  date={date}
                                  setDate={setDate}
                                />
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
                        {/* line 1 */}
                        <div className=" flex justify-center items-center">
                          <div className="w-[90%] h-px bg-white my-2" />
                        </div>
                        <div className="flex items-center justify-center">
                          <div className=" gap-3 pt-5 flex flex-row">
                            <label
                              htmlFor="logo"
                              className=" px-4  italic  rounded-full  border-2 border-newprimary cursor-pointer text-white bg-newprimary text focus:ring-2  focus:ring-newprimary focus:bg-newprimary focus:text-white  font-medium "
                            >
                              UPLOAD YOUR LOGO
                            </label>

                            <input
                              id="logo"
                              type="file"
                              className="mt-2 hidden w-full border rounded-md bg-white shadow-sm focus:ring-newprimary focus:border-newprimary"
                            />
                            <p className=" text-sm text-[#7A869F] italic flex items-center justify-center uppercase">
                              EPS, AI, or SVG preferred
                            </p>
                          </div>
                        </div>

                        <div className=" mt-3">
                          {/* <label className="block font-medium"></label> */}
                          <textarea
                            className="mt-2 w-full border rounded-full  h-16 px-5 pt-3 shadow-sm focus:ring-newprimary focus:border-newprimary italic"
                            //   rows="4"
                            placeholder="SPECIAL INSTRUCTIONS "
                          ></textarea>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>

              {/* Contact Details */}
              {/* ///////////////// */}
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
                        STEP 2 - CONTACT DETAILS
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent className="px-6  space-y-4">
                      <div className="">
                        <div className="grid bg-newsecondary px-4 rounded-3xl  grid-cols-2 gap-4">
                          <div className=" flex flex-col">
                            <label
                              className="text-[#3E6AA2] font-bold"
                              htmlFor="Name"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="Name"
                              // placeholder="Name"
                              className="border-gray-300 px-1 rounded-full py-1 shadow-sm focus:ring-newprimary focus:border-newprimary"
                            />
                          </div>

                          <div className=" flex flex-col">
                            <label
                              className="text-[#4573A9]  font-bold"
                              htmlFor="company"
                            >
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              // placeholder="Company"
                              className="border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:border-newprimary"
                            />
                          </div>

                          <div className=" flex flex-col text-[#3E6AA2]">
                            <label
                              className="text-[#4573A9]  font-bold"
                              htmlFor="phone"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phone"
                              // placeholder="Phone"
                              className="border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:border-newprimary"
                            />
                          </div>
                          <div className=" flex flex-col">
                            <label
                              className="text-[#4573A9]"
                              htmlFor="email text-[#3E6AA2]  font-bold"
                            >
                              Business Email
                            </label>
                            <input
                              type="email"
                              // placeholder="Business Email"
                              className="border-gray-300 rounded-full py-1 shadow-sm focus:ring-newprimary focus:border-newprimary"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>

              <div className="mt-8 text-center flex flex-col items-start">
                <div className=" flex items-center juc3 justify-center w-full">
                  <button
                    type="submit"
                    className="px-10 py-2 rounded-full bg-newprimary font-bold  text-white shadow-md hover:bg-newprimary"
                  >
                    SUBMIT
                  </button>
                </div>

                <p className="mt-4 text-start text-sm text-newprimary w-full">
                  <span className=" font-bold text-lg ">
                    What&apos;s next?{" "}
                  </span>{" "}
                  <br /> After finalizing your product selection, submit your
                  quote request. We will create free mock-ups and provide a
                  quotation.
                </p>
                <p className=" uppercase font-bold text-sm">
                  no payment is required at this stage
                </p>
              </div>
            </div>
          </ScrollArea>
        ) : (
          <div>
            <p className=" text-center pt-10">Cart Empty</p>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0   z-40" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default CustomSidebar;
