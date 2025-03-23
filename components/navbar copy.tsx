"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
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

export function Navbar() {
  const [activeNav, setActiveNav] = useState("");
  const [activeSecNav, setActiveSecNav] = useState("");

  const dispatch = useDispatch();
  const { isFactoryDirect } = useSelector((state: RootState) => state.factory);

  const [mounted, setMounted] = useState(false);

  const resetNav = () => {
    setActiveNav("");
    setActiveSecNav("");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const category = isFactoryDirect ? WithfactoryDirect : withoutFactoryDirect;

  return (
    <nav className="fixed top-0 z-40 w-[100%] bg-white">
      {/* <div className="flex justify-between items-center px-4 h-20 "> */}
      <div className=" grid grid-cols-3 border-b   px-4 h-20  ">
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
          <div
            className={`${
              !isFactoryDirect ? " border-newprimary" : "border-newprimary"
            } hidden relative md:grid border-2 rounded-full py-1`}
          >
            <div className="hidden relative md:grid grid-cols-2 rounded-full ">
              <div
                className={`absolute z-40 ${
                  !isFactoryDirect
                    ? " border-newprimary bg-newprimary "
                    : "border-newprimary bg-newprimary"
                }  ${
                  isFactoryDirect ? "left-1" : "left-[calc(50%-2px)]"
                } w-[calc(50%-2px)] h-[100%]  bg-transparents border-2 rounded-full transition-all duration-300`}
              >
                <p className=" text-white text-sm text-center">
                  {isFactoryDirect ? "Factory Direct" : "Local Stock"}
                </p>
              </div>
              <button
                onClick={() => dispatch(setFactoryDirect(true))}
                className={` px-2 pl-3 rounded-full   relative text-nowrap ${
                  isFactoryDirect ? "text-newprimary" : " text-newprimary"
                }`}
              >
                Factory Direct
              </button>
              <button
                onClick={() => dispatch(setFactoryDirect(false))}
                className={` rounded-full text-nowrap  relative text-newprimary ${
                  !isFactoryDirect ? "" : " "
                }`}
              >
                Local Stock
              </button>
            </div>
          </div>

          <div className=" flex md:hidden ">
            <Sidebar categories={[withoutFactoryDirect, WithfactoryDirect]} />
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Link href="/">
            {!isFactoryDirect ? (
              <Image
                src="/image/logo.png"
                alt="XPromo Logo"
                width={140}
                height={140}
                className="object-contain mr-5"
              />
            ) : (
              <Image
                src="/image/logo.png"
                alt="XPromo Logo"
                width={140}
                height={140}
                className="object-contain mr-5"
              />
            )}
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
                className={`placeholder:text-xs  pl-8 w-full   max-w-lg rounded-full border-2 ${
                  !isFactoryDirect
                    ? // ? "text-white border-white placeholder-white outline-white focus:ring-white"
                      "text-newprimary border-newprimary placeholder-newprimary focus:ring-newprimary"
                    : "text-newprimary border-newprimary placeholder-newprimary focus:ring-newprimary"
                } focus:ring-2 focus:outline-none`}
              />
            </div>
          </div>

          <div className="mr-8">
            <a href="tel:+8801891802883">
              {/* <Phone className={` ${!isFactoryDirect ? " text-white " : ""}`} /> */}
              {isFactoryDirect ? (
                <Image
                  src="/nav/teliphone-black.png"
                  width={30}
                  height={30}
                  alt="phone"
                />
              ) : (
                <Image
                  src="/nav/teliphone-black.png"
                  width={30}
                  height={30}
                  alt="phone"
                />
              )}
            </a>
          </div>

          {/* Theme Toggle and Cart */}
          <CustomSidebar isFactoryDirect={isFactoryDirect} />
        </div>
      </div>

      <div onMouseLeave={resetNav}>
        <div className="bg-newprimary py-2 grid grid-cols-6 gap-2 px-2 ">
          {category.map((nav) => (
            <div
              key={nav.categoryName}
              // onClick={() => setActiveNav(nav.categoryName)}
              onMouseEnter={() => setActiveNav(nav.categoryName)}
              className={`${
                nav.categoryName === `Eco-Products`
                  ? "bg-green-800 text-white"
                  : "bg-white text-newprimary  "
              } flex items-center justify-between px-5 py-2 rounded-full cursor-pointer  `}
            >
              <p className=" text-sm  bg-transparent">{nav.categoryName}</p>{" "}
              {nav.subcategories.length > 0 && (
                <p
                  className={` rotate-90 ${
                    nav.categoryName === `Eco-Products` ? " hidden" : ""
                  }`}
                >
                  &gt;
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Category */}
        {activeNav && activeNav === "Shop By Category" && (
          <div className=" border-b border-newprimary py-3 ">
            {activeNav === "Shop By Category" &&
              category.map((nav, i) => (
                <div
                  className=" flex flex-row items-center  justify-around flex-nowrap "
                  key={i + 1}
                  // onClick={() => setActiveNav(nav.categoryName)}
                >
                  {nav.categoryName === "Shop By Category" &&
                    nav.subcategories.map((ns, i) => (
                      <div
                        key={i + "ns"}
                        className={`group ${
                          ns.categoryName === activeSecNav
                            ? " bg-newprimary "
                            : ""
                        } px-3 py-1 cursor-pointer   border border-newprimary  rounded-full`}
                        // onClick={() => setActiveSecNav(ns.categoryName)}
                        onMouseEnter={() => setActiveSecNav(ns.categoryName)}
                      >
                        {ns.imageUrl && (
                          <Image
                            className={`${
                              ns.categoryName === activeNav
                                ? " bg-newprimary "
                                : ""
                            }
                          ${
                            ns.categoryName === activeSecNav
                              ? "invert"
                              : "group-focus:invert"
                          } 
                          
                          h-10 w-10 `}
                            src={ns?.imageUrl}
                            width={100}
                            height={100}
                            alt="sub cate"
                          />
                        )}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}

        {/* sub category */}
        {activeSecNav && activeNav === "Shop By Category" && (
          <div className=" border-b border-newprimary py-3 pb-5 ">
            {activeNav === "Shop By Category" &&
              category.map((nav, i) => (
                <div
                  className=" flex flex-row items-center  justify-around flex-nowrap "
                  key={i + 1}
                  // onClick={() => setActiveNav(nav.categoryName)}
                >
                  {nav.categoryName === "Shop By Category" &&
                    nav.subcategories.map((ns, i) => (
                      <div
                        key={i + "nss"}
                        className=""
                        onClick={() => setActiveNav(ns.categoryName)}
                      >
                        {ns.categoryName === activeSecNav && (
                          <div>
                            <h1 className="text-center text-xl font-bold">
                              {ns.categoryName}
                            </h1>
                            <div className=" border border-newprimary rounded-3xl px-10 py-5">
                              {ns.subcategories.map((item, i) => (
                                <Link href={""} key={i + "item"}>
                                  <div className=" text-center">
                                    {item.categoryName}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}

        {/* OurBrands */}

        {activeNav && activeNav === "Our Brands" && (
          <div className=" border-b border-newprimary py-3 ">
            {activeNav === "Our Brands" &&
              category.map((nav: any, i) => (
                <div
                  className=" grid grid-cols-9 "
                  key={i + 1}
                  // onClick={() => setActiveNav(nav.categoryName)}
                >
                  {nav.categoryName === "Our Brands" &&
                    nav?.ourBrands.map((ns: any, i: any) => (
                      <div
                        key={i + "ns"}
                        className={`group  px-3 py-1 cursor-pointer   rounded-full flex items-center justify-center`}
                        onClick={() => setActiveSecNav("")}
                      >
                        {ns.icon && (
                          <Image
                            className={`group-focus:invert
                           `}
                            src={ns?.icon}
                            width={300}
                            height={300}
                            alt="sub cate"
                          />
                        )}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}

        {/* 24-Hour Turnaround */}

        {activeNav && activeNav === "24-Hour Turnaround" && (
          <div className=" border-b border-newprimary  py-3 ">
            {activeNav === "24-Hour Turnaround" &&
              category.map((nav: any, i) => (
                <div
                  className=" grid grid-cols-9 "
                  key={i + 1}
                  // onClick={() => setActiveNav(nav.categoryName)}
                >
                  {nav.categoryName === "24-Hour Turnaround" &&
                    nav?.subcategories.map((ns: any, i: any) => (
                      <div
                        key={i + "ns"}
                        className={`group  px-3 py-1 cursor-pointer   rounded-full flex items-center justify-center`}
                        onClick={() => setActiveSecNav("")}
                      >
                        <p>{ns.categoryName}</p>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}

        {/* Shop By Industry */}

        {activeNav && activeNav === "Shop By Industry" && (
          <div className=" border-b border-newprimary py-3 px-20 ">
            {activeNav === "Shop By Industry" &&
              category.map((nav: any, i) => (
                <div
                  className="  flex flex-row items-center justify-around "
                  key={i + 1}
                  // onClick={() => setActiveNav(nav.categoryName)}
                >
                  {nav.categoryName === "Shop By Industry" &&
                    nav?.subcategories.map((ns: any, i: any) => (
                      <Link
                        key={i + "nss"}
                        href={`/categories/"${ns.categoryName}`}
                      >
                        <div
                          className={`group  px-5 py-1 cursor-pointer    rounded-full flex items-center justify-center bg-black`}
                          onClick={() => setActiveSecNav("")}
                        >
                          {ns.imageUrl && (
                            <Image
                              className={` w-10  group-focus:invert
                           `}
                              src={ns?.imageUrl}
                              width={100}
                              height={100}
                              alt="sub cate"
                            />
                          )}
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
}
