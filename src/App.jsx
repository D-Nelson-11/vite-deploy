import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Toaster } from 'sonner'
import './styles/estilos.css'
import { FaHeart } from "react-icons/fa";
import {SimpleSlide} from './components/Mensaje'

export function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    if (checked){
        setChecked(false)
    }else{
        setChecked(true)
    }
  };
  return (
    <div className='contenedor'>
        <SimpleSlide mostrar={checked}/>
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