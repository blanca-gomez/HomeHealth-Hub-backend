const Appoinment = require ('../models/Appoinment.js');


const createAppoinment = async (req,res) => {
    const { appointmentDate, appointmentTime, notes} = req.body;
    const userId = req.userId; 

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const newAppoinment= new Appoinment({
            userId,
            appointmentDate,
            appointmentTime,
            notes
        });

        await newAppoinment.save();
        res.status(201).json(newAppoinment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al añadir una nueva cita' });
    }
}


const getAllAppoinment= async (req,res) => {
    try{
        const {userId} = req;
        const appoinments = await Appoinment.find({userId});
        res.status(200).json(appoinments)
    }catch(error){
        res.status(500).json({message: 'cannot get appoinments', error: error.message})
    }
}

const getAppoinmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req;
        const appoinment = await Appoinment.findOne({ _id: id, userId: userId });
        if (!appoinment) {
            return res.status(404).json({ message: "Appoinment not found" });
        }
        res.status(200).json(appoinment);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving appoinment', error: error.message });
    }
};

const updateAppoinment = async(req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const appoinment = await  Appoinment.findByIdAndUpdate({_id: id, userId: userId}, req.body, {new:true})
        if(!appoinment){
            return res.status(404).json({message : "appoinment not found"})
        }
        res.status(200).json({message: 'successfully updated appoinment', appoinment})
    }catch(error){
        res.status(500).json({message: 'Error updating appoinment', error: error.message})

    }
}

const deleteAppoinment = async (req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const appoinment= await Appoinment.findByIdAndDelete({_id: id, userId});
        if(!appoinment){
            return res.status(404).json({message : "appoinment not found"})
        }
        res.status(200).json({message : "Appoinment delete successfully"})

    }catch(error){
        res.status(500).json({message: 'Error deleting appoinment', error: error.message})

    }
}



module.exports = {createAppoinment, getAllAppoinment, getAppoinmentById, updateAppoinment, deleteAppoinment}