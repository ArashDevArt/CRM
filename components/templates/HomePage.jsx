import React from 'react'
import Card from '../modules/Card'

const HomePage = ({customers}) => {
  return (
    <div className='flex flex-col gap-4'>
        {customers.map(item => <Card key={item._id} {...item}/>)}
    </div>
  )
}

export default HomePage