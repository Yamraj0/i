import dotenv from 'dotenv';
dotenv.config();
import connectDB from './src/config/connectDB.js';




import app from './src/app.js';
const PORT = process.env.PORT;

connectDB();

app.listen(PORT,()=>{
    console.log(`server is running on the port: ${PORT}`);
    console.log(`http:localhost:${PORT}`);
});