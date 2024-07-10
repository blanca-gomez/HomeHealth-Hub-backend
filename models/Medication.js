const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    medicationName: { type: String, required: true },
    description: { type: String },
    dosage: { type: String, required: true },
    frequency: { type: String, required: true },
    timeOfDay: { type: String, required: true },
    photo: { type: String }, 
    endDate: {type:Date, required: true }
});

const Medication = mongoose.model('medication', medicationSchema);
module.exports = Medication;
