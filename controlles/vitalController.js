const Vital = require('../models/Vital');

const createVital = async (req,res) => {
    const { systolic,diastolic,heartReate,oxygenSaturation,temperature,glycemia,comments } = req.body;
    const userId = req.userId; 

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const newVital = new Vital({
            userId,
            systolic,
            diastolic,
            heartReate,
            oxygenSaturation,
            temperature,
            glycemia,
            comments
        });

        await newVital.save();
        res.status(201).json(newVital);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al añadir las constantes vitales' });
    }
}


const getAllVital = async (req,res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const vitals = await Vital.find({ userId})
        res.status(200).json(vitals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las constantes vitales' });
    }
}

const getVitalById = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req;
        const vital = await Vital.findOne({ _id: id, userId: userId });
        if (!vital) {
            return res.status(404).json({ message: "Vital not found" });
        }
        res.status(200).json(medication);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving vital', error: error.message });
    }
};



const updateVital = async(req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const vital = Vital.findByIdAndUpdate({_id: id, userId: userId}, req.body, {new:true})
        if(!vital){
            return res.status(404).json({message : "vital not found"})
        }
        res.status(200).json({message: 'successfully updated vital', vital })
    }catch(error){
        res.status(500).json({message: 'Error updating vital', error: error.message})

    }
}

const deleteVital = async (req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const vital= await Vital.findOneAndDelete({_id: id, userId});
        if(!vital){
            return res.status(404).json({message : "vital not found"})
        }
        res.status(200).json({message : "VItal delete successfully"})

    }catch(error){
        res.status(500).json({message: 'Error deleting vital', error: error.message})
    }
}



module.exports= {createVital, getVitalById, getAllVital, updateVital, deleteVital}