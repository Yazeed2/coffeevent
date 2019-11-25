import React, { Component } from 'react'
import { Navbar, Button, FormControl, Container, Row, Image, Col, Form } from 'react-bootstrap'


export default class createAcc extends Component {
    render() {
        return (
            <div>
            <Navbar bg="light" fixed="top" variant="dark" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img style={{marginRight:'10px'}} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
            <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'10px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/1ff33bb6-9a3d-49e0-830a-f4268a46b296.png" width="20" height="20"/></Navbar.Brand>
            <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'15px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/a2560254-34ab-4bbb-bb2a-fb33ed7c1fa9.png" width="20" height="20"/></Navbar.Brand>
            <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'20px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/756ef3d9-18de-4f1c-be7e-1fb111429af6.png" width="20" height="20"/></Navbar.Brand>
               <br />
               <br />
               <br />
               <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
                </Navbar>
                <br />
                <br />
                <h3>Create an Account</h3>
                <h6>(or Login)</h6>
                <Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label></Form.Label>
                <br />
       <Form.Control type="name" placeholder="Name" />
                </Form.Group>
              </Form.Row>
            </Form>
            <br />
            <Form>
            <Form.Row>
              <Form.Group as={Col}controlId="formGrid">
              <Form.Label></Form.Label>
              <br />
     <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Form.Row>
          </Form>
          <br />
           
            <Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label></Form.Label>
                <br />
       <Form.Control type="name" placeholder="Password" />
                </Form.Group>
              </Form.Row>
            </Form>
  <br />
  <Button variant="secondary" size="lg" block>
    Create Account
  </Button>
 
   <div style={{backgroundColor:'gray', marginBottom:'0'}}>
             <Row style={{marginBottom:"22px", marginLeft: '22px', marginRight:'44px'}}>
                 <Col style={{marginTop:"55px", marginLeft:'16%'}}><img src="https://i.imgur.com/4wYSqBt.png" width="120px" height="90px"/></Col>
                 <Col style={{marginTop:"50px", marginLeft:'16%'}}><img src="https://i.imgur.com/RQ1NP8M.png" width="120px" height="99px"/></Col>
             </Row>
             <Row>
             <div className="col-md-4 col-sm-4"></div>
             <div className="col-md-4 col-sm-4"></div>
             <div className="col-md-4 col-sm-4"></div>
             </Row>
             <Row className="footer-info-row" style={{marginLeft:'5%',marginRight:'5%'}}>
             <Col><p className="footer-info-col">Terms of Use</p></Col>
             <Col className="footer-spacer"><p>|</p></Col>
             <Col><p className="footer-info-col">Privacy Policy</p></Col>
             <Col className="footer-spacer"><p>|</p></Col>
             <Col><p className="footer-info-col">Archived Events</p></Col>
             <Col className="footer-spacer"><p>|</p></Col>
             <Col><p className="footer-info-col">About Us</p></Col>
            </Row>
         </div >
</div>
            
        )
    }
}
