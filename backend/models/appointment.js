const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  doctorName: String,
  gender: String,
  date: String,
  age: Number,
  status: String,
  time: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
