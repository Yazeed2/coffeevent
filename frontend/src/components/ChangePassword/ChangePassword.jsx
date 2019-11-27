import React, { Component } from 'react'
import { Navbar, Button, Row, Col, Form , Alert } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import SweetAlert from 'sweetalert2-react';

export default class Singin extends Component {

    render() { 
        return (
          <>
<div className = "formSing">
 

  
          <Form onSubmit = {this.submit} action={`http://localhost:5100/users/changepassword/${localStorage.usertoken}`} method="post">
    
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name="newPassword" onChange={this.onChange}/>
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        </>
        )
    }
}