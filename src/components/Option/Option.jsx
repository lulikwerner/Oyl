import React, { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import '../Option/Option.css';

const Option = ({ opt }) => {
  const { id, img, title, description, foot } = opt;
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('DOMContentLoaded', handleScroll);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleScroll);
    };
  }, []);

  return (
    <div>
      <Card className="cardhoverP">
        <section ref={sectionRef} id={id}>
          <div className="containerP">
            <div className="imgColumn">
              <img src={img} alt="" className="imgCard" />
            </div>
            <div className="contentColumn">
              <h1>{title}</h1>
              <p
                className="prueba"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
              <div
                className="centered-text"
                dangerouslySetInnerHTML={{ __html: foot }}
              ></div>
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default Option;
