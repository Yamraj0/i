import mongoose from 'mongoose';

const medSchema = new mongoose.Schema({
    BrandName: {
        type: String,
        required : true
    },
    GenericName: {
        type: String,
        lowercase: true
    },
    Strength: {
        type: String,
        required : true
    },
    ExpDate: {
        type : Date,
        required : true
    },
    Mfg: {
        type: String
    },
    Quantity : {
        type: String,
        Required : true
    },
    Location: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});


export default mongoose.model('Medicine',medSchema);