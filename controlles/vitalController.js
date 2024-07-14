const Vital = require('../models/Vital');

const createVital = async (req,res) => {
    try{
        const {userId} = req;
        const vital = await Vital.create({...req.body, userId});
        res.status(201).json({ message: 'vital successfully added', vital })

    }catch (error){
        res.status(500).json({message: 'error when creating a new vital', error: error.message})
    }
}

const getAllVital = async (req,res) => {
    try{
        const {userId} = req.params;
        const vitals = await Vital.findById(userId);
        res.status(200).json(vitals)
    }catch(error){
        res.status(500).json({message: 'cannot get vitals', error: error.message})
    }
}

const updateVital = async(req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const vital = Vital.findByIdAndUpdate({_id: id, userId}, req.body, {new:true})
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
        const vital= await User.findByIdAndDelete({_id: id, userId});
        if(!vital){
            return res.status(404).json({message : "vital not found"})
        }
        res.status(200).json({message : "VItal delete successfully"})

    }catch(error){
        res.status(500).json({message: 'Error deleting vital', error: error.message})
    }
}


module.exports= {createVital, getAllVital, updateVital, deleteVital}