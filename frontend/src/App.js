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
<Navigation/>

<Switch>
<Route path="/Events" component={AllEvents}/>
<Route path="/Coffees" component={Allshops}/>
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
<Route path="/Home" component={Home}/>



          </Switch>
        </BrowserRouter>



        <Footer />
      </div>
    )
  }




}
