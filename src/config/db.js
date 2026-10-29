import env from './env.js';
import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

