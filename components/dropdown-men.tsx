import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const DropdownMen = ({ categories, isFactoryDirect }: any) => {
  const [toggle, setToggle] = useState(false);

  // Recursive function to render categories and subcategories
  const renderCategories = (categories: any[]) => {
    return categories.map((category: any, index: number) => (
      // Use `id` if available, otherwise create a unique key with the index
      <DropdownMenuGroup
        key={category.id || `${category.categoryName}-${index}`}
      >
        {category.subcategories && category.subcategories.length > 0 ? (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="">
              <div className="flex items-center">
                {category.imageUrl && (
                  <Image
                    className="h-6 w-6 mr-2"
                    height={30}
                    width={30}
                    src={category.imageUrl}
                    alt={`${category.categoryName} icon`}
                  />
                )}
                <p className="text-nowrap">{category.categoryName}</p>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {renderCategories(category.subcategories)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        ) : (
          <DropdownMenuItem>
            <Link
              className="w-full"
              href={`/categories/${category.categoryName.split(" ").join("_")}`}
              onClick={() => setToggle(false)}
            >
              <div className="flex items-center">
                {category.imageUrl && (
                  <Image
                    className="h-6 w-6 mr-2"
                    height={30}
                    width={30}
                    src={category.imageUrl}
                    alt={`${category.categoryName} icon`}
                  />
                )}
                <p>{category.categoryName}</p>
              </div>
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuGroup>
    ));
  };

  return (
    <DropdownMenu open={toggle} onOpenChange={setToggle}>
      <div onClick={() => setToggle(!toggle)}>
        <DropdownMenuTrigger asChild>
          <div
            className={`${
              !isFactoryDirect ? " text-white" : "text-black"
            } cursor-pointer hover:text-white flex items-center justify-center h-12 w-12`}
          >
            {toggle ? (
              <p className="text-6xl">X</p>
            ) : (
              <MenuIcon className="h-12 w-12" />
            )}
          </div>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        {renderCategories(categories)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
