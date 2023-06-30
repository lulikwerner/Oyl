import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assets/img/logo.png';
import '../Navbar/Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const scrollToSection = () => {
      const section = document.querySelector('#section5');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToSectionNav = () => {
      const section = document.querySelector('#section6');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    



  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <NavLink to="/" className="logo">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          <input type="checkbox" id="check" />
          <div className="menu">
            <li className="inicio">
              <NavLink to="/"  onClick={scrollToSectionNav } className="Option-Nav" activeclassName="active">
                Inicio
              </NavLink>
            </li>
            <div className="produNav">
              <a href="https://wa.me/+541136806292?text=hola%20lu%20te%20consulto%20por%20este%20producto" className="Option-Nav">
                Productos
              </a>
            </div>
            <li className="pregFrec">
              <NavLink
                to="/PreguntasFrecuentes"
                onClick={scrollToSection} 
                className="Option-Nav"
                activeclassName="active"
              >
                Preguntas Frecuentes
              </NavLink>
            </li>
            <label htmlFor="check" className="close-menu">
              <i className="fas fa-times"></i>
            </label>
          </div>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;






