import React from 'react';
import whtsap from '../../../public/assets/img/wpp.png';
import '../whatsApp/whatsApp.css'

const WhatsApp = () => {

  return (
    <div className="whatsapp-container">
    <a href="https://wa.me/+541136806292?text=hola%20lu%20te%20consulto%20por%20este%20producto">
      <img id="hijo_uno" src={whtsap} alt="wpp" />
    </a>
  </div>
  );
};

export default WhatsApp;