import Link from 'next/link'
import {BsArrowRight} from 'react-icons/bs'
import { Menu } from '@/types/types'

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error(res.statusText)
  }

  return res.json()
}

const MenuPage = async () => {

  const menu: Menu = await getData()

  return (
    <div className='p-4 md:p-8 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-11rem)] flex gap-4  flex-col sm:flex-row items-center flex-wrap justify-center'>
      {menu.map(category =>(
        <Link href={`menu/${category.slug}`} key={category.id} className={`bg-gray-100 hover:bg-slate-200 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl w-[calc(100vw-5rem)] sm:w-[calc(50vw-2rem)] md:w-[calc(33.3vw-2rem)] h-52 p-8  `} >
          <h1 className="uppercase font-semibold text-xl mb-2">{category.title}</h1>
          <p className="text-sm mb-2">{category.description}</p>
          <button className="text-base font-medium flex italic items-center uppercase">Explore <span className="ml-2"><BsArrowRight /></span> </button>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage