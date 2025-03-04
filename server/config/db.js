import mongoose from 'mongoose';
import dotenv from 'dotenv';


//this method connects to the project's MangoDB database.
export const connectDB = async () => {
    dotenv.config();
    try {
        const uri = process.env.MONGODB_URI;
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error);
        process.exit(1) // failure
    }
}