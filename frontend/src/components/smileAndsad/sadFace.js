import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Row, Col, Image, Container, ButtonToolbar  } from 'react-bootstrap'
import './sad.css'


export default class sadFace extends Component {
    render() {
        return (
            <div className="sad">
                <h3>IT'S SAD TO SEE YOU GO...</h3>
                <Container>
  <Row>
    <Col xs={6} md={4}>
    <br />
      <Image src="https://www.simplystamps.com/media/catalog/product/cache/5/image/600x600/9df78eab33525d08d6e5fb8d27136e95/s/c/school_128C.png" width="200" height="200" roundedCircle />
      <br />
    </Col>
  </Row>
</Container>
<br />
<h5>If you paid for this event,
    you'll get a refund. Please
    check your email for more details.
</h5>
<br />
<ButtonToolbar>
<Button variant="dark">Back to browsing events</Button>
</ButtonToolbar>

            </div>
        )
    }
}
