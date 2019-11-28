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
import jwt from 'jsonwebtoken'
import Signin from './components/sign/Signin'
import Home from './components/Home'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Axios from 'axios';
import Profile from './components/profile/Pofile';


export default class App extends Component {

  state = {
    arry: [1, 2, 3, 4],
    showAll: true,
    token: null,
    hideThem: false,
    data: data1,
    isLogin : false 
  }
  componentDidMount() {

    console.log(localStorage.usertoken && localStorage.usertoken!='')

    if (localStorage.usertoken) {
console.log('i am idiot');

      var decoded = jwt.verify(localStorage.usertoken, 'secret')
      console.log(decoded);
      this.setState({ token: decoded })
    } else {

    }
  }
  logout = () => {
    localStorage.removeItem("usertoken");
    this.setState({token:null})
    
    this.isLogin()
    

  }
  isLogin =()=>{

    this.setState({
     isLogin : !this.state.isLogin ,
    })
  }
  render() {
    console.log("data 1 is :=")
    console.log(data1)
    return (
      <div>

        <BrowserRouter>
          <Navbar bg="light" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder' }} href="#"><img style={{ marginRight: '10px' }} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30" />COFFEVENT</Navbar.Brand>
            {this.state.isLogin || this.state.token !== null?


              <NavDropdown drop={'down'}
                title={
                  <FaUserCircle style={{ marginLeft: '7px', marginRight: '7px', color: "black" }} size={30} />
                }


                id="basic-nav-dropdown">
                <NavDropdown.Item href="/Profile">My Profile</NavDropdown.Item>  
                <NavDropdown.Item href="/ChangePass">Change Password</NavDropdown.Item>
                <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>


              </NavDropdown> :  <><Nav.Link href="/SignIn">login</Nav.Link><Nav.Link href="/Register">Register</Nav.Link></>}


            {/* <FaMapMarkedAlt size={30} style={{ marginLeft: '-5px', marginRight: '5px' }} /> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">


                <Nav.Link href="/AllEvents" >All Events</Nav.Link>
                <Nav.Link href="/CoffeeShops">Coffee Shops</Nav.Link>
                <Nav.Link href="/CreateEvent">Create Event</Nav.Link>

              </Nav>

            </Navbar.Collapse>
          </Navbar>


          <Switch>
            <Route path="/AllEvents" component={AllEvents} />
            <Route path="/CoffeeShops" component={Allshops} />
            <Route path="/CreateEvent" component={CreateEvent} />
            <Route path="/Register" component={createAcc}/>
            <Route path="/SignIn" render ={()=> <Signin isLogin={this.isLogin} />} />
            <Route path="/ChangePass" component={ChangePassword} />
            <Route path="/Profile" component={Profile} />

            <Route path="/" component={Home} />



          </Switch>
        </BrowserRouter>



        <Footer />
      </div>
    )
  }




}
