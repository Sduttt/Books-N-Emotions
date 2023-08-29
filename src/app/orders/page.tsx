'use client'
import { Order } from '@/types/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { RiEdit2Fill } from 'react-icons/ri'
import { toast } from 'react-toastify'

const OrderPage = () => {

  const { data: session, status } = useSession()
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`).then(
        (res) => res.json(),
      ),
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string, status: string }) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status }),
      })
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },

  })

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status })
    toast.success('Order status updated')
  }




  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: '

  return (
    <div className='p-1 sm:p-4  text-sm sm:text-base min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-9rem)] md:min-h-[calc(100vh-11rem)]'>
      <table className="w-full border-separate sm:border-spacing-3">
        <thead>
          <tr>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((order: Order) => (
              <tr key={order.id} className= {order.status == 'Delivered' ? "bg-green-50" : "bg-red-50"} >
                <td className='p-4 hidden md:block'>{order.id}</td>
                <td className='px-1 sm:px-2'>{order.createdAt.toString().slice(0, 10)}</td>
                <td className='px-1 sm:px-2'>{order.price}</td>
                <td className='hidden md:block px-1 sm:px-2'>{order.products[0].title}</td>
                <td className='px-1 sm:px-2'>
                  {session?.user.isAdmin ?
                    <form action="" className=' flex items-center justify-between' onSubmit={(e) => HandleSubmit(e, order.id)}>
                      <input type="text" placeholder={`${order.status}`} className='bg-transparent placeholder:text-black mr-1 outline-none max-w-[70%]' />
                      <button className='bg-red-400 p-2 rounded-full' type='submit' ><RiEdit2Fill /></button>
                    </form>
                    : order.status
                  }
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrderPage