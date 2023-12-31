import axios from "axios"
import moment from "moment"
import Link from "next/link"
import { useRouter } from "next/router"

const CustomerDetailsPage = ({id , name ,lastName,email,phone,address,postalCode,date,products,}) => {
    const router = useRouter()
    const deleteHandler = async () => {
     const res = await axios.delete(`/api/delete/${id}`)
     if(res.data.status === "success") router.push("/")
  
    }
  return (
<div className="flex flex-col gap-5">
<ul className="flex flex-col gap-4 list-disc list-inside marker:text-sky-400">
        <li>name : <span className="text-sky-400"> {name}</span></li>
        <li>last Name : <span className="text-sky-400"> {lastName}</span></li>
        <li>email : <span className="text-sky-400"> {email}</span></li>
        <li>phone : <span className="text-sky-400"> {phone}</span></li>
        <li>address : <span className="text-sky-400"> {address}</span></li>
        <li>postal Code : <span className="text-sky-400"> {postalCode}</span></li>
        <li>date : <span className="text-sky-400"> {date ? moment(date).utc().format("YYYY-MM-DD") : ""}</span></li>
    </ul>
    {products.length > 0 && <div className="flex flex-col gap-5">
        <h4 className="text-2xl font-medium text-sky-400">Products</h4>
        <div 
         className='flex justify-between w-full p-4 rounded-lg item-center bg-slate-700'>
          <p>name</p>
         <p>price</p>
         <p>qty</p></div>
         {products.map((item , index) => <div key={index}
         className='flex justify-between w-full p-4 rounded-lg item-center bg-slate-700'>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.qty}</p>
    </div>)}
    </div>}
    <div className="flex items-center justify-between">
      <button onClick={deleteHandler} type="button"  className="w-20 py-1 text-center duration-150 border-2 rounded text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white">Delete</button>
      <Link href={`/edit/${id}`}  className="w-20 py-1 text-center text-teal-500 duration-150 border-2 border-teal-500 rounded hover:bg-teal-500 hover:text-white">Edit</Link>
    </div>
</div>
  )
}

export default CustomerDetailsPage