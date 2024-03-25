import mongoose from "mongoose";

export default function connectDb(){
    mongoose.connect(process.env.MongoDB_URL).then(() => {
        console.log("Connected to DB successfully");
    }).catch((err) => {
        console.log(`Error in connecting to DB ${err.message}`);
    })
}