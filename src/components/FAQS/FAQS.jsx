import React, { useRef } from 'react';
import Pfrecuentes from '../../../public/assets/img/Pfrecuentes.png'
import FAQSListContainer from '../FAQSListContainer/FAQSListContainer'
import '../FAQS/FAQS.css';

const FAQS = () => {
  const sectionRef = useRef(null);
  return (
<>
 <div className="imf" id="section5" ref={sectionRef}>
 <img id="retrato" src={Pfrecuentes} alt="Your Image" className="responsive-image" />
 <FAQSListContainer/>
</div>
    </>
  );
};

export default FAQS;