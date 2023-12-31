import React, { useState } from "react";
import Form from "../modules/Form";
import axios from "axios";
import { useRouter } from "next/router";

const AddCustomerPage = () => {
  const router = useRouter()
  
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    })
    router.push("/")
  }
  const saveHandler = async () => {
    const res = await axios.post("/api/customer" , {data : form})
    if(res.data.status === "success") router.push("/")
    
  }
  
  return <div className="flex flex-col gap-5">
    <h4 className="text-2xl font-medium text-sky-400">Add New Customer</h4>
    <Form form={form} setForm={setForm}/>
    <div className="flex items-center justify-between">
      <button onClick={cancelHandler} type="button"  className="w-20 py-1 text-center duration-150 border-2 rounded text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white">Cancel</button>
      <button onClick={saveHandler} type="button"  className="w-20 py-1 text-center text-teal-500 duration-150 border-2 border-teal-500 rounded hover:bg-teal-500 hover:text-white">Save</button>
    </div>
  </div>;
};

export default AddCustomerPage;
