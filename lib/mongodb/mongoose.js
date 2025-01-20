import mongoose from "mongoose";

let initialized = false;

export const connectDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(initialized){
        console.log("Already Connected to the server")
        return
    };

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"blogapp",
        }),
        console.log("connected")
        initialized = true;
    } catch (error) {
        console.log("initialized error:", error);
    }
};