const Medication = require ('../models/Medication.js')

const createMedication = async (req,res) => {
    const { medicationName, description, dosage, frequency, timeOfDay, day } = req.body;
    const userId = req.userId; 

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const newMedication = new Medication({
            userId,
            medicationName,
            description,
            dosage,
            frequency,
            timeOfDay,
            day,
        });

        await newMedication.save();
        res.status(201).json(newMedication);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al añadir medicamento' });
    }
}


const getAllMedication = async (req,res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const medications = await Medication.find({ userId})
        res.status(200).json(medications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener medicamentos' });
    }
}

const getMedicationById = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req;
        const medication = await Medication.findOne({ _id: id, userId: userId });
        if (!medication) {
            return res.status(404).json({ message: "Medication not found" });
        }
        res.status(200).json(medication);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving medication', error: error.message });
    }
};
   
const updateMedication = async(req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const medication = await  Medication.findByIdAndUpdate({_id: id, userId: userId}, req.body, {new:true})
        if(!medication){
            return res.status(404).json({message : "medication not found"})
        }
        res.status(200).json({message: 'successfully updated medication', medication })
    }catch(error){
        res.status(500).json({message: 'Error updating medication', error: error.message})

    }
}
   

const deleteMedication = async (req,res) => {
    try{
        const {id} = req.params;
        const {userId} = req;
        const medication= await Medication.findOneAndDelete({_id: id, userId});
        if(!medication){
            return res.status(404).json({message : "medication not found"})
        }
        res.status(200).json({message : "Medication delete successfully"})

    }catch(error){
        res.status(500).json({message: 'Error deleting medication', error: error.message})

    }
}


module.exports = {createMedication, getAllMedication, getMedicationById, updateMedication, deleteMedication}