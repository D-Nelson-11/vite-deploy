import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Toaster } from 'sonner'
import './styles/estilos.css'
import { FaHeart } from "react-icons/fa";

export function App() {
  return (
    <div className='contenedor'>
      <div className="carta">
        <div className='left'></div>
        <div className='right'></div>
        <FaHeart className='icono'/>
      </div>
       <Toaster position='top-right' closeButton/>
    </div>
  )
}