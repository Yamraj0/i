import mongoose from 'mongoose';
import env from './env.js';

const URI = env.MONGODB_URI;


const connectDB = async ()=>{
    try {
        const res = await mongoose.connect(URI)
        console.log('database is connect successfully');
       

} catch(err){
    console.log('error while connect the database',err)
}
};

export default connectDB;