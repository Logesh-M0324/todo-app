import mongoose from "mongoose";

const con = process.env.MONOGODB_URL || "mongodb://localhost:27017/ToDoDB" ;

const connectMongodb = async()=>{
    try {
        await mongoose.connect(con);
        console.log("database connection successfull");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectMongodb;