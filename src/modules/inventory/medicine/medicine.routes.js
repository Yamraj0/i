import express from 'express';
import { GetMedicine } from './medicine.controllers.js';
const MedRoutes = express.Router();


// get all medicine 

MedRoutes.get('/',GetMedicine);




export default MedRoutes;