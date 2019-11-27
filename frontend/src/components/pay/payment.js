import React, { Component } from 'react'
import { Navbar, Button, FormControl, Container, Row, Image, Col, Form,Nav } from 'react-bootstrap'
import account from '../acc/account'
import 'bootstrap/dist/css/bootstrap.min.css'
import './payment.css'

export default class payment extends Component {
    render() {
        return (
            <div>
<div className = "payForm">
<h3>PAYMENT</h3>
</div>
               
                <Container>
  <Row className = "payImage">
    <Col xs={8} md={2}>
      <Image src="https://makkahnewspaper.com/uploads/images/2019/07/18/1076860.jpg" width="150" height="120" rounded />
    </Col>
    <Col xs={8} md={5}>
      <Image src="https://thumbor.forbes.com/thumbor/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cf12476142c500008f45e32%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416" width="90" height="90" thumbnail />
    </Col>
  </Row>
</Container>

<div>
<Form className = "payForm">
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Card Number</Form.Label>
                <br />
       <Form.Control type="number" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form className = "payForm">
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Name on Card</Form.Label>
                <br />
       <Form.Control type="name" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form className = "payForm">
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Expiry date</Form.Label>
                <br />
       <Form.Control type="date" placeholder="MM/YY" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form className = "payForm">
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>CVV</Form.Label>
                <br />
       <Form.Control type="number" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Button style={{width:'250px',  justifyContent: 'center',  display: 'flex', marginLeft:' 520px'}} variant="primary" size="lg" block>
    CONFIRM
  </Button>
</div>
         </div>
            
        )
    }
}