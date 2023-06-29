import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/whatsApp/whatsApp';
import CustomContainer from './components/Container/Container';
import FAQS from './components/FAQS/FAQS';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsApp />
      <Routes>
        <Route path="/" element={<CustomContainer />} />
        <Route path="/PreguntasFrecuentes" element={<FAQS />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      <Footer className="footer-container" />
    </Router>
  );
}

export default App;


