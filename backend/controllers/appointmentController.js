const Appointment = require('../models/appointment');

exports.createAppointment = (req, res) => {
  const appointmentData = req.body;

  // Create a new appointment document
  const appointment = new Appointment(appointmentData);

  // Save the appointment to the database
  appointment.save()
    .then(() => {
      res.status(201).json({ message: 'Appointment saved successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save the appointment' });
    });
};
