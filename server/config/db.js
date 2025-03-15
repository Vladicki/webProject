import mongoose from 'mongoose';
// import dotenv from 'dotenv';


//this method connects to the project's MangoDB database.

const MONGO_URI = "mongodb+srv://desmondmonotone:WebTechnology@projectcluster.66fct.mongodb.net/test"
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};