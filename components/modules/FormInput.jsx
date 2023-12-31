import React from 'react'

const FormInput = ({name , label , type , value , onChange}) => {
  return (
    <div className='flex flex-col w-full gap-2'>
        <label className=' text-slate-300' htmlFor={name}>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} className=" w-full focus:outline-none border-0 rounded  placeholder-slate-500 text-base px-3.5 py-2.5  bg-slate-700 ring-1 ring-inset ring-sky-400 focus:ring-2 focus:ring-primary-500 0 " />
    </div>
  )
}

export default FormInput