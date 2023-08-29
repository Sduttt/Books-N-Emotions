import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/types";

type props = {
  params: {
    category: string;
  };
};

const getData = async (category:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?cat=${category}`, {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error(res.statusText)
  }

  return res.json()
}


const CategoryPage = async ({params}: props) => {
  const products: Product = await getData(params.category)
  return (
    <div className="flex flex-wrap text-red-500 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-11rem)]">
      {products.map((product) => (
        <Link
          className="w-full p-2 sm:w-1/2 md:w-1/4 border-b-2 border-r-2 border-red-500 h-[50vh] hover:bg-fuchsia-50"
          href={`/product/${product.id}`}
          key={product.id}
        >
          {/* Image container */}
          <div className="relative h-[60%] w-[45%] mx-auto">
            <Image src={product.image} alt={product.title} fill />
          </div>
          <div className=" mt-2">
            <div className="flex justify-between">
              <h1 className="text-red-500 text-base font-bold capitalize w-[75%]">
              {product.title && product.title.length > 25
                ? `${product.title.substring(0, 25)}...`
                : product.title}
              </h1>
              <h1 className="text-red-500 text-lg italic font-bold capitalize">
                {product.price} Rs.
              </h1>
            </div>
            <div className="text-gray-500 text-xs mt-2">
              {" "}
              <b>Description:</b>{" "}
              {product.description && product.description.length > 90
                ? `${product.description.substring(0, 90)}...`
                : product.description}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className=" mt-3 bg-red-500 text-sm h-min text-white hover:bg-red-600 px-2 py-1 rounded-md">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
