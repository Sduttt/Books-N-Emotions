'use client';
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CartPage = () => {

  const { products, totalPrice, totalQuantity, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();


  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  const handleCheckout = async () => {
    if (!session) {
      router.push('/login')
      toast.error('Please login to continue')
    }
    else {
      try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: 'Not Paid!',
            userEmail: session.user.email,
          }),

        })

        const data = await res.json()
        router.push(`/pay/${data.id}`)

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      {
        products.length === 0 ? <div className="flex items-center justify-center h-[calc(100vh-6rem)] md:h-[calc(100vh-11rem)] text-red-500 text-3xl font-bold">
          Your cart is empty!
        </div> :
          <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-11rem)] flex flex-col md:flex-row text-red-500">
            {/* PRODUCTS CONTAINER */}
            <div className="flex flex-col justify-center h-1/2 p-4 overflow-scroll py-5 md:w-2/3 md:h-full md:px-10">
              {/* Single Element */}
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between mb-2 mt-24 md:mt-0">
                  {product.image ? <Image src={product.image} alt="" width={100} height={100} /> :
                    <Image src='/menu/classic.jpeg' alt="" width={100} height={100} />
                  }
                  <div className="mx-1">
                    <h1 className="uppercase font-bold text-base ">
                      {product.title}
                    </h1>
                    <span className="text-xs">paperback</span>
                  </div>
                  <h2 className="font-bold text-base">Rs. {product.price}</h2>
                  <span className="cursor-pointer font-bolf text-xl" onClick={() => removeFromCart(product)}>x</span>
                </div>
              ))

              }

            </div>

            {/* TODO: calculate the delivery charge according to cart price and then calculate the TTAL price */}

            {/* PAYMENT CONTAINER */}
            <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center md:h-full md:w-1/3 md:px-10">
              <div className="flex justify-between">
                <span className="">Subtotal ({products.length} items): </span>
                <span className="">Rs. {totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="">Delivery: </span>
                <span className="text-green-500">FREE!</span>
              </div>
              <hr className="" />
              <div className="flex justify-between">
                <span className="">TOTAL: </span>
                <span className="">Rs. {totalPrice} </span>
              </div>
              <div className=" self-end">
                <button onClick={handleCheckout} className="px-4 py-2 rounded bg-red-500 text-white font-semibold">
                  Checkout
                </button>
              </div>
            </div>
          </div>

      }
    </>
  );
};

export default CartPage;
