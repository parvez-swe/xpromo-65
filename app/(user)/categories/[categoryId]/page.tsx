"use client";

import { useEffect, useState } from "react";
import { FilterSidebar } from "../../../../components/products/FilterSideBar";

import {
  finalProducts,
  ranges,
  WithfactoryDirect,
  withoutFactoryDirect,
} from "../../../../data/products";
import PageWrapper from "../../../../components/PageWrapper";
import { BreadCrumbCustom } from "../../../../components/BreadCrumpCustom";
import { ProductCard } from "../../../../components/products/ProductCard";

export default function ProductsPage() {
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [selectedRange, setSelectedRange] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const filteredProducts = finalProducts.filter((product: any) => {
    if (
      selectedStyle &&
      product.subcategory?.toLowerCase() !== selectedStyle.toLowerCase()
    )
      return false;
    if (selectedRange && product.label !== selectedRange) return false;
    if (
      selectedCategory &&
      product.category?.toString().toLowerCase() !==
        selectedCategory?.toString().toLowerCase()
    )
      return false;
    return true;
  });

  const [mounted, setMounted] = useState(false);
  const [isFactoryDirect, setIsFactoryDirect] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedValue = localStorage.getItem("isFactoryDirect");
    if (storedValue !== null) setIsFactoryDirect(JSON.parse(storedValue));
  }, []);

  useEffect(() => {
    if (mounted)
      localStorage.setItem("isFactoryDirect", JSON.stringify(isFactoryDirect));
  }, [isFactoryDirect, mounted]);

  if (!mounted) return null;

  return (
    <PageWrapper className="max-w-7xl mx-auto">
      <BreadCrumbCustom
        currentPage="CAPS AND HEADWEAR"
        previousPages={[
          { name: "Home", url: "/" },
          { name: "SHOP BY CATEGORY", url: "/categories" },
        ]}
      />
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside>
            <FilterSidebar
              ranges={ranges}
              categories={
                isFactoryDirect ? WithfactoryDirect : withoutFactoryDirect
              }
              selectedStyle={selectedStyle}
              selectedRange={selectedRange}
              selectedCategory={selectedCategory}
              onStyleSelect={setSelectedStyle}
              onRangeSelect={setSelectedRange}
              onCategorySelect={setSelectedCategory}
            />
          </aside>
          <main className="md:col-span-3">
            {/* <div className="flex justify-center gap-4 mb-8">
              <button className="rounded-full border-2 px-5 py-1 font-bold text-sm  border-newprimary bg-newprimary text-white hover:bg-black/90">
                LOCAL STOCK
              </button>
              <button
                // variant="outline"
                className="rounded-full border-2   text-newprimary text-sm font-bold border-newprimary px-5 py-1"
                onClick={() => setIsFactoryDirect(!isFactoryDirect)}
              >
                FACTORY DIRECT
              </button>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
              {filteredProducts.map((product: any) => (
                <ProductCard key={product.sku} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </PageWrapper>
  );
}
