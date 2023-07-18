import React from 'react';

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#575e99',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        marginBottom: '20px',
      };
    
      const titleStyle = {
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
      };
  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>Welcome to Gradious Patient Appointment Booking</h1>
      {/* Navbar content */}
    </nav>
  );
};

export default Navbar;
