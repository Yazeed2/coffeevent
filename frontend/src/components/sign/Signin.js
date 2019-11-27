import React, { Component } from 'react'
import { Navbar, Button, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signin.css'
import { login }  from '../../functionAuth/functionAuth'

export default class Singin extends Component {
state ={}
onChange = (e)=>{
this.setState({
  [e.target.name] : e.target.value
})
}
// submit = (e)=>{
//   e.preventDefault()
// axios.post('http://localhost:5100/users/login' , this.state)
// .then(res =>
//    console.log(res))
// .catch(err => console.log(err))
// }

onSubmitHandelr =(e)=>{
  e.preventDefault()
  login(this.state).then(
  this.props.history.push('/home'))
}
    render() {
      console.log(this.state)
        return (
<div className = "formSing">
          {/* <Form onSubmit = {this.submit}> */}
          <Form onSubmit={this.onSubmitHandelr}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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