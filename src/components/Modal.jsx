import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'sonner';
function Example({show, setShow, pregunta, respuesta, opcion1, opcion2, error1,error2, correcto}) {

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark text-white'>
          <Modal.Title>{pregunta}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white'>
            <Button className="w-100 mt-1" style={{backgroundColor:"#6E6E6E", border:"none"}} onClick={()=> toast.success(correcto)}>
                {respuesta}
            </Button>
            <Button className="w-100 mt-1" style={{backgroundColor:"#6E6E6E", border:"none"}} onClick={()=> toast.error(error1)}>
                {opcion1}
            </Button>
            <Button className="w-100 mt-1" style={{backgroundColor:"#6E6E6E", border:"none"}} onClick={()=> toast.error(error2)}>
                {opcion2}
            </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;