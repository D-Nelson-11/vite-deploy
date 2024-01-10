import React from 'react'
import Imagen from './components/Imagen'
import { Container,Row } from 'react-bootstrap'
import { Toaster } from 'sonner'

export function App() {
  return (
    <Container style={{marginTop:"100px", maxWidth:"900px"}}>
       <Imagen/>
       <Toaster position='top-right' closeButton/>
    </Container>
  )
}