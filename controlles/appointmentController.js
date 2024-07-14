const Appoinment = require ('../models/Appoinment.js');

const createAppoinment = async (req,res) => {
    try{
        const {userId} = req;
        const appoinment = await Appoinment.create({...req.body, userId});
        res.status(201).json({ message: 'Appoinment successfully added', appoinment })

    }catch (error){
        res.status(500).json({message: 'error when creating a new appoinment', error: error.message})
    }
}

const getAllAppoinment= async (req,res) => {
    try{
        const {userId} = req.params;
        const appoinments = await Appoinment.findById(userId);
        res.status(200).json(appoinments)
    }catch(error){
        res.status(500).json({message: 'cannot get appoinments', error: error.message})
    }
}

const updateAppoinment = async(req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const appoinment = Appoinment.findByIdAndUpdate({_id: id, userId}, req.body, {new:true})
        if(!appoinment){
            return res.status(404).json({message : "appoinment not found"})
        }
        res.status(200).json({message: 'successfully updated appoinment', appoinment })
    }catch(error){
        res.status(500).json({message: 'Error updating appoinment', error: error.message})

    }
}

const deleteAppoinment = async (req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const appoinment= await User.findByIdAndDelete({_id: id, userId});
        if(!appoinment){
            return res.status(404).json({message : "appoinment not found"})
        }
        res.status(200).json({message : "Appoinment delete successfully"})

    }catch(error){
        res.status(500).json({message: 'Error deleting appoinment', error: error.message})

    }
}



module.exports = {createAppoinment, getAllAppoinment, updateAppoinment, deleteAppoinment}