import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import "../styles/estilos.css";
import Example from "./Modal";
import Mensaje from "./Mensaje";
import { useState } from "react";

function Imagen() {
  const [mostrar1, setMostrar1] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);
  const [mostrar3, setMostrar3] = useState(false);
  const [mostrar4, setMostrar4] = useState(false);
  const [mostrar5, setMostrar5] = useState(false);
  const [show, setShow] = useState(false);
  const [showMensaje, setShowMensaje] = useState(false);
  return (
    <section>
      <div
        className="image-container"
        onClick={() => {
          setMostrar1(true);
          setMostrar2(false);
          setMostrar3(false);
          setMostrar4(false);
          setMostrar5(false);
          setShowMensaje(true);
        }}
      >
        <img src={img1} alt="Imagen 1" />
        <div className="image-text">T</div>
      </div>

      <div
        className="image-container"
        onClick={() => {
          setMostrar2(true);
          setMostrar1(false);
          setMostrar3(false);
          setMostrar4(false);
          setMostrar5(false);
          setShowMensaje(true);
        }}
      >
        <img src={img2} alt="Imagen 2" />
        <div className="image-text">E</div>
      </div>

      <div
        className="image-container"
        onClick={() => {
          setMostrar3(true);
          setMostrar1(false);
          setMostrar2(false);
          setMostrar4(false);
          setMostrar5(false);
          setShowMensaje(true);
        }}
      >
        <img src={img3} alt="Imagen 3" />
        <div className="image-text">A</div>
      </div>

      <div
        className="image-container"
        onClick={() => {
          setMostrar4(true);
          setMostrar5(false);
          setMostrar1(false);
          setMostrar2(false);
          setMostrar3(false);
          setShowMensaje(true);
        }}
      >
        <img src={img4} alt="Imagen 4" />
        <div className="image-text">M</div>
      </div>

      <div
        className="image-container"
        onClick={() => {
          setMostrar5(true);
          setMostrar4(false);
          setMostrar1(false);
          setMostrar2(false);
          setMostrar3(false);
          setShowMensaje(true);
        }}
      >
        <img src={img5} alt="Imagen 5" />
        <div className="image-text">O</div>
      </div>

      {mostrar1 && (
        <Mensaje
        show={showMensaje}
        setShow={setShowMensaje}
        mensaje="SOS DEMASIADO LINDA 🥺"
        />
      )}
      {mostrar2 && (
        <Mensaje
        show={showMensaje}
        setShow={setShowMensaje}
        mensaje="ESTOY MUY ORGULLOSO DE VOS 🥺"
        />
      )}
      {mostrar3 && (
        <Mensaje
        show={showMensaje}
        setShow={setShowMensaje}
        mensaje="TE AMO DEMASIADO ❤️"
        />
      )}
      {mostrar4 && (
        <Mensaje
          show={showMensaje}
          setShow={setShowMensaje}
          mensaje="OJALÁ ESTUVIERAS ACÁ CONMIGO 🥺"
        />
      )}
      {mostrar5 && (
        <Mensaje
          show={showMensaje}
          setShow={setShowMensaje}
          mensaje="REGALEME UN PICO 🥺"
        />
      )}
    </section>
  );
}

export default Imagen;
