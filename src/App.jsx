import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { ImGift } from "react-icons/im";
import { Modal, Button, Container } from 'react-bootstrap';
import './styles/Index.css'

const ConfettiButton = () => {
  const [confettiActive, setConfettiActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setConfettiActive(true);
    setShowModal(true)
    setTimeout(() => {
      setConfettiActive(false);
      setShowModal(true)
    }, 100000); // Apaga el confeti y el mensaje después de 3 segundos
  };

  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor:"#6561ac" }} fluid>
    <ImGift onClick={handleClick} style={{ fontSize: "250px", color: "#E3CEF6", cursor: "pointer" }} className={confettiActive ? "" : "animated-icon"} />
    {confettiActive && <Confetti />}
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Cosiiiii</Modal.Title>
      </Modal.Header>
      <Modal.Body>¡Felicidades!, usted se ganó <strong>$50</strong> en <a href="https://us.shein.com/?url_from=usgooglebrandshein_srsa_Shein01_20210124&cid=370313608&setid=25652838688&adid=494298278806&pf=GOOGLE&gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZpB5wzSHDD7TaWvZfJiM5gEB8mA9LLUpEa2ETBK6z1sVM2bujP4bxxoCyfEQAvD_BwE"> Shein</a> por ser tan preciosa🥺</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Okis cosi
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>
  );
};


const App = () => {
  return (
      <ConfettiButton />
  );
};

export default App;