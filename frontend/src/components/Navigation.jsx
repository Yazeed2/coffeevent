import React from 'react'

import { Container, Navbar, NavDropdown, Nav, DropdownButton,MenuItem} from 'react-bootstrap'
import { FaMapMarkedAlt, FaUserCircle } from 'react-icons/fa'


const Navigation = () => {
    return (
        <div >
            <Navbar bg="light" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="/home"><img style={{marginRight:'10px'}} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
            
    
      {/* <span className="AccountLabel"> Account</span> */}

    
      <div id="accountLogo">
            <NavDropdown drop={'down'}  
                title={
                       <FaUserCircle style={{color:'black'}} size={30} />
                    } 
                id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Signin">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>  
            </NavDropdown>
    </div>

        {/* <FaMapMarkedAlt size={30} style={{marginLeft:'-5px', marginRight:'5px'}} /> */}
            
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/Events">Events</Nav.Link>
                        <Nav.Link href="/Coffees">Places</Nav.Link>
                    </Nav>

                </Navbar.Collapse> 
            </Navbar>


            

    </div>


    )
}

export default Navigation





