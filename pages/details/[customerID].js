import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import CustomerDetailsPage from '../../components/templates/CustomerDetailsPage'

const Index = () => {
    const [data , setData] = useState(null)
    const router = useRouter()
    const {query : {customerID} , isReady} = router

    useEffect(()  => {
            if(isReady){
                 axios.get(`/api/customer/${customerID}`).then(res => setData(res.data.data))
            }
    } , [isReady])

   if(data) return <CustomerDetailsPage {...data} id={customerID}/>
  
}

export default Index