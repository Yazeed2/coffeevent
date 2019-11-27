import React from 'react'

import { Container, Navbar, NavDropdown, Nav, DropdownButton,MenuItem} from 'react-bootstrap'
import { FaMapMarkedAlt, FaUserCircle } from 'react-icons/fa'


const Navigation = () => {
    return (
        <div >
            <Navbar bg="light" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="/home"><img style={{marginRight:'10px'}} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
            
    
      {/* <span className="AccountLabel">Account</span> */}

    
      <div id="accountLogo">
            <NavDropdown drop={'down'}  
                title={
                       <FaUserCircle style={{color:'black'}} size={30} />
                    } 
                id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>  
            </NavDropdown>
    </div>

        {/* <FaMapMarkedAlt size={30} style={{marginLeft:'-5px', marginRight:'5px'}} /> */}
            
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





// <div class="App1">

// <br />

// <br /> 

//   <select  onChange="filter(this);">
//       <option value="" selected="selected" disabled="disabled">choose District</option>
//                  <option value="Al khalidiyyah"  >Al khalidiyyah</option>
//                  <option  value="Ar Rawdah">Ar Rawdah</option>
//                  <option  value="Ash Shati">Ash Shati</option>
//                  <option  value="Al Balad">Al Balad</option>
//                  <option  value="As Salamah">As Salamah</option>
//                  <option  value="Al Andalus">Al Andalus</option>
//                  <option  value="Al Zahra'a">Al Zahra'a</option>
//                  <option value="Tahliyah" >Tahliyah</option>
//              </select>
 

//              <br /> <select onChange="filter(this);">
//                <option  value="" selected="selected" disabled="disabled">I'm Interesting in..</option>
//                  <option  value="Art & Design">Art & Design</option>
//                  <option value="Music" >Music</option>
//                  <option  value="Book Reading">Book Reading</option>
//                  <option  value="Discussion">Discussion</option>
//                  <option  value="Games">Games</option>
//                  <option  value="Lifestyle">Lifestyle</option>
//                  <option  value="Education">Education</option>
//                  <option  value="Coffee Tasting">Coffee Tasting</option>
//                  <option value="Film & Media" >Film & Media</option>

//              </select>

//              <br /> <select onChange="filter(this);" >
//                   <option value="" selected="selected" disabled="disabled">I'm Available...</option>
//                  <option value="Any Date" >Any Date</option>
//                  <option  value="Today">Today</option>
//                  <option  value="Tomorrow">Tomorrow</option>
//                  <option value="This Weekend" >This Weekend</option>
//                  <option value="This Week" >This Week</option>
//                  <option value="Next Week" >Next Week</option>
//                  <option value="Pick a Date" >Pick a Date...</option>
//              </select>

//              <br />  <select  onChange="filter(this);">
//                   <option value="" selected="selected" disabled="disabled">I'm free From...</option>
//                  <option value="9AM">9:00 AM</option>
//                  <option value="10AM">10:00 AM</option>
//                  <option value="11AM">11:00 AM</option>
//                  <option value="12PM">12:00 PM</option>
//                  <option value="1PM">1:00 PM</option>
//                  <option value="2PM">2:00 PM</option>
//                  <option value="3PM">3:00 PM</option>
//                  <option value="4PM">4:00 PM</option>
//                  <option value="5PM">5:00 PM</option>
//                  <option value="6PM">6:00 PM</option>
//                  <option value="7PM">7:00 PM</option>
//                  <option value="8PM">8:00 PM</option>
//                  <option value="9PM">9:00 PM</option>
//                  <option value="10PM">10:00 PM</option>
//              </select>

//              <br />  <select  onChange="filter(this);">
//                   <option   value="" selected="selected" disabled="disabled">I'm free Untill...</option>
//                  <option value="9AM">9:00 AM</option>
//                  <option value="10AM">10:00 AM</option>
//                  <option value="11AM">11:00 AM</option>
//                  <option value="12PM">12:00 PM</option>
//                  <option value="1PM">1:00 PM</option>
//                  <option value="2PM">2:00 PM</option>
//                  <option value="3PM">3:00 PM</option>
//                  <option value="4PM">4:00 PM</option>
//                  <option value="5PM">5:00 PM</option>
//                  <option value="6PM">6:00 PM</option>
//                  <option value="7PM">7:00 PM</option>
//                  <option value="8PM">8:00 PM</option>
//                  <option value="9PM">9:00 PM</option>
//                  <option value="10PM">10:00 PM</option>
//              </select>

//              <br /> 
// <select  onChange="filter(this);">
//                  <option value="" selected="selected" disabled="disabled">I prefer...</option>
//                  <option value="Free">Free</option>
//                  <option value="Paid">Paid</option>
//              </select>

//              <br />                <br /> 

// <br />


//              <button class="buttonSearch">Search</button>


//          </div>





// .App1 {
//     text-align: center;
//   }
  
//   .buttonSearch {
//     background-color: rgb(242, 237, 88);
//     width: 20vh;
//     border: 0;
//     padding: 10px 0;
//     margin: 5px 0;
//     text-align: center;
//     color: rgb(0, 0, 0);
//     border-radius: 12px;
//   }


//   function filter(sel) {
//     var xe = sel.options[sel.selectedIndex].text
//       console.log(xe)
//     }