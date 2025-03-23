"use client";

import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";
import { CategoryCard } from "@/components/category/CategoryCard";
import PageWrapper from "@/components/PageWrapper";
import { WithfactoryDirect, withoutFactoryDirect } from "@/data/products";
import { Category } from "@/types/type";
import React, { useState, useEffect } from "react";

const CategoriesPage = () => {
  const [mounted, setMounted] = useState(false);
  const [isFactoryDirect, setIsFactoryDirect] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setMounted(true);

    // Retrieve `isFactoryDirect` from localStorage
    const storedValue = localStorage.getItem("isFactoryDirect");
    if (storedValue !== null) {
      setIsFactoryDirect(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("isFactoryDirect", JSON.stringify(isFactoryDirect));
    }

    setCategories(isFactoryDirect ? WithfactoryDirect : withoutFactoryDirect);
  }, [isFactoryDirect, mounted]);

  if (!mounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <PageWrapper>
      <div className="py-5  max-w-7xl mx-auto">
        <BreadCrumbCustom
          currentPage={"SHOP BY CATEGORY"}
          previousPages={[{ name: "Home", url: "/" }]}
        />
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 mt-16 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
            {categories.map((category: any) =>
              category.subCategory && Array.isArray(category.subCategory) ? (
                category.subCategory.map((subCat: any, index: number) => (
                  <CategoryCard
                    key={`subcategory-${subCat.categoryName}-${index}`} // Unique key for each subcategory
                    title={subCat.categoryName}
                    imageSrc={`/images/category.jpg`}
                    imageUrl={subCat.imageUrl}
                    href={subCat.url}
                  />
                ))
              ) : (
                <CategoryCard
                  key={`category-${category.categoryName}`} // Unique key for each main category
                  title={category.categoryName}
                  imageSrc={`/images/category.jpg`}
                  imageUrl={category.imageUrl}
                  href={category.url}
                />
              )
            )}
          </div>
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </PageWrapper>
  );
};

export default CategoriesPage;
