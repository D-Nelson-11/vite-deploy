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
          setShow(true);
        }}>
        <img src={img1} alt="Imagen 1" />
        <div className="image-text">T</div>
      </div>

      <div
        className="image-container"
        onClick={() => {
          setMostrar2(true);
          setMostrar1(false);
          setMostrar3(false);
          setShow(true);
        }}>
        <img src={img2} alt="Imagen 2" />
        <div className="image-text">E</div>
      </div>

      <div
        className="image-container"
        onClick={() => {
          setMostrar3(true);
          setMostrar1(false);
          setMostrar2(false);
          setShow(true);
        }}>
        <img src={img3} alt="Imagen 3" />
        <div className="image-text">A</div>
      </div>

      <div 
        className="image-container"
        onClick={() => {
          setMostrar4(true);
          setMostrar5(false);
          setShowMensaje(true);
        }}>
        <img src={img4} alt="Imagen 4" />
        <div className="image-text">M</div>
      </div>

      <div 
        className="image-container"
        onClick={() => {
          setMostrar5(true);
          setMostrar4(false);
          setShowMensaje(true);
        }}>
        <img src={img5} alt="Imagen 5" />
        <div className="image-text">O</div>
      </div>

      {mostrar1 && (
        <Example
          show={show}
          setShow={setShow}
          pregunta="¿Como andaba vestido cuando nos dimos nuestro primer beso?"
          respuesta = "Otro (mandamelo por mensaje)"
          opcion1 = "Pantalón café y Camisa Gris"
          opcion2 = "Pantalón café y Camisa Blanca"
          correcto="A ver mandemelo por mensaje"
          error1="No cosi, no era gris"
          error2="No cosi, no era blanca"
        />
      )}
      {mostrar2 && (
        <Example
          show={show}
          setShow={setShow}
          pregunta="¿Cual es mi color y comida favorita?"
          respuesta = "Color: Verde, Comida: Palomitas"
          opcion1 = "Color: Anaranjado, Comida: Pizza"
          opcion2 = "Color: Verde, Comida: Hamburguesa"
          correcto="Eso cosi, te amo"
          error1="Creo que me gusta mas el verde"
          error2="La hamburguesa no es mi comida favorita"
        />
      )}
      {mostrar3 && (
        <Example 
          show={show} 
          setShow={setShow} 
          pregunta="¿Me Amas?, jajaja no sabía que preguntar cosi"
          respuesta = "Si"
          opcion1 = "No"
          opcion2 = "No se"
          correcto="Yo también te amo cosi y muchisimo más"
          error1="¿Cómo que no? jmmm"
          error2="Cómo que no sabes, si sabes"
          />
      )}
      {mostrar4 && (
        <Mensaje 
          show={showMensaje} 
          setShow={setShowMensaje} 
          mensaje="Esta no es pregunta cosi, solo quiero decirte que te amo mucho 🥺, y no seee porque me dió por hacer esto jajaja, pero quería demostrarte mi cariño a traves de algo que me gusta y sé hacer, sé que no es mucho pero espero que te guste, perdón porque ahorita que estamos en llamada no te estoy poniendo mucha atención jajaja, espero si podas ponerte tus uñas, no sé si voy a poder subir esto a tiempo para que lo veas, pero sea cuando sea que lo veas, sabé que te amo demasiado, aahh y cosi, he estado viendo lugares para salir, pero no encuentro nadaaa, solo uno de pizza, pero voy a seguir buscando y te mandaré fotos ❤️."
          />
      )}
      {mostrar5 && (
        <Mensaje 
          show={showMensaje} 
          setShow={setShowMensaje} 
          mensaje="Aquí ya no sabía que poner cosi, esque quiero que lo veas ya, pero esta página la podes revisar seguido, y yo iré agregando y cambiando cosas, bueno, me voy cosi, te amo mucho, ya viste que linda salis en las fotos que puseee, y una es viejita, de cuando casi nos veníamos conociendo"
          />
      )}
    </section>
  );
}

export default Imagen;
