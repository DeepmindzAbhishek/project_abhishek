// import './App.css';
import React from 'react';

import {Routes, Route} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import F0 from "./routes/bookingPage";
import Layout from './layout/layout';
import FirstPage from "./routes/bookingPage";
import check from "./routes/check1";



function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path= "/" element={<FirstPage/>} />
        <Route path='/check' element={<check/>} />
      </Routes>
    </Layout>
  )
}

export default App;
