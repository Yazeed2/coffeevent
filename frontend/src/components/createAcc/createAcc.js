import React, { Component } from 'react'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import { register }  from '../../functionAuth/functionAuth'
import './createAcc.css'

export default class createAcc extends Component {
  state ={
    err : ""
  }
  onChange = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
  }
  // submit = (e)=>{
  //   e.preventDefault()
  // axios.post('http://localhost:5100/users/register' , this.state)
  // .then(res =>
  //    console.log(res))
  // .catch(err => console.log(err))
  // }
  onSubmitHandelr = async (e)=>{
    e.preventDefault()
    let reg = await register(this.state)
    if(reg){
        this.props.history.push('/login')
    }else{
        this.setState({ err : "Register failed"})
    }
  }
      render() {
        console.log(this.state)
          return (
         
  <div className = "formregister">
            {/* <Form onSubmit = {this.submit}> */}
            <Form onSubmit={this.onSubmitHandelr}>
                {this.state.err}
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" placeholder="First Name" name="name" onChange={this.onChange}/>
          </Form.Group>

          {/* <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" placeholder="name"  name="name" onChange={this.onChange}/>
          </Form.Group> */}

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