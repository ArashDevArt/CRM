import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  const date = new Date()
  return (
    <section className='text-white bg-slate-900'>
    <header className='container flex items-center justify-between py-4'>
     <Link href="/"> <h1 className='text-4xl font-bold text-sky-400'>CRM</h1></Link>
      <Link className='px-5 py-1.5 bg-sky-400 hover:bg-sky-500 rounded-lg text-white' href="/add-customer">Add Customer +</Link>
    </header>
    <section className='container min-h-screen py-10'>
      {children}
    </section>
    <footer className='container flex items-center justify-center py-4 text-sky-400'>
      Next Js | CRM Project &copy; {date.getFullYear()}
    </footer>
    </section>
  )
}

export default Layout