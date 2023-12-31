import mongoose from "mongoose";


const ConectDB = async () => {
    if(mongoose.connections[0].readyState) return
    await mongoose.connect("mongodb+srv://arashdevarts:1234@cluster.279tan7.mongodb.net/?retryWrites=true&w=majority")
    console.log("conect to DB");
}

export default ConectDB