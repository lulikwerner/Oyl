import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { RxCrossCircled } from 'react-icons/rx';
import '../Modal/Modal.css';
import GiftCardImage from '../../../public/assets/img/GiftCard.jpeg';

const ModalP = ({ showModal, handleCloseModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
       
          <RxCrossCircled className="close-icon" onClick={handleCloseModal} />


          <img src={GiftCardImage} alt="Modal Image" className="modal-image" />
 
      </Modal>
    </div>
  );
};

export default ModalP;


