import React from 'react';
import Recurso17 from '../../../public/assets/img/Recurso 17.png';
import Recurso16 from '../../../public/assets/img/Recurso 16.png';
import Recurso15 from '../../../public/assets/img/Recurso 15.png';
import Recurso14 from '../../../public/assets/img/Recurso 14.png';
import flor from '../../../public/assets/img/Vector_Flor.png'
import smile from '../../../public/assets/img/smile.png'
import '../Favoritos/Favoritos.css';

function Favoritos() {
  const handleImageClick = (postUrl) => {
    window.open(postUrl, '_blank');
  };

  return (
    <div className="favoritos-container">
      <div className="favoritos-row">
        <img className= "flor" src={flor}/>
        <img src={Recurso17} alt="Favorite" className="favoritos-col with-shadow" onClick={() => handleImageClick('https://www.instagram.com/oyl_indumentariacanchera/')} />
        <img src={Recurso16} alt="Favorite" className="favoritos-col with-shadow" onClick={() => handleImageClick('https://www.instagram.com/oyl_indumentariacanchera/')} />
        <img src={Recurso15} alt="Favorite" className="favoritos-col with-shadow" onClick={() => handleImageClick('https://www.instagram.com/oyl_indumentariacanchera/')} />
        <img src={Recurso14} alt="Favorite" className="favoritos-col with-shadow" onClick={() => handleImageClick('https://www.instagram.com/oyl_indumentariacanchera/')} />

        <img className= "smile" src={smile}/>
      </div>
    </div>
  );
}

  


export default Favoritos;

