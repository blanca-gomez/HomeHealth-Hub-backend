const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    notes: { type: String },
  });
  
const Appointment = mongoose.model('appoinment', appointmentSchema);
module.exports = Appointment;
