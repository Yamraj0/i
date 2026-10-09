import express from 'express';
import morgan from 'morgan';
import MedRoutes from './modules/inventory/medicine/medicine.routes.js';

const app = express();

app.use(express.json);
app.use(morgan('dev'));

app.use('/api/v1/inventory/medicine',MedRoutes)


app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'all is good',
        success: true
    })
})

export default app;