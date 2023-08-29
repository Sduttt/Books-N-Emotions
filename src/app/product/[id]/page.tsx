import Image from "next/image";
import Price from "@/components/Price";
import { Product } from "@/types/types";
import DeleteButton from "@/components/DeleteButton";



const getData = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error(res.statusText)
  }

  return res.json()
}



const SingleProduct = async ({params}: {params:{id:string}}) => {
  const product: Product = await getData(params.id)

  return (
    <div className="p-8">
      
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="px-12 text-2xl sm:text-3xl md:text-4xl font-bold text-red-500">
          {product.title}
        </h1>
        <DeleteButton  id={product.id} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="w-[calc(100vw - 4rem)] md:w-[47vw] py-12 md:pl-24 aspect-auto mx-auto md:relative">
          <Image
            src={product.image}
            className=""
            alt=""
            width={350}
            height={420}
          />
        </div>
        <div className="w-[calc(100vw - 4rem)] md:w-[47vw] md:py-12 md:pr-24 mx-auto">
          <p className="text-gray-700 py-1">
            <span className="font-semibold">Author: </span>
            {product.author}
          </p>
          <p className="text-gray-700 py-1">
            <span className="font-semibold">Publisher: </span>
            {product.publisher}
          </p>
          <p className="text-gray-700 py-1">
            <span className="font-semibold">Condition: </span>
            {product.condition}
          </p>
          <p className="text-gray-700 py-1">
            <span className="font-semibold">Category: </span>
            {product.category}
          </p>
          <p className="text-gray-700 py-1">
            <span className="font-semibold">Description: </span>
            {product.description}
          </p>
          <Price product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
