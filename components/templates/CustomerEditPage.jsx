import React, { useState } from 'react'
import Form from '../modules/Form'
import { useRouter } from 'next/router'
import axios from 'axios'
import moment from 'moment'

const CustomerEditPage = ({id , name ,lastName,email,phone,address,postalCode,date,products,}) => {
    const [form , setForm] = useState({
        name ,
        lastName,
        email,
        phone : phone || "",
        address : address || "",
        postalCode : postalCode || "",
        date :  date ? moment(date).utc().format("YYYY-MM-DD") : "",
        products : products || "",
    })

    const router = useRouter()

    const cancelHandler = () => router.push("/")
    const saveHandler = async () => {
      const res =  await axios.patch(`/api/edit/${id}` , {data : form})
      if(res.data.status === "success") router.push("/")
    }
  return (
    <div className="flex flex-col gap-5">
    <h4 className="text-2xl font-medium text-sky-400">Edit Customer</h4>
    <Form form={form} setForm={setForm}/>
    <div className="flex items-center justify-between">
      <button onClick={cancelHandler} type="button"  className="w-20 py-1 text-center duration-150 border-2 rounded text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white">Cancel</button>
      <button onClick={saveHandler} type="button"  className="w-20 py-1 text-center text-teal-500 duration-150 border-2 border-teal-500 rounded hover:bg-teal-500 hover:text-white">edit</button>
    </div>
  </div>
  )
}

export default CustomerEditPage