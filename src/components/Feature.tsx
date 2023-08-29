
import Image from 'next/image'
import { Product } from '@/types/types'



const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}


const Feature = async () => {

  const products: Product[] = await getData()

  return (
    <div className=' overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM  */}
        {products.map((product) => (
          <div key={product.id} className="w-[100vw] sm:w-[50vw] md:w-[33vw] hover:bg-fuchsia-50 text-red-500 h-[70vh] flex flex-col items-center justify-around p-6">
            {/* IMAGE CONTAINER */}
            <div className="relative basis-2/3 w-full">
              <Image src={product.image} alt='' fill className='object-contain' />
            </div>
            {/* CONTENT CONTAINER */}
            <div className="basis-1/3 flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold uppercase text-center">{product.title}</h1>
              <p className="text-red-400">{product.author}</p>
              <span className="text-xl font-bold">Rs. {product.price}</span>
              <button className='text-white bg-red-500 rounded-md px-2 py-1 mt-1'>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feature