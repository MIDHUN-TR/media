import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <Navbar className="" style={{ backgroundColor: "orange" }}>
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-photo-film"></i>
            {' '}
            <b>Media Player</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
