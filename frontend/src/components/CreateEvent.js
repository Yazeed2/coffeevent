import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import { Button,Row, Image, ButtonToolbar, Form, Col} from 'react-bootstrap'
// import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'


export default class CreateEvent extends Component {
    state = {
        date: new Date(),
      }
      
     
      onChange = date => this.setState({ date })
    render() {
        return (
            <div>
                 <br></br>
          <br></br>
            <h1>Create an Event</h1>
            <Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Event Title</Form.Label>
                <br />
       <Form.Control type="email" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form.Group as={Col} controlId="formGridState">
       <Form.Label>Eevent Type</Form.Label>
       <br />
       <Form.Control as="select">
         <option>Art&Design</option>
         <option>...</option>
       </Form.Control>
     </Form.Group>
     <Form.Group as={Col} controlId="formGridState">
       <Form.Label>Capacity</Form.Label>
       <br />
       <Form.Control as="select">
         <option>100</option>
         <option>50</option>
         <option>40</option>
       </Form.Control>
     </Form.Group>
     <Form.Group as={Col} controlId="formGridState">
       <Form.Label>Date</Form.Label>
       </Form.Group>
     <DatePicker
          onChange={this.onChange}
           value={this.state.date}
         /> 
          <Form.Group as={Col} controlId="formGridState">
       <Form.Label>Start Time</Form.Label>
       <br />
       <Form.Control as="select">          
         <option></option>
         <option></option>
         <option></option>
       </Form.Control>
     </Form.Group>
     <Form.Group as={Col} controlId="formGridState">
       <Form.Label>End Time</Form.Label>
       <br />
       <Form.Control as="select">          
         <option></option>
         <option></option>
         <option></option>
       </Form.Control>
     </Form.Group>
     <h3>Is your event public or private?</h3>
     <Button variant="primary" type="submit">
    Public
  </Button> 
   <Button variant="primary" type="submit">
    Private
  </Button>
  <br />
  <h3>Things you need for your event...</h3>
<ButtonToolbar>
<Button variant="outline-secondary">Beverages</Button>
<Button variant="outline-secondary">Food</Button>
<Button variant="outline-secondary">Microphone</Button>
<Button variant="outline-secondary">Projector</Button>
<Button variant="outline-secondary">Cables</Button>
<Button variant="outline-secondary">Speakers</Button>
</ButtonToolbar>
<br />
<h3>Any other comments or things you need ?</h3>
<Form.Control type="email" placeholder= "" />
<ButtonToolbar>
<Button variant="outline-secondary">Choose Venue</Button>
</ButtonToolbar>
            </div>
        )
    }
}
