const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    systolic: { type: Number, required: true },  
    diastolic: { type: Number, required: true }, 
    heartReate: { type: Number, required: true },
    oxygenSaturation: { type: Number, required: true },
    temperature: { type: Number, required: true },
    glycemia: {type:Number}, 
    comments: { type: String },
    timestamp: { type: Date, default: Date.now },
  });

const Vital = mongoose.model('vital', vitalSchema);
module.exports = Vital;
