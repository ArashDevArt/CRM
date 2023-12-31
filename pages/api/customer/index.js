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

  if(req.method === "POST"){
    const {data} = req.body

    if(!data.name || !data.lastName || !data.email ){
        res
        .status(400)
        .json({ status: "failed", message: "invalid data" });
        return;
    }
    try{
        const customer = await Customer.create(data);
        res
          .status(201)
          .json({ status: "success", message: "Data Created" , data : customer });
          return;
    }
    catch(err){
        res
          .status(500)
          .json({ status: "failed", message: "Error in sorting data in DB" });
          return;
    }
  }
};

export default handler;
