import React from 'react'
import './styles.scss'
import { Navbar } from 'react-bootstrap'

function NavbarTop() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>BHStore - Gerenciamento útil</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default NavbarTop
