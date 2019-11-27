import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import { Button,Row, Image, ButtonToolbar, Form, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CreateEvent.css'


export default class CreateEvent extends Component {
    state = {
        date: new Date(),
      }
      
     
      onChange = date => this.setState({ date })
    render() {
        return (
            <div className="formEvent">
                 <br></br>
          <br></br>
            <h1>Create an Event</h1>
          
            <Form >
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label >Event Title</Form.Label>
                <br />
       <Form.Control type="email" placeholder="" />
                </Form.Group>
              </Form.Row>
            {/* </Form> */}
            <Form.Group as={Col} controlId="formGridState">
       <Form.Label >Eevent Type</Form.Label>
       <br />
       <Form.Control as="select">
         <option>Art&Design</option>
         <option>...</option>
       </Form.Control>
     </Form.Group>
     <Form.Group as={Col} controlId="formGridState">
       <Form.Label >Capacity</Form.Label>
       <br />
       <Form.Control as="select">
         <option>100</option>
         <option>50</option>
         <option>40</option>
       </Form.Control>
     </Form.Group>
     <Form.Group as={Col} controlId="formGridState">
       <Form.Label >Date</Form.Label>
       </Form.Group>
     <DatePicker
          onChange={this.onChange}
           value={this.state.date}
         /> 
         <br />
          <Form.Group as={Col} controlId="formGridState">
            <br />
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
     <h5>Is your event public or private?</h5>
     {/* <Button variant="primary" type="submit">
    Public 
  </Button> 
   <Button variant="primary" type="submit">
    Private
  </Button> */}
  <ButtonToolbar>
<Button variant="outline-secondary">Public</Button>
<Button variant="outline-secondary">Private</Button>
</ButtonToolbar>
  <br />
  <h5>Things you need for your event...</h5>
<ButtonToolbar>
<Button variant="outline-secondary">Beverages</Button>
<Button variant="outline-secondary">Food</Button>
<Button variant="outline-secondary">Microphone</Button>
<Button variant="outline-secondary">Projector</Button>
<Button variant="outline-secondary">Cables</Button>
<Button variant="outline-secondary">Speakers</Button>
</ButtonToolbar>
<br />
<h5>Any other comments or things you need ?</h5>
<Form.Control type="email" placeholder= "" />
<ButtonToolbar>
<Button style={{backgroundColor:'#F2D25C'}} variant="outline-secondary">Choose Venue</Button>
</ButtonToolbar>
</Form>
            </div>
        )
    }
}

// style={{backgroundColor:'#F5F7F7',position:'absolute',width:'237px',height:'31px'}} 