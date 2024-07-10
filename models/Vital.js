const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vitalType: { type: String, enum: ['frecuenciaCardiaca', 'saturacionOxigeno', 'glucemia', 'temperatura'], required: true },
    systolic: { type: Number, required: true },  
    diastolic: { type: Number, required: true }, 
    comments: { type: String },
    timestamp: { type: Date, default: Date.now },
  });

const Vital = mongoose.model('vital', vitalSchema);
module.exports = Vital;
