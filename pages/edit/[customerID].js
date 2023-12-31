import React, { useEffect, useState } from 'react'
import CustomerEditPage from '../../components/templates/CustomerEditPage'
import { useRouter } from 'next/router'
import axios from 'axios'

const Index = () => {
    const [data , setData] = useState(null)
    const router = useRouter()
    const {query : {customerID} , isReady} = router

    useEffect(()  => {
            if(isReady){
                 axios.get(`/api/customer/${customerID}`).then(res => setData(res.data.data))
            }
    } , [isReady])

   if(data) return <CustomerEditPage id={customerID} {...data} />
  
}

export default Index