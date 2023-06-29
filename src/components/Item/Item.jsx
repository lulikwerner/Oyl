import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import '../Item/Item.css';
import ModalP from '../Modal/Modal'

const Item = ({ prod }) => {
  const { id, img } = prod;
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    // Exclude the product with ID 8 from opening the WhatsApp link
    if (id !== 8) {
      const message = encodeURIComponent('hola lu te consulto por este producto');
      // Generate the WhatsApp URL with the pre-filled message and contact email
      const whatsappUrl = `https://wa.me/+541136806292?text=${message}`;
      // Open the WhatsApp URL in a new window or tab
      window.open(whatsappUrl, '_blank');
    }
    if (id === 8) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card className="cardhover">
        <img className="card-img" variant="top" src={img} onClick={handleImageClick} />
      </Card>
      {id === 8 && (
       
       <ModalP showModal={showModal} handleCloseModal={handleCloseModal} className="custom-moda"/>
      )}
    </div>
  );
};

export default Item;
