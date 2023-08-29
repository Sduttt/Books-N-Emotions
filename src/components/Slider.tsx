'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'Buy 1 Get 1 Free',
    image: '/slide1.jpg'
  },
  {
    id: 2,
    title: 'Get Your Surprise Box',
    image: '/slide2.jpg'
  },
  {
    id: 3,
    title: 'Bestsellers at minimum cost',
    image: '/slide3.jpg'
  }]

const Slider = () => {

  const [ slide, setSlide ] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setSlide(prev => prev === data.length - 1 ? 0 : prev+1)
    , 4000);

    return () => clearInterval(interval)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)]'>
      {/* TEXT SECTION */}
      <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col gap-8 items-center justify-center bg-fuchsia-50 font-bold p-4">
        <h1 className="text-red-500 text-4xl md:text-5xl text-center uppercase">{data[slide].title}</h1>
        <button className="text-white bg-red-500 text-xl md:text-2xl py-3 md:py-4 px-6 md:px-8">Order Now</button>
      </div>
      {/* IMAGE SECTION */}
      <div className="h-1/2 md:h-full w-full md:w-1/2 relative">
        <Image src={data[slide].image} alt="" fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider