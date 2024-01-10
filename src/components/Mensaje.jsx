import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Mensaje({mensaje, show, setShow}) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-dark text-white'>
            <p>{mensaje}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Mensaje;