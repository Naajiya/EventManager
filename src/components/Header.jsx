import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';





function Header() {
  return (
    <>
     <Navbar className="bg-body-tertiary w-100" style={{position:'sticky'}}>
      <Container>
        <Navbar.Brand href="#home">Eventfy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header