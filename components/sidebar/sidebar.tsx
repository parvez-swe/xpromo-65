"use client";

import { useEffect, useState } from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export const Sidebar = ({ categories }: any) => {
  const [open, setOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const [mounted, setMounted] = useState(false);
  const [isFactoryDirect, setIsFactoryDirect] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Toggles subcategory visibility
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const updated = new Set(prev);
      if (updated.has(categoryName)) {
        updated.delete(categoryName);
      } else {
        updated.add(categoryName);
      }
      return updated;
    });
  };

  useEffect(() => {
    setMounted(true);
    // Retrieve `isFactoryDirect` from localStorage
    const storedValue = localStorage.getItem("isFactoryDirect");
    if (storedValue !== null) {
      setIsFactoryDirect(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    // Store `isFactoryDirect` in localStorage whenever it changes
    if (mounted) {
      localStorage.setItem("isFactoryDirect", JSON.stringify(isFactoryDirect));
    }
  }, [isFactoryDirect, mounted]);

  useEffect(() => {
    if (isFactoryDirect) {
      setActiveCategory(categories[1]);
    } else {
      setActiveCategory(categories[0]);
    }
  }, [categories, isFactoryDirect]);

  if (!mounted) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>X Promo</SheetTitle>
        </SheetHeader>

        <ScrollArea className="mt-4 space-y-4">
          <div className="relative grid grid-cols-2 border rounded-full px-3 py-3 gap-2 mb-4">
            <div
              className={`absolute top-[5px] ${
                isFactoryDirect ? "left-[12px]" : "left-[calc(50%+4px)]"
              } w-[calc(50%-16px)] h-[80%] bg-transparent border rounded-full transition-all duration-300`}
            ></div>
            <button
              onClick={() => setIsFactoryDirect(true)}
              className={`rounded-full px-3 py-1 relative text-xs ${
                isFactoryDirect ? "text-black" : ""
              }`}
            >
              Factory Direct
            </button>
            <button
              onClick={() => setIsFactoryDirect(false)}
              className={`rounded-full px-3 py-1 text-xs relative ${
                !isFactoryDirect ? "text-black" : ""
              }`}
            >
              Local Stock
            </button>
          </div>

          {/* <div
            className={`${
              !isFactoryDirect ? " border-white" : "border-blackLogo"
            }  relative md:hidden grid border-2 rounded-full py-1`}
          >
            <div className=" relative md:hidden grid grid-cols-2 rounded-full ">
              <div
                className={`absolute ${
                  !isFactoryDirect ? " border-white" : "border-blackLogo"
                }  ${
                  isFactoryDirect ? "left-1" : "left-[calc(50%-2px)]"
                } w-[calc(50%-2px)] h-[100%]  bg-transparent border-2 rounded-full transition-all duration-300`}
              ></div>
              <button
                onClick={() => {
                  // setActiveButton('factory');
                  setIsFactoryDirect(true);
                }}
                className={` px-2 pl-3 rounded-full   relative text-nowrap ${
                  isFactoryDirect ? "text-blackLogo" : " text-blackLogo"
                }`}
              >
                Factory Direct
              </button>
              <button
                onClick={() => {
                  // setActiveButton('local');
                  setIsFactoryDirect(false);
                }}
                className={` rounded-full text-nowrap  relative text-white ${
                  !isFactoryDirect ? "" : " "
                }`}
              >
                Local Stock
              </button>
            </div>
          </div> */}
          {activeCategory.map((category: any) => {
            const isExpanded = expandedCategories.has(category.categoryName);

            return (
              <div key={category.categoryName}>
                <div
                  className="flex items-center justify-between cursor-pointer py-2"
                  onClick={() => toggleCategory(category.categoryName)}
                >
                  {category.subcategories &&
                  category?.subcategories.length > 0 ? (
                    <h3 className="font-medium text-lg">
                      {category.categoryName}
                    </h3>
                  ) : (
                    <Link
                      href={`/category/${category.categoryName
                        .split(" ")
                        .join("_")}`}
                      className="font-medium text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {category.categoryName}
                    </Link>
                  )}
                  {category.subcategories &&
                    category.subcategories.length > 0 &&
                    (isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    ))}
                </div>
                {isExpanded && category.subcategories && (
                  <ul className="ml-4 space-y-1">
                    {category.subcategories.map((subcategory: any) => (
                      <li
                        key={subcategory.categoryName}
                        className="text-sm text-muted-foreground"
                      >
                        <Link
                          href={`/category/${subcategory.categoryName
                            .split(" ")
                            .join("_")}`}
                          onClick={() => setOpen(false)}
                        >
                          {subcategory.categoryName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
