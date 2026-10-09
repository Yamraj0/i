import Medicine from './medicine.model.js'

export const GetMedicine = async (req,res)=>{
    try{
        const MedData = await Medicine.find();

        if (MedData.length === 0){
            res.status(201).json({
                message: 'No Medicine Found',
                success: true
            })
        }

        res.status(201).json({
            message: 'Medicine Found ',
            data : MedData,
            success: true
        })

    } catch(err){
        res.status(501).json({
            succes: false,
            message : 'error while getting medicine'
        })
    }

}