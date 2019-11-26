import React from 'react'

import { Container, Navbar, NavDropdown, Nav, DropdownButton,MenuItem} from 'react-bootstrap'
import { FaMapMarkedAlt, FaUserCircle } from 'react-icons/fa'


const Navigation = () => {
    return (
        <div >
            <Navbar bg="light" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img style={{marginRight:'10px'}} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
            
    
      <span className="AccountLabel">Account</span>

    
      
            <NavDropdown drop={'down'}  
                title={
                       <FaUserCircle style={{marginLeft:'7px', marginRight:'7px',color: "black"}} size={30} />
                    } 
                id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Signin">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>  
            </NavDropdown>
        

        <FaMapMarkedAlt size={30} style={{marginLeft:'-5px', marginRight:'5px'}} />
            
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <NavDropdown title="dropdown" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>

                </Navbar.Collapse> 
            </Navbar>


            

    </div>


    )
}

export default Navigation