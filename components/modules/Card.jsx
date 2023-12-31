import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Card = ({ _id , name,lastName,email}) => {
    const router = useRouter()
  const deleteHandler = async () => {
   const res = await axios.delete(`/api/delete/${_id}`)
   if(res.data.status === "success") router.reload()

  }
  return (
    <div className='flex justify-between w-full p-4 rounded-lg item-center bg-slate-700'>
        <div className='flex items-center gap-5 font-mono font-medium text-sky-400'>
            <p>{name} {lastName}</p>
            <p>{email}</p>
        </div>
        <div className='flex items-center gap-3'>
            <button onClick={deleteHandler} className='bg-rose-500 px-4 py-1.5 rounded-lg hover:bg-rose-600 transition-colors'>Delete</button>
            <Link href={`/edit/${_id}`} className='bg-amber-500 px-4 py-1.5 rounded-lg hover:bg-amber-600 transition-colors '>Edit</Link>
            <Link href={`/details/${_id}`} className='bg-teal-500 px-4 py-1.5 rounded-lg hover:bg-teal-600 transition-colors '>Details</Link>
        </div>
    </div>
  )
}

export default Card