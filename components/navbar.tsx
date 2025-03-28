"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Phone, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Sidebar } from "./sidebar/sidebar";
import Link from "next/link";
import CustomSidebar from "./CustomSidebar";
import { DropdownMen } from "./dropdown-men";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setFactoryDirect } from "@/redux/slices/factorySlice";
import { WithfactoryDirect, withoutFactoryDirect } from "@/data/products";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { join } from "path";

export function Navbar() {
  const dispatch = useDispatch();
  const { isFactoryDirect } = useSelector((state: RootState) => state.factory);

  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New scroll state
  const [categoryActive, setCategoryActive] = useState(false);
  const [industryActive, setIndustryActive] = useState(false);
  const [hourActive, setHourActive] = useState(false);
  const [ourBrandsActive, setOurBrandsActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const category = isFactoryDirect ? WithfactoryDirect : withoutFactoryDirect;

  return (
    <nav className="fixed top-0 z-40 w-[100%] bg-white">
      {/* <div className="flex justify-between items-center px-4 h-20 "> */}

      <div className="max-w-[1280px] mx-auto">
        <div className=" grid grid-cols-3 border-b   h-20  ">
          {/* nav menu */}
          <div className=" flex items-center  justify-centers gap-5">
            <div className=" hidden">
              <DropdownMen
                isFactoryDirect={isFactoryDirect}
                categories={
                  isFactoryDirect ? WithfactoryDirect : withoutFactoryDirect
                }
              />
            </div>
            {/* toggle ............................ */}

            <div className=" flex flow-row items-center ">
              <div
                className={`${
                  !isFactoryDirect ? " border-newprimary" : "border-newprimary"
                } hidden relative md:grid border-2 rounded-full py-1 h-8`}
              >
                <div className="hidden relative md:grid grid-cols-2 rounded-full ">
                  <div
                    className={`absolute z-40 ${
                      !isFactoryDirect
                        ? " border-newprimary bg-newprimary "
                        : "border-newprimary bg-newprimary"
                    }  ${
                      isFactoryDirect ? "left-1" : "left-[calc(50%-2px)]"
                    } w-[calc(50%-2px)] h-[100%]  bg-transparents border-2 rounded-full transition-all duration-300 flex items-center justify-center py-1`}
                  >
                    <p className=" text-white text-xs font-bold uppercase text-center flex items-center justify-center py-1">
                      {isFactoryDirect ? "Factory Direct" : "Local Stock"}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(setFactoryDirect(true))}
                    className={` text-xs uppercase font-bold px-2 pl-3 rounded-full   relative text-nowrap ${
                      isFactoryDirect ? "text-newprimary" : " text-newprimary"
                    }`}
                  >
                    Factory Direct
                  </button>
                  <button
                    onClick={() => dispatch(setFactoryDirect(false))}
                    className={` text-xs uppercase font-bold  rounded-full text-nowrap  relative text-newprimary ${
                      !isFactoryDirect ? "" : " "
                    }`}
                  >
                    Local Stock
                  </button>
                </div>
              </div>
              <div className="ml-2 transition-opacity duration-300">
                <Link href="#lvsf" className="">
                  <Image
                    src="/nav/interrogation.svg"
                    width={20}
                    height={20}
                    alt="question mark"
                  />
                </Link>
              </div>
            </div>

            <div className=" flex md:hidden ">
              <Sidebar categories={[withoutFactoryDirect, WithfactoryDirect]} />
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <Link href="/">
              <Image
                src="/xpromo.png"
                alt="XPromo Logo"
                width={500}
                height={500}
                className="object-contain mr-5 h-16 w-auto"
              />
            </Link>
          </div>

          <div className=" flex justify-center items-center ">
            {/* Search Box */}
            <div className="hidden md:block w-[30vw]  flex-1 mx-8 ">
              <div className="relative  ">
                <Search
                  className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${
                    !isFactoryDirect ? " text-newprimary " : " text-newprimary "
                  }`}
                />
                <Input
                  placeholder={`${
                    isFactoryDirect ? "Factory Direct Stock" : "Local Stock"
                  } `}
                  className={`placeholder:text-xs  pl-8 w-full h-8   max-w-lg rounded-full border-2 text-newprimary font-bold border-newprimary placeholder-newprimary focus:ring-newprimary ring-newprimary`}
                />
              </div>
            </div>

            <div className="mr-8">
              <a href="tel:+8801891802883">
                {/* {isFactoryDirect ? (
                  <Image
                    src="/nav/teliphone-black.png"
                    width={30}
                    height={30}
                    alt="phone"
                  />
                ) : (
                 
                )} */}{" "}
                <Image
                  src="/phone.png"
                  className="h-10 w-auto"
                  width={100}
                  height={100}
                  alt="phone"
                />
              </a>
            </div>

            {/* Theme Toggle and Cart */}
            <CustomSidebar isFactoryDirect={isFactoryDirect} />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-newprimary ">
          <div className="py-2 grid grid-cols-6 gap-2  max-w-[1280px]  mx-auto">
            {category.map((nav: any) => (
              <div key={nav.categoryName} className="relative">
                <>
                  {nav.categoryName === "Our Brands" ? (
                    <div
                      onMouseOver={() => setOurBrandsActive(true)}
                      onMouseLeave={() => setOurBrandsActive(false)}
                    >
                      <DropdownMenu
                        open={ourBrandsActive}
                        onOpenChange={setOurBrandsActive}
                      >
                        <DropdownMenuTrigger asChild>
                          <div className="bg-white text-newprimary flex  items-center justify-between px-3 py-2 rounded-full cursor-pointer">
                            <div className="text-sm font-bold bg-transparent flex justify-between items-center w-full">
                              <p>⭐</p>
                              <p className=" mr-2 uppercase ">
                                {nav.categoryName}
                              </p>
                              <ChevronDown className=" h-5 w-5" />
                            </div>
                            {/* <p className="rotate-90 text-sm font-bold ">&gt;</p> */}
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64 text-xs">
                          <DropdownMenuGroup>
                            {nav?.ourBrands?.map((brand: any) => (
                              <Link
                                href={`/categories/${brand.title
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`}
                                className=" w-full flex items-center justify-center"
                                key={brand.title}
                              >
                                <DropdownMenuItem
                                  key={brand.title}
                                  className="rounded-full h-10 hover:bg-[#B2B8BE] w-full hover:border-newprimary border-2 border-transparent group flex items-center gap-2  justify-center"
                                >
                                  {brand.icon && (
                                    <Image
                                      src={brand.icon}
                                      alt={brand.title}
                                      width={500}
                                      height={500}
                                      className=" h-7 w-auto"
                                    />
                                  )}
                                </DropdownMenuItem>{" "}
                              </Link>
                            ))}
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : nav.categoryName === "Shop By Industry" ? (
                    <div
                      onMouseOver={() => setIndustryActive(true)}
                      onMouseLeave={() => setIndustryActive(false)}
                    >
                      <DropdownMenu
                        open={industryActive}
                        onOpenChange={setIndustryActive}
                      >
                        <DropdownMenuTrigger asChild>
                          <div className="bg-white  text-newprimary flex items-center justify-between px-3 py-2 rounded-full cursor-pointer">
                            <div className="text-sm font-bold bg-transparent flex justify-end items-center w-full">
                              <p className="mr-2 uppercase text-newprimary">
                                {nav.categoryName}
                              </p>
                              <ChevronDown className="h-5 w-5" />
                            </div>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64 text-xs">
                          <DropdownMenuGroup>
                            <div className=" grid grid-cols-2 gap-5 py-5 ">
                              {nav?.subcategories?.map((industry: any) => (
                                <DropdownMenuItem
                                  key={industry.imageUrl}
                                  className=" hover:bg-transparent focus:bg-transparent"
                                >
                                  <Link
                                    href={`/categories/${industry.categoryName
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                    className="w-full flex items-center justify-center"
                                  >
                                    {industry.imageUrl && (
                                      <Image
                                        priority
                                        src={industry.imageUrl}
                                        alt={industry.categoryName}
                                        width={200}
                                        height={200}
                                        className="h-12 w-autho  object-contain"
                                      />
                                    )}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : nav.categoryName === "Shop By Category" ? (
                    <div
                      onMouseOver={() => setCategoryActive(true)}
                      onMouseLeave={() => setCategoryActive(false)}
                    >
                      <DropdownMenu
                        open={categoryActive}
                        onOpenChange={setCategoryActive}
                      >
                        <DropdownMenuTrigger asChild>
                          <div
                            className={`group/trigger flex text-sm font-bold items-center justify-between px-3 py-2 rounded-full cursor-pointer transition-all
                            ${
                              nav.categoryName === "Eco-Products"
                                ? "bg-green-800 text-white"
                                : ""
                            }
                            ${
                              nav.categoryName === "Shop By Category"
                                ? "border border-white  bg-newprimary text-white hover:bg-newprimary hover:text-white hover:border-white data-[state=open]:bg-newprimary data-[state=open]:text-white data-[state=open]:border-white"
                                : ""
                            }
                          `}
                          >
                            <div className="bg-transparent flex justify-between items-center w-full">
                              {nav.categoryName === "24 HOURS" && <p>⭐</p>}

                              <p className="uppercase ">{nav.categoryName}</p>

                              {nav.categoryName !== "Eco-Products" && (
                                <ChevronDown
                                  className={`h-5 w-5 ${
                                    nav.categoryName === "Shop By Category"
                                      ? "text-white transition-all group-hover/trigger:text-white group-data-[state=open]/trigger:text-white"
                                      : "text-white"
                                  }`}
                                />
                              )}
                            </div>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" w-72 rounded-xl">
                          <DropdownMenuGroup>
                            {nav.subcategories.map((subsubcat: any, i: any) => (
                              <React.Fragment key={i}>
                                {subsubcat.subcategories.length <= 0 ? (
                                  <Link
                                    href={`/categories/${subsubcat.categoryName
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                    className=" w-full  flexitems-centerjustify-center"
                                  >
                                    <DropdownMenuItem className=" w-full flexitems-centerustify-center rounded-full focus:bg-[#B2B8BE] hover:border-newprimary border-2 border-transparent group">
                                      {subsubcat.imageUrl && (
                                        <Image
                                          src={subsubcat.imageUrl}
                                          alt="image"
                                          width={100}
                                          height={100}
                                          className={`${
                                            nav.categoryName ===
                                            "Shop By Industry"
                                              ? " h-[10%] w-[10%] "
                                              : "group-hover:filter group-hover:brightness-0 group-hover:invert"
                                          }`}
                                        />
                                      )}
                                      <p className="text-[10px] font-bold">
                                        {subsubcat.categoryName}
                                      </p>
                                    </DropdownMenuItem>
                                  </Link>
                                ) : (
                                  <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="hover:bg-[#B2B8BE] pl-5 focus:bg-[#B2B8BE] rounded-full hover:border-newprimary border-2 border-transparent group relative flex items-center gap-2">
                                      {subsubcat.imageUrl && (
                                        <div className="p-2 rounded-full border border-newprimary group-hover:bg-newprimary group-data-[state=open]:bg-newprimary">
                                          <Image
                                            src={subsubcat.imageUrl}
                                            alt="image"
                                            width={20}
                                            height={20}
                                            className="h-3 w-3 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-data-[state=open]:invert group-data-[state=open]:brightness-0"
                                          />
                                        </div>
                                      )}
                                      <div className="flex flex-1 items-center gap-1 justify-between">
                                        <p className="text-xs font-bold">
                                          {subsubcat.categoryName}
                                        </p>
                                        <ChevronRight className="h-4 w-4  text-newprimary opacity-0 group-hover:opacity-100 transition-opacity duration-200    group-data-[state=open]:opacity-100" />
                                      </div>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                      <DropdownMenuSubContent className=" rounded-xl">
                                        {subsubcat.subcategories.map(
                                          (subsubsubcat: any, j: any) => (
                                            <Link
                                              key={j}
                                              href={`/categories/${subsubsubcat.categoryName
                                                .replace(/\s+/g, "-")
                                                .toLowerCase()}`}
                                              className=" font-bold"
                                            >
                                              {" "}
                                              <DropdownMenuItem className="text-[10px] px-3 mx-3 hover:bg-[#B2B8BE] hover:border-newprimary border-2 border-transparent rounded-full">
                                                {subsubsubcat.categoryName}
                                              </DropdownMenuItem>{" "}
                                            </Link>
                                          )
                                        )}
                                      </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                  </DropdownMenuSub>
                                )}
                              </React.Fragment>
                            ))}
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : nav.categoryName === "24 HOURS" ? (
                    <div
                      onMouseOver={() => setHourActive(true)}
                      onMouseLeave={() => setHourActive(false)}
                    >
                      <DropdownMenu
                        open={hourActive}
                        onOpenChange={setHourActive}
                      >
                        <DropdownMenuTrigger asChild>
                          <div
                            className={`group/trigger flex text-sm font-bold items-center justify-between px-2 py-2 rounded-full cursor-pointer transition-all
                          ${
                            nav.categoryName === "Eco-Products"
                              ? "bg-green-800 text-white"
                              : "bg-white text-newprimary"
                          }
                          ${
                            nav.categoryName === "Shop By Category"
                              ? "border border-newprimary hover:bg-newprimary hover:text-white hover:border-white data-[state=open]:bg-newprimary data-[state=open]:text-white data-[state=open]:border-white"
                              : "border border-transparent"
                          }`}
                          >
                            <div className="bg-transparent flex justify-between items-center w-full">
                              {nav.categoryName === "24 HOURS" && <p>⭐</p>}

                              <p className="uppercase">{nav.categoryName}</p>

                              {nav.categoryName !== "Eco-Products" && (
                                <ChevronDown
                                  className={`h-5 w-5 ${
                                    nav.categoryName === "Shop By Category"
                                      ? "text-newprimary transition-all group-hover/trigger:text-white group-data-[state=open]/trigger:text-white"
                                      : "text-newprimary"
                                  }`}
                                />
                              )}
                            </div>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64 text-xs">
                          <DropdownMenuGroup>
                            {nav.subcategories.map((subsubcat: any, i: any) => (
                              <React.Fragment key={i}>
                                {subsubcat.subcategories.length <= 0 ? (
                                  <Link
                                    href={`/categories/${subsubcat.categoryName
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                    className=" w-full  flexitems-centerjustify-center"
                                  >
                                    <DropdownMenuItem className=" w-full flexitems-centerustify-center rounded-full focus:bg-[#B2B8BE] hover:border-newprimary border-2 border-transparent group">
                                      {subsubcat.imageUrl && (
                                        <Image
                                          src={subsubcat.imageUrl}
                                          alt="image"
                                          width={100}
                                          height={100}
                                          className={`${
                                            nav.categoryName ===
                                            "Shop By Industry"
                                              ? " h-[10%] w-[10%] "
                                              : "group-hover:filter group-hover:brightness-0 group-hover:invert"
                                          }`}
                                        />
                                      )}
                                      <p className="text-[10px] font-bold">
                                        {subsubcat.categoryName}
                                      </p>
                                    </DropdownMenuItem>
                                  </Link>
                                ) : (
                                  <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="hover:bg-[#B2B8BE] focus:bg-[#B2B8BE] rounded-full hover:border-newprimary border-2 border-transparent group relative flex items-center gap-2">
                                      {subsubcat.imageUrl && (
                                        <div className="p-2 rounded-full border border-newprimary group-hover:bg-newprimary group-data-[state=open]:bg-newprimary">
                                          <Image
                                            src={subsubcat.imageUrl}
                                            alt="image"
                                            width={20}
                                            height={20}
                                            className="h-3 w-3 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-data-[state=open]:invert group-data-[state=open]:brightness-0"
                                          />
                                        </div>
                                      )}
                                      <div className="flex flex-1 items-center gap-1 justify-between">
                                        <p className="text-xs font-bold ">
                                          {subsubcat.categoryName}
                                        </p>
                                        <ChevronRight className="h-4 w-4  text-newprimary opacity-0 group-hover:opacity-100 transition-opacity duration-200    group-data-[state=open]:opacity-100" />
                                      </div>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                      <DropdownMenuSubContent>
                                        {subsubcat.subcategories.map(
                                          (subsubsubcat: any, j: any) => (
                                            <Link
                                              key={j}
                                              href={`/categories/${subsubsubcat.categoryName
                                                .replace(/\s+/g, "-")
                                                .toLowerCase()}`}
                                              className=" font-bold"
                                            >
                                              {" "}
                                              <DropdownMenuItem className="text-xs font-bold hover:bg-[#B2B8BE] hover:border-newprimary border-2 border-transparent rounded-full">
                                                {subsubsubcat.categoryName}
                                              </DropdownMenuItem>
                                            </Link>
                                          )
                                        )}
                                      </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                  </DropdownMenuSub>
                                )}
                              </React.Fragment>
                            ))}
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : nav.subcategories?.length > 0 ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div
                          className={`group/trigger flex text-sm font-bold items-center justify-between px-2 py-2 rounded-full cursor-pointer transition-all
                          ${
                            nav.categoryName === "Eco-Products"
                              ? "bg-green-800 text-white"
                              : "bg-white text-newprimary"
                          }
                          ${
                            nav.categoryName === "Shop By Category"
                              ? "border border-newprimary hover:bg-newprimary hover:text-white hover:border-white data-[state=open]:bg-newprimary data-[state=open]:text-white data-[state=open]:border-white"
                              : "border border-transparent"
                          }`}
                        >
                          <div className="bg-transparent flex justify-between items-center w-full">
                            {nav.categoryName === "24 HOURS" && <p>⭐</p>}

                            <p className="uppercase">{nav.categoryName}</p>

                            {nav.categoryName !== "Eco-Products" && (
                              <ChevronDown
                                className={`h-5 w-5 ${
                                  nav.categoryName === "Shop By Category"
                                    ? "text-newprimary transition-all group-hover/trigger:text-white group-data-[state=open]/trigger:text-white"
                                    : "text-newprimary"
                                }`}
                              />
                            )}
                          </div>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-64 text-xs">
                        <DropdownMenuGroup>
                          {nav.subcategories.map((subsubcat: any, i: any) => (
                            <React.Fragment key={i}>
                              {subsubcat.subcategories.length <= 0 ? (
                                <Link
                                  href={`/categories/${subsubcat.categoryName
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}`}
                                  className=" w-full  flexitems-centerjustify-center"
                                >
                                  <DropdownMenuItem className=" w-full flexitems-centerustify-center rounded-full focus:bg-[#B2B8BE] hover:border-newprimary border-2 border-transparent group">
                                    {subsubcat.imageUrl && (
                                      <Image
                                        src={subsubcat.imageUrl}
                                        alt="image"
                                        width={100}
                                        height={100}
                                        className={`${
                                          nav.categoryName ===
                                          "Shop By Industry"
                                            ? " h-[10%] w-[10%] "
                                            : "group-hover:filter group-hover:brightness-0 group-hover:invert"
                                        }`}
                                      />
                                    )}
                                    <p className="text-[10px] font-bold">
                                      {subsubcat.categoryName}
                                    </p>
                                  </DropdownMenuItem>
                                </Link>
                              ) : (
                                <DropdownMenuSub>
                                  <DropdownMenuSubTrigger className="hover:bg-[#B2B8BE] focus:bg-[#B2B8BE] rounded-full hover:border-newprimary border-2 border-transparent group relative flex items-center gap-2">
                                    {subsubcat.imageUrl && (
                                      <div className="p-2 rounded-full border border-newprimary group-hover:bg-newprimary group-data-[state=open]:bg-newprimary">
                                        <Image
                                          src={subsubcat.imageUrl}
                                          alt="image"
                                          width={20}
                                          height={20}
                                          className="h-3 w-3 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-data-[state=open]:invert group-data-[state=open]:brightness-0"
                                        />
                                      </div>
                                    )}
                                    <div className="flex flex-1 items-center gap-1 justify-between">
                                      <p className="text-xs font-bold">
                                        {subsubcat.categoryName}
                                      </p>
                                      <ChevronRight className="h-4 w-4  text-newprimary opacity-0 group-hover:opacity-100 transition-opacity duration-200    group-data-[state=open]:opacity-100" />
                                    </div>
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                      {subsubcat.subcategories.map(
                                        (subsubsubcat: any, j: any) => (
                                          <Link
                                            key={j}
                                            href={`/categories/${subsubsubcat.categoryName
                                              .replace(/\s+/g, "-")
                                              .toLowerCase()}`}
                                            className=" font-bold"
                                          >
                                            {" "}
                                            <DropdownMenuItem className="text-[10px] hover:bg-[#B2B8BE] hover:border-newprimary border-2 border-transparent rounded-full">
                                              {subsubsubcat.categoryName}
                                            </DropdownMenuItem>{" "}
                                          </Link>
                                        )
                                      )}
                                    </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                              )}
                            </React.Fragment>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <div
                      className={`${
                        nav.categoryName === "Eco-Products"
                          ? "bg-green-800 text-white"
                          : "bg-white text-newprimary"
                      } flex items-center  justify-center px-5 py-2 rounded-full cursor-pointer`}
                    >
                      <Link
                        href={`/categories/${nav.categoryName
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        <p className="text-sm text-center w-full font-bold bg-transparent uppercase">
                          {nav.categoryName}
                        </p>
                        {nav.subcategories?.length > 0 && (
                          <p className="rotate-90">&gt;</p>
                        )}
                      </Link>
                    </div>
                  )}
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
