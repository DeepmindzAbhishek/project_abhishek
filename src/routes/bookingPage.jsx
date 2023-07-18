import React, { useState } from 'react';
import './Home.css';

const FirstPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  const handleClear = (setter) => {
    setter('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      phoneNumber,
      doctorName,
      gender,
      date,
      age,
      status,
      time,
    };

    setAppointments((prevAppointments) => [...prevAppointments, appointmentData]);

    // Reset the form after successful submission
    setName('');
    setPhoneNumber('');
    setDoctorName('');
    setGender('');
    setDate('');
    setAge('');
    setStatus('');
    setTime('');
  };

  const handleEdit = (index) => {
    const appointmentToEdit = appointments[index];
    setName(appointmentToEdit.name);
    setPhoneNumber(appointmentToEdit.phoneNumber);
    setDoctorName(appointmentToEdit.doctorName);
    setGender(appointmentToEdit.gender);
    setDate(appointmentToEdit.date);
    setAge(appointmentToEdit.age);
    setStatus(appointmentToEdit.status);
    setTime(appointmentToEdit.time);
  };

  const handleDelete = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
          <div className="column">
            <span className='firstsection'>

              <div className="question-box">
                <label className="question"></label>
                <input
                  className="input-field"
                  type="text"
                  pattern="[A-Za-z]+"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onClick={() => handleClear(setName)}
                  placeholder="patient name"
                />
              </div>

              <div className="question-box">
                <label className="question"></label>
                <input
                  className="input-field"
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onClick={() => handleClear(setPhoneNumber)}
                  placeholder="Phone number"
                />
              </div>

              <div className="question-box">
                <label className="question"></label>
                <input
                  className="input-field"
                  type="text"
                  pattern="[A-Za-z]+"
                  required
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  onClick={() => handleClear(setDoctorName)}
                  placeholder="Doctor name"
                />
              </div>
            </span>
            

              <div className="column">
              <span className='firstsection'>
                <div className="question-box">
                  <label className="question"></label>
                  <input
                    className="input-field"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onClick={() => handleClear(setDate)}
                    placeholder="Date of birth"
                  />
                </div>

                <div className="question-box">
                  <label className="question"></label>
                  <select
                    className="input-field"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    placeholder='Gender'
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="question-box">
                  <label className="question"></label>
                  <input
                    className="input-field"
                    type="number"
                    max="100"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    onClick={() => handleClear(setAge)}
                    placeholder="Age"
                  />
                </div>
                </span>
              </div>
            
            
              <div className='column'>
              <span className='firstsection'>
              <div className="question-box">
                <label className="question"></label>
                <select
                  className="input-field"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  placeholder='Status'
                >
                  <option value="">Select Status</option>
                  <option value="consult">Consult</option>
                  <option value="revisit">Revisit</option>
                </select>
              </div>

              <div className="question-box">
                <label className="question"></label>
                <input
                  className="input-field"
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  onClick={() => handleClear(setTime)}
                  placeholder="Time"
                />
              </div>
            </span>
            </div>
            <div className='firstsection'>
            <button className="input-field" type="submit" style={{backgroundColor: 'lightblue'}}>Book Appointment</button>
            </div>
          </div>
        </form>

      <div className="appointments-list">
        <h2>Appointments</h2>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <p>Name: {appointment.name}</p>
            <p>Phone Number: {appointment.phoneNumber}</p>
            <p>Doctor Name: Dr. {appointment.doctorName}</p>
            <p>Gender: {appointment.gender}</p>
            <p>Date: {appointment.date}</p>
            <p>Age: {appointment.age}</p>
            <p>Status: {appointment.status}</p>
            <p>Time: {appointment.time}</p>
            <button className="edit-button" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstPage;
