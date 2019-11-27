import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import './createAcc.css'

export default class createAcc extends Component {
  state ={}
  onChange = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
  }
  submit = (e)=>{
    e.preventDefault()
  axios.post('http://localhost:5100/users/register', this.state)
  .then(res =>
     console.log(res))
  .catch(err => console.log(err))
  }
      render() {
        console.log(this.state)
          return (
         
  <div className = "formregister">
            <Form onSubmit = {this.submit} action='http://locahost:5100/auth/register' method="post">
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" placeholder="First Name" name="name" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" placeholder="name"  name="name" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name="password" onChange={this.onChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          </div>
          )
      }
  }