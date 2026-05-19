import mongoose from "mongoose";
import { env } from "../app/config/env";

const mongo_uri = env.mongo_uri;

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cached;
}

async function connectMongoDB() { 
    if (!mongo_uri) {
        throw new Error("MongoDB URI is not defined in environment variables");
    }

    if (cached.conn) {
        console.log("Using cached MongoDB connection");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(mongo_uri, opts).then((mongoose) => {
            console.log("MongoDB connected successfully");
            return mongoose;
        }).catch((err) => {
            cached.promise = null;
            throw err;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectMongoDB;