
import mongoose from "mongoose";
import { env } from "../config/env.js";

export const mongoDB = async () => {
    try {
      await mongoose.connect(env.MONGO_URL)
        console.log("DB connect!")
       
    } catch (error) {
        console.log(error)
    
    }
}