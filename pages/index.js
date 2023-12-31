import ConectDB from '../utils/ConectDB'
import Customer from '../modules/Customer'
import HomePage from '../components/templates/HomePage'
const Home = ({customers}) => {
 return <HomePage customers={customers} />
}

export default Home

export const getServerSideProps = async () => {
    try{
    await ConectDB()
    const customers = await Customer.find()
    return{
        props : {
            customers : JSON.parse(JSON.stringify(customers))
        }
    }
    }catch(err){
        return{
            notFound : true
        }
    }
}