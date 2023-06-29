//Va a contener el ItemContaoner y el Favoritos Container
import React from 'react';
import  ItemListContainer  from '../ItemListContainer/ItemListContainer';
import FavoritosContainer from '../FavoritosContainer/FavoritosContainer';
import retratoPersona from '../../../public/assets/img/retrato-persona.png';
import '../Container/Container.css'

function CustomContainer() {
  return (
   
    <div className="imf" id="section6" >
      
        <img id="retrato"src={retratoPersona} alt="" className="responsive-image"/>
          <div className="itemCont">
                <ItemListContainer />
          </div>
          <div className="favoritosCont">
            <FavoritosContainer />
          </div>
    </div>
  );
}

export default CustomContainer;