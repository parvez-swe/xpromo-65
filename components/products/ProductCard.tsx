import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

export function ProductCard({ product }: any) {
  const dispatch = useDispatch();

  return (
    <Card className="overflow-hidden border-newprimary text-newprimary">
      <CardContent className="p-0">
        <Link href={`/categories/categoryid/${product.id}`}>
          <div className="w-full h-28 relative flex items-center justify-center overflow-hidden mt-5">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={112} // 28 * 4 = 112px
              className=" object-contain w-full h-full"
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-center font-semibold text-newprimary">
              {product.name}
            </h3>
          </div>
        </Link>
        <div className="flex items-center justify-center pb-4">
          <button
            // variant="outline"
            className="] border-newprimary text-newprimary text-xs font-bold w-fit px-5 py-2 border-2 rounded-full hover:bg-gray-100"
            onClick={() => dispatch(addToCart(product))}
          >
            ADD TO QUOTE
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
