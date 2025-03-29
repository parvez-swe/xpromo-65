"use client";

import { useState, useEffect } from "react";
import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  ranges,
  WithfactoryDirect,
  withoutFactoryDirect,
  xpromoProducts,
} from "@/data/products";
import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";
import { FilterSidebar } from "@/components/products/FilterSideBar";
import { ProductCard } from "@/components/products/ProductCard";
import PageWrapper from "@/components/PageWrapper";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ProductsPage() {
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [selectedRange, setSelectedRange] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [mounted, setMounted] = useState(false);

  // Get isFactoryDirect from Redux store instead of local state
  const { isFactoryDirect } = useSelector((state: RootState) => state.factory);

  // Apply filters
  const filteredProducts = xpromoProducts.filter((product: any) => {
    if (
      selectedStyle &&
      product.subcategory?.toLowerCase() !== selectedStyle.toLowerCase()
    )
      return false;
    if (selectedRange && product.range !== selectedRange) return false;
    if (
      selectedCategory &&
      product.category?.sub?.toString().toLowerCase() !==
        selectedCategory?.toString().toLowerCase()
    )
      return false;
    // Filter by factoryDirect property using Redux state
    // Filter by factoryDirect property using Redux state
    if (
      isFactoryDirect !== undefined &&
      product.factoryDirect !== isFactoryDirect
    )
      return false;

    return true;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="containers min-h-[90vh] mx-auto py-6 minh-">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Mobile filter button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Products</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle className="flex justify-between items-center">
                    <span>Filters</span>
                    <Button variant="ghost" size="sm" className="h-8">
                      Reset
                    </Button>
                  </SheetTitle>
                </SheetHeader>
                <div className="py-4">
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
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden md:block">
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

          {/* Product grid */}
          <main className="md:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg  text-newprimary font-bold">
                  No products found
                </h3>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your filters
                </p>
                <button
                  className=" border-newprimary font-bold border rounded-full px-5 py-1 mt-2 hover:bg-newprimary hover:text-white "
                  onClick={() => {
                    setSelectedStyle(undefined);
                    setSelectedRange(undefined);
                    setSelectedCategory(undefined);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </PageWrapper>
  );
}
