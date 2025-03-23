"use client";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// This would typically come from your data source
const relatedProducts = [
  {
    id: 1,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Trucker Cap",
    image: "/placeholder.svg",
  },
];

export function RelatedProducts() {
  return (
    <div className="w-full px-4 py-6 bg-newsecondary rounded-xl">
      <h2 className="text-2xl pl-5 font-bold tracking-tight mb-">
        RELATED PRODUCTS
      </h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flexw-maxspace-x-4 p-4 grid grid-cols-4 gap-3 ">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="w-full shrink-0">
              <CardContent className="p-4 flex  justify-center items-center">
                <Image
                  src={"/images/product.jpg"}
                  alt={product.name}
                  className="aspect-square object-cover rounded-md"
                  width={200}
                  height={200}
                  priority={false}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-2 p-4">
                <h3 className="font-bold uppercase tracking-wide">
                  {product.name}
                </h3>
                <button
                  className="text-sm font-bold border-2 border-newprimary w-fit px-5 py-1 uppercase rounded-full"
                  onClick={() => console.log(`Added ${product.name} to quote`)}
                >
                  Add to Quote
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
