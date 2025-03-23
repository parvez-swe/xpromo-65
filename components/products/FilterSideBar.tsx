import React from "react";
import Image from "next/image";

export function FilterSidebar({
  ranges,
  categories,
  selectedStyle,
  selectedRange,
  selectedCategory,
  onStyleSelect,
  onRangeSelect,
  onCategorySelect,
}: any) {
  return (
    <div className="space-y-4 p-6 bg-newsecondary rounded-lg">
      {/* Categories Section */}
      <div>
        <h2 className="font-bold mb-2 text-center mx-auto">
          SELECT YOUR CATEGORY
        </h2>
        <div className="pb-3 flex flex-col border-b-4 border-white mb-2">
          {categories.map((category: any) => (
            <div key={category.categoryName}>
              {category.categoryName === "Shop By Category" && (
                <div className="grid grid-cols-4 gap-3">
                  {category.subcategories?.map((subcat: any) => (
                    <button
                      key={subcat.categoryName}
                      className={`group border border-black flex items-center justify-center py-2 px-2 rounded-full ${
                        selectedCategory === subcat.categoryName
                          ? "bg-black"
                          : ""
                      }`}
                      onClick={() => onCategorySelect(subcat.categoryName)}
                    >
                      <Image
                        src={subcat.imageUrl}
                        height={30}
                        width={30}
                        alt={subcat.categoryName}
                        className={`${
                          selectedCategory === subcat.categoryName
                            ? "invert"
                            : ""
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ranges Section */}
      <div>
        <h2 className="font-bold mb-2 text-center mx-auto">
          SELECT YOUR RANGE
        </h2>
        <div className="pb-3 gap-1 grid grid-cols-3 border-b-4 border-white mb-2">
          {ranges.map((range: any) => (
            <button
              key={range.name}
              className={`group w-full py-1 flex flex-col items-center justify-center text-xs border-2 rounded-full ${
                selectedRange === range.name
                  ? "bg-black text-white"
                  : "border-black"
              }`}
              onClick={() => onRangeSelect(range.name)}
            >
              <Image
                src={range.image}
                height={30}
                width={30}
                alt={range.name}
                className={`h-5 w-5 lg:w-7 lg:h-7 ${
                  selectedRange === range.name ? "invert" : ""
                }`}
              />
              <p className="text-center text-[8px] font-bold">{range.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Styles Section */}
      {selectedCategory && (
        <div>
          <h2 className="font-bold mb-2 text-center mx-auto uppercase">
            {selectedCategory}
          </h2>
          <div className="space-y-2">
            {categories.map(
              (cat: any) =>
                cat.categoryName === "Shop By Category" &&
                cat.subcategories
                  ?.find((sub: any) => sub.categoryName === selectedCategory)
                  ?.subcategories?.map((style: any) => (
                    <button
                      key={style.categoryName}
                      className={`w-full  text-xs font-bold border-2 rounded-full justify-center ${
                        selectedStyle === style.categoryName
                          ? " text-white bg-newprimary border-newprimary"
                          : "border-newprimary text-newprimary"
                      }`}
                      onClick={() => onStyleSelect(style.categoryName)}
                    >
                      {style.categoryName}
                    </button>
                  ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
