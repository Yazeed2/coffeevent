import React, { Component } from 'react'
import { Navbar, Button, Row, Col, Form , Alert } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signin.css'
import SweetAlert from 'sweetalert2-react';

export default class Singin extends Component {
state ={
  wrong : false
}
onChange = (e)=>{
this.setState({
  [e.target.name] : e.target.value
})
}
submit = (e)=>{
  e.preventDefault()
axios.post('http://localhost:5100/users/login' , this.state)
.then(res =>{
  if (res.data.msg == "Password is not currect"){

this.setState({wrong : true})
  }else if (res.data.msg == "email is not found"){

    this.setState({wrong : true})
  }else {

localStorage.setItem('usertoken' , res.data)
    
    
    
    this.setState({ show: true })
  }

})
  
  
.catch(err => console.log(err))
}
    render() {
      console.log(this.state)
        return (
          <>{ this.state.wrong &&
            ['danger'].map((variant, idx) => (
             <Alert key={idx} variant={variant}>
              your password or email is wrong 
            </Alert>))}
<div className = "formSing">
 
<SweetAlert
        show={this.state.show}
        title="Demo"
        text="nice you have been login "
        onConfirm={() => {
          this.setState({ show: false })
        this.props.history.push('/home')
        }}
      />
          <Form onSubmit = {this.submit}>
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
        </>
        )
    }
}