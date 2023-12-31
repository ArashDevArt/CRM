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

  if(req.method === "GET"){
    const id = req.query.customerID
    try{
        const customer = await Customer.findOne({_id : id})
        res
          .status(200)
          .json({ status: "success", data : customer});
          return;
    }catch{
        res
        .status(500)
        .json({ status: "failed", message: "Error in fetch data from DB" });
        return
    }
  }
};

export default handler;
