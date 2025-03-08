const mongoose = require('mongoose');

// Define the schema for the appointment
const appointmentSchema = new mongoose.Schema({
  firstName: { type: String, lowercase: true },
  lastName: { type: String, lowercase: true },
  email: { type: String},
  phone: { type: String}, // Remove unique constraint here
  bloodGroup: { type: String},
  dob: { type: Date},
  gender: { type: String},
  appointmentDate: { type: Date},
  department: { type: String},
  doctor: { type: String},
  address: { type: String},
}, { timestamps: true });

// Create the model based on the schema
const AppoinmentModal = mongoose.model('Appointment', appointmentSchema);

module.exports = AppoinmentModal;
