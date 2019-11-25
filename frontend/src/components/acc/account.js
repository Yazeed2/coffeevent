import React, { Component } from 'react'
import { Navbar, Button, FormControl, Container, Row, Image, Col, Form } from 'react-bootstrap'
import Singin from '../sign/Signin'

export default class account extends Component {
    render() {
        return (
            <div>
               
               <br />
               <br />
               <br />
               <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
        
                <div>
  <Button variant="primary" size="lg" block>
    Sign In
  </Button>
  <Button variant="secondary" size="lg" block>
    Create an Account
  </Button>
  <br />
  <h3>Or</h3>
  <br />
  <Button variant="secondary" size="lg" block>
    Sign In Google Account
  </Button>
</div>


            </div>
        )
    }
}
