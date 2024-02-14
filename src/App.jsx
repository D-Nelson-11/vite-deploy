import React from 'react'
import { Toaster } from 'sonner'
import './styles/estilos.css'
import { FaHeart } from "react-icons/fa";
import './styles/Modal.css'
export function App() {
  const [checked, setChecked] = React.useState(false);

  const closeModal = () => {
    setChecked(false);
  };

  const handleChange = () => {
        setChecked(true)
  };
  return (
    <div className='contenedor'>
        <div>
      {checked && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content bg-white w-100">
            <h2>TE AMO MUCHO</h2>
            <p>Hola cosi, perdón por no haberte podido dar algo físico incluso cuando aún estaba allá 😔, pero bueno, te hice esta "cartita" para decirte lo mucho que te amo y lo mucho que significas para mí, gracias por ser parte de mi vida, sos lo mejor que me ha pasado, contigo y de ti he aprendido muchas cosas, te admiro mucho por todo lo que haces, por luchar como luchas y sé que no ha sido fácil pero si de algo estoy convencido es que sos una niña muy fuerte y capaz de muchas cosas, estoy muy orgulloso de vos, incluso hasta me da orgullo decir que sos mi novia 😂🥺(para mi lo sos), espero pueda pasar el resto de mi vida junto a vos y algún diía tener una familia 🥺, y sino, sabe que siempre vas a ser el amor de mi vida, mi primera vez en muchas cosas si no es que en todo, siempre te voy a tener en mi corazoncito por toda nuestra historia, y por todo el amor y momentos que me has regalado, y para mis ojos siempre vas a ser la niña más preciosa del mundo 🥺.
             <br/> <br/> TE AMO, DE AQUI A LA LUNA A PASITOS DE TORTUGA 🥺❤️ </p>
            {/* <button onClick={closeModal}>Cerrar Modal</button> */}
          </div>
        </div>
      )}
    </div>
    <p><strong>Para: </strong>Mi niña preciosa 🥺</p>
    <p><strong>De: </strong>Cosi</p>
      <div className="carta">
        <div className='left'></div>
        <div className='right'></div>
        <FaHeart className='icono' onClick={()=>{
          handleChange()
        }}/>
      </div>
       <Toaster position='top-right' closeButton/>
    </div>
  )
}