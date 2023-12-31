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

  if(req.method === "DELETE"){
    const id = req.query.customerID
    try{
        await Customer.deleteOne({_id : id})
        res
          .status(201)
          .json({ status: "success", message: "Data Delete"});
          return;
    }catch{
        res
        .status(500)
        .json({ status: "failed", message: "Error in delete data in DB" });
        return
    }
  }
};

export default handler;
