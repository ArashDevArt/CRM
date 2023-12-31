import Customer from "../../../modules/Customer";
import ConectDB from "../../../utils/ConectDB";

const handler = async (req, res) => {
  try {
    await ConectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in conecting to DB" });
      return;
  }

  if(req.method === "PATCH"){
    const id = req.query.customerID
    const data = req.body.data
     
    try{
       const customer = await Customer.findOne({_id : id})
       customer.name = data.name
       customer.lastName = data.lastName
       customer.email = data.email
       customer.phone = data.phone
       customer.address = data.address
       customer.postalCode = data.postalCode
       customer.date = data.date
       customer.products = data.products
       customer.updatedAt = Date.now()
       customer.save()
        res
          .status(201)
          .json({ status: "success", message: "Data edit" , data : customer });
          return;
    }catch{
        res
        .status(500)
        .json({ status: "failed", message: "Error in edit data from DB" });
        return
    }
  }
};

export default handler;
