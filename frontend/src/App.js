import React, { Component } from 'react'
import './App.css';
import { Row, Button, Jumbotron, Container, Carousel } from 'react-bootstrap'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import EventPage from './components/EventPage/EventPage'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { FaMapMarkedAlt, FaUserCircle } from 'react-icons/fa'
import data1 from './Tempdata'
import Allshops from './components/AllShops/AllShops'
import CofShopPage from './components/CofShopPage/CofShopPage'
import AllEvents from './components/AllEvents/AllEvents'
import CreateEvent from './components/createEvent/CreateEvent'
import createAcc from './components/createAcc/createAcc'
import payment from './components/pay/payment'
import sadface from './components/smileAndsad/sadFace'
import smileface from './components/smileAndsad/smileFace'
import sadFace from './components/smileAndsad/sadFace';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'

import Signin from './components/sign/Signin'
import Home from './components/Home'


export default class App extends Component {

  state = {
    arry: [1, 2, 3, 4],
    showAll: true,

    hideThem: false,
    data: data1
  }

  render() {
    console.log("data 1 is :=")
    console.log(data1)
    return (
      <div>

        <BrowserRouter>
          <Navbar bg="light" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder' }} href="#"><img style={{ marginRight: '10px' }} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30" />COFFEVENT</Navbar.Brand>


            <span className="AccountLabel">Account</span>



            <NavDropdown drop={'down'}
              title={
                <FaUserCircle style={{ marginLeft: '7px', marginRight: '7px', color: "black" }} size={30} />
              }
              id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>


            <FaMapMarkedAlt size={30} style={{ marginLeft: '-5px', marginRight: '5px' }} />

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


<Switch>
<Route path="/about" component={AllEvents}/>
<Route path="/galery" component={Allshops}/>
<Route path="/Contact" component={CreateEvent}/>

 <Route path="/Signin" component={Signin}/>
<Route path="/createAcc" component={createAcc}/>
<Route path="/home" component={Home}/>
<Route path="/payment" component={payment}/>
<Route path='/CreateEvent' component={CreateEvent}/>
<Route path='/smileFace' component={smileface}/>
<Route path='/sadFace' component={sadFace}/>
  

{/* <Route path="/Contact" component={Register}/> */}
<Route path="/Contact" component={Signin}/>
<Route path="/home" component={Home}/>



          </Switch>
        </BrowserRouter>



        <Footer />
      </div>
    )
  }




}
