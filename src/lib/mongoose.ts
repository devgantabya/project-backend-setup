import mongoose from "mongoose";
import { env } from "../app/config/env";


export const connectMongoDB = async () => {
    try {
        await mongoose.connect(env.mongo_uri);
        console.log("MongoDB database connected successfully");
    } catch (err) {
        console.log(err);
    }
}