const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Define the API endpoint to handle form submissions
router.post('/', appointmentController.createAppointment);

module.exports = router;
