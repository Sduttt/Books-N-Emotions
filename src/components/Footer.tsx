import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex bg-fuchsia-50 flex-col md:flex-row justify-center items-center md:justify-between p-4 text-red-500 h-12 md:h-16'>
      <div className="">
        <Link href={"/"} className="uppercase text-lg md:text-xl font-semibold">
          Books & Emotions
        </Link>
      </div>
      <div className="text-xs md:text-sm">Copyright © 2023, All Rights Reserved</div>
    </div>
  )
}

export default Footer

// flex-row md:flex-col justify-center md:justify-between items-center p-4 text-red-500 h-12 md:h-16