const Medication = require ('../models/Medication.js')

const createMedication = async (req,res) => {
    try{
        const medication = await Medication.create({...req.body, userId:req.userId});
        res.status(200).json(medication)

    }catch (error){
        res.status(500).json({message : error.message})
    }
}


module.exports = {createMedication}