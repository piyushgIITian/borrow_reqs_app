import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { useAuth } from '../authcontext'
const navStyle={
  fontSize:"18px",fontWeight:"500",marginInline:"30px"
}
const NavigationBar=()=> {
  const {currentUser} = useAuth()
  return (
    <div>
        <Navbar bg="light" expand="lg">
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
        <Nav>
         
          <Nav.Link href="/" style={navStyle}>HOME</Nav.Link>
          {!currentUser && <Nav.Link href="/signin" style={navStyle}>SIGNIN</Nav.Link>}
          { currentUser && <div>
            <Nav.Link href="/dashboard" style={navStyle}>DASHBOARD</Nav.Link>

          </div>
          }
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}
export default NavigationBar