const router = require("express").Router()
const Data = require('../models/data')

router.post("/getdata", async (req, res) => {
    const { patientname, phonenumber, doctorName, dob, status, age, gender, time} = req.body;

  // Create a new data instance
  const newData = new Data({
    patientname, phonenumber, doctorName, dob, status, age, gender, time
  });

  // Save the data to the database
  newData.save()
    .then(() => {
      res.status(201).send('Data saved successfully');
    })
    .catch((error) => {
      res.status(500).send('Error saving data');
    });
});

module.exports = router