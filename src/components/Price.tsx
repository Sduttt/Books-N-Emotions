// "use client";
// import { useCartStore } from "@/utils/store";
// import React, {useState} from "react";

// type Props = {
//   price: number;
//   id: string;
//   options?: { title: string; addedPrice: number }[];
// };

// const Price = ({ price, id, options }: Props) => {

//   const [total, setTotal] = useState(price);
//   const [selected, setSelected] = useState(0);

//   const {addToCart} = useCartStore()

//   const handleCart = () => {
//   }
//   return (
//     <div className="">
//       <div className="text-red-500 text-xl font-semibold">Rs. {total}</div>
//       {/* OPTION CONTAINER */}
//       <div className="my-3 flex justify-center">
//         {options &&
//           options.map((option, index) => (
//             <button
//               key={option.title}
//               className="m-1 md:m-2 px-2 md:px-3 py-1 md:py-2 rounded-md font-medium text-red-500 border-2 border-red-500"
//               style={{
//                 background: selected === index ? "#EF4444" : "white",
//                 color: selected === index ? "white" : "#EF4444",
//               }}
//               onClick={() => {setSelected(index); setTotal(price + option.addedPrice)}}
//             >
//               {option.title}
//             </button>
//           ))}
//       </div>
//       {/* CART CONTAINER */}
//       <div className="flex items-center justify-center">
//         <button onClick={handleCart} className="px-3 py-2 mt-3 rounded-md bg-red-500 text-white font-medium hover:text-red-500 hover:bg-white border-2 border-red-500">
//           Add To Cart
//         </button>
//       </div>{" "}
//     </div>
//   );
// };

// export default Price;


"use client";
import { Product } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Price = ({ product }: { product: Product }) => {

  const [total, setTotal] = useState(product.price);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  const { addToCart } = useCartStore()

  const handleCart = () => {

    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
    })
    toast.success("Added to cart")

  }
  return (
    <div className="">
      <div className="text-red-500 text-xl font-semibold">Rs. {total}</div>
      {/* OPTION CONTAINER */}
      <div className="my-3 flex justify-center">
        {product.options &&
          product.options?.map((option, index) => (
            <button
              key={option.title}
              className="m-1 md:m-2 px-2 md:px-3 py-1 md:py-2 rounded-md font-medium text-red-500 border-2 border-red-500"
              style={{
                background: selected === index ? "#EF4444" : "white",
                color: selected === index ? "white" : "#EF4444",
              }}
              onClick={() => { setSelected(index); setTotal(product.price + option.addedPrice) }}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* CART CONTAINER */}
      <div className="flex items-center justify-center">
        <button onClick={handleCart} className="px-3 py-2 mt-3 rounded-md bg-red-500 text-white font-medium hover:text-red-500 hover:bg-white border-2 border-red-500">
          Add To Cart
        </button>
      </div>{" "}
    </div>
  );
};

export default Price;
