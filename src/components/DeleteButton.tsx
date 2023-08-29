'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';


const DeleteButton = ({ id }: { id: string }) => {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') return;

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    return
  }

  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
      method: 'DELETE',
    })

    if (res.status == 200) {
      router.push('/menu')
      toast.success('Product deleted')
    }
    else{
      const data = await res.json()
      toast.error(data.message)
    }
  }


  return (
    <button onClick={handleDelete} className="text-white p-4 rounded-full bg-red-500 text-xl w-min absolute right-5">
      <FaTrashAlt />
    </button>
  )
}

export default DeleteButton