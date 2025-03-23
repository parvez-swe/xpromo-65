import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";
import PageWrapper from "@/components/PageWrapper";
import { ProductDetails } from "@/components/products/productDetails/product-details";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import React from "react";

const page = () => {
  return (
    <PageWrapper className=" max-w-7xl mx-auto">
      <BreadCrumbCustom
        currentPage={"T-SHIRT"}
        previousPages={[
          { name: "HOME", url: "/" },
          { name: "SHOP BY CATEGORY", url: "/categories" },
          { name: "ClOTHING", url: "/categories/clothing" },
        ]}
      />
      <ProductDetails />
      <RelatedProducts />
    </PageWrapper>
  );
};

export default page;
