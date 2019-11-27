import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Row, Col, Image, Container, ButtonToolbar  } from 'react-bootstrap'
import './smile.css'


export default class smileFace extends Component {
    render() {
        return (
           
            <div clsssName="smile">
                
                  <h3>WOO! YOUR EVENT TICKET IS CONFIRMED</h3>
                <Container>
  <Row>
    <Col xs={6} md={4}>
        <br />
      <Image src="https://cdn2.vectorstock.com/i/1000x1000/47/81/happy-face-emoticon-isolated-icon-design-vector-9734781.jpg" width="200" height="200" roundedCircle />
      <br />
    </Col>
  </Row>
</Container>
<br />
<h5>You will recive details on your E-mail and a reminder of event</h5>
<br />
<ButtonToolbar>
<Button variant="dark">Back to browsing events</Button>
</ButtonToolbar>
            </div>
        )
    }
}
