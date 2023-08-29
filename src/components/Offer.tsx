import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row p-4">
      {/* TEXT */}
        <div className="flex-1 text-center text-white flex flex-col justify-center items-center">
          <div className="uppercase text-5xl font-bold">magic box</div>
          <div className="text-xl my-2">Get a magic box with 5 classic books just in 499 Rs.</div>
          <button className="bg-red-500 font-bold px-6 py-3">Order Now</button>
          <CountDown />
        </div>
      {/* IMAGE */}
      <div className="flex-1 w-full relative p-4">
        <Image src="/offer.png" alt="" fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer