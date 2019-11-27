import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import { Button,Row, Image, ButtonToolbar, Form, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CreateEvent.css'
import Axios from 'axios';


export default class CreateEvent extends Component {
    state = {
        date: new Date(), 
      // alldata: '',
      titlee:'',
      typpe:'',
      cappacity: '',
      commennt: '',
      staart:'',
      ennd:'',
      puuplic:'',
      chosse:'',

      }
      
      postThis=()=>{
        Axios.post('http://localhost:5100/events/create', {
          startingTime: this.state.staart,
          endingTime: this.state.ennd,
          typeOfEvent: this.state.typpe,
          name: this.state.titlee,
          capacity: this.state.cappacity,
          date: this.state.date,
          thingsEvent: this.state.chosse,
          option:this.state.commennt,
          priOrpub: this.state.puuplic,
        })
      }

     componentDidUpdate(){
       console.log(this.state.titlee)
       console.log(this.state.typpe)
       console.log(this.state.cappacity)
       console.log(this.state.commennt)
       console.log(this.state.staart)
       console.log(this.state.ennd)
       console.log(this.state.puuplic)
       console.log(this.state.chosse)
     }
      onChange = date => this.setState({ date: date})
    //   onChange = alldata => {
    //     console.log(alldata);
        
    // this.setState({alldata:alldata})}
    render() {
        return (
            <div className="formEvent">
                 <br></br>
          <br></br>
            <h1>Create an Event</h1>
          
            <Form >
              <Form.Row >
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label >Event Title</Form.Label>
                <br />
       <Form.Control onChange={(e)=>{this.setState({titlee:e.target.value})}}
       type="text" placeholder="Enter event title" name="eventTitle" />
                </Form.Group>
              </Form.Row>
            {/* </Form> */}
            <Form.Group onChange={(e)=>{this.setState({typpe:e.target.value})}}
             as={Col} controlId="formGridState">
       <Form.Label >Eevent Type</Form.Label>
       <br />
       
       <Form.Control  as="select">
         <option>Art&Design</option>
         <option>Music</option>
         <option>Books</option>
         <option>....</option>
       </Form.Control>
     </Form.Group>
     <Form.Group onChange={(e)=>{this.setState({cappacity:e.target.value})}}
     as={Col} controlId="formGridState">
       <Form.Label >Capacity</Form.Label>
       <br />
       <Form.Control as="select">
         <option>100</option>
         <option>50</option>
         <option>40</option>
         <option>70</option>
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
          <Form.Group onChange={(e)=>{this.setState({staart:e.target.value})}}
           as={Col} controlId="formGridState">
            <br />
       <Form.Label>Start Time</Form.Label>
       <br />
       <Form.Control as="select">          
         <option>....</option>
         <option>8:00PM</option>
         <option>7:00PM</option>
         <option>9:00PM</option>
       </Form.Control>
     </Form.Group>
     <Form.Group onChange={(e)=>{this.setState({ennd:e.target.value})}}
      as={Col} controlId="formGridState">
       <Form.Label>End Time</Form.Label>
       <br />
       <Form.Control as="select">          
         <option>....</option>
         <option>8:00PM</option>
         <option>7:00PM</option>
         <option>9:00PM</option>
       </Form.Control>
     </Form.Group>
     <h5>Is your event public or private?</h5>
     {/* <select className="selectFilterBar" style={{width:'90%',height:'40px'}} onChange={(e)=>{this.setState({puuplic:e.target.value})}}>
     <option  value="" selected="selected" disabled="disabled">choose </option>
                 <option  value="Public">Public</option>
                 <option  value="Private">Private</option>
               
             </select> */}
  <ButtonToolbar>
<Button onClick={(e)=>{this.setState({puuplic:'Public'})}}
 variant="outline-secondary" value="public">Public</Button>
<Button onClick={(e)=>{this.setState({puuplic:'Private'})}}
variant="outline-secondary" value="privte">Private</Button>
</ButtonToolbar>
  <br />
  <h5>Things you need for your event...</h5>
<ButtonToolbar>
<Button onClick={(e)=>{this.setState({chosse:'Beverages'})}}
variant="outline-secondary">Beverages</Button>
<Button onClick={(e)=>{this.setState({chosse:'Food'})}}
variant="outline-secondary">Food</Button>
<Button onClick={(e)=>{this.setState({chosse:'Microphone'})}}
variant="outline-secondary">Microphone</Button>
<Button onClick={(e)=>{this.setState({chosse:'Projector'})}}
variant="outline-secondary">Projector</Button>
<Button onClick={(e)=>{this.setState({chosse:'Cables'})}}
variant="outline-secondary">Cables</Button>
<Button onClick={(e)=>{this.setState({chosse:'Speakers'})}}
 variant="outline-secondary">Speakers</Button>
</ButtonToolbar>
<br />
<h5>Any other comments or things you need ?</h5>
<Form.Control onChange={(e)=>{this.setState({commennt:e.target.value})}}
type="email" placeholder= "" />
<ButtonToolbar>
<Button style={{backgroundColor:'#F2D25C'}} variant="outline-secondary" onClick={this.postThis}>Choose Venue</Button>
</ButtonToolbar>
</Form>
            </div>
        )
    }
}
