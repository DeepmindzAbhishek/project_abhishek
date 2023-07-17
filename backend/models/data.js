const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



  const dataSchema = new mongoose.Schema({
    patientname: String,
    phonenumber: String,
    doctorname: String,
    gender: String,
    Age: String,
    time: String,
    dob:String,
    Status:String
  });
  
  const Data = mongoose.model('Data', dataSchema);

module.exports = Data


