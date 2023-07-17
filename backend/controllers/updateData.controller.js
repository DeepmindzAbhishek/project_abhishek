const router = require("express").Router();
const Data = require("../models/data");

router.post('/update', async (req, res) => {
    try {
      patientname = req.body.patientname;
        // Find the data entry by patient name
      const data = await Data.findOne({ patientname: patientName });
  
      if (!data) {
        throw new Error(`Data entry for patient '${patientName}' not found.`);
      }
  
      // Update the fields with new values
      data.patientname = newData.patientname || data.patientname;
      data.phonenumber = newData.phonenumber || data.phonenumber;
      data.doctorname = newData.doctorname || data.doctorname;
      data.gender = newData.gender || data.gender;
      data.Age = newData.Age || data.Age;
      data.time = newData.time || data.time;
      data.dob = newData.dob || data.dob;
      data.Status = newData.Status || data.Status;
  
      // Save the updated data
      await data.save();
  
      return { success: true, message: 'Data updated successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  })


module.exports = router