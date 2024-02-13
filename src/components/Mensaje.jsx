import React, { useState } from 'react';
import '../styles/Modal.css'; // Importa el archivo CSS donde agregarás los estilos para el modal

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content">
            <h2>Contenido del Modal</h2>
            <p>Aquí puedes poner cualquier contenido que desees mostrar en el modal.</p>
            <button onClick={closeModal}>Cerrar Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

