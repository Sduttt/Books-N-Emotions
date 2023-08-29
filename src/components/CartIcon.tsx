'use client';
import { useCartStore } from '@/utils/store';
import { useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa'

const CartIcon = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])
  
  const { products } = useCartStore()
  return (
    <div className='flex items-center'>
        <FaCartPlus className='mx-2' /> Cart({products.length})
          
    </div>
  )
}

export default CartIcon