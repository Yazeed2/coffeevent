import React, { Component } from 'react'
import { Navbar, Button, FormControl, Container, Row, Image, Col, Form,Nav } from 'react-bootstrap'
import account from '../acc/account'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

export default class payment extends Component {
    render() {
        return (
            <div>
<BrowserRouter>
<Navbar bg="light" fixed="top" variant="dark" expand="sm">
            <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img style={{marginRight:'10px'}} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
            <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'10px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/1ff33bb6-9a3d-49e0-830a-f4268a46b296.png" width="20" height="20"/></Navbar.Brand>
            <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'15px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/a2560254-34ab-4bbb-bb2a-fb33ed7c1fa9.png" width="20" height="20"/></Navbar.Brand>
           
         <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'20px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/756ef3d9-18de-4f1c-be7e-1fb111429af6.png" width="20" height="20"/></Navbar.Brand>
            <Nav.Link href="/account">go to account</Nav.Link>
            
                   
                    <Switch>
                    <Route path="/account" component={account} />
                    </Switch>
                </Navbar>

                </BrowserRouter>
                <h3>PAYMENT</h3>
                <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://makkahnewspaper.com/uploads/images/2019/07/18/1076860.jpg" width="60" height="60" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://thumbor.forbes.com/thumbor/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cf12476142c500008f45e32%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416" width="60" height="69" thumbnail />
    </Col>
  </Row>
</Container>
<Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Card Number</Form.Label>
                <br />
       <Form.Control type="number" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Name on Card</Form.Label>
                <br />
       <Form.Control type="name" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>Expiry date</Form.Label>
                <br />
       <Form.Control type="date" placeholder="MM/YY" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Form>
              <Form.Row>
                <Form.Group as={Col}controlId="formGrid">
                <Form.Label>CVV</Form.Label>
                <br />
       <Form.Control type="number" placeholder="" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Button variant="primary" size="lg" block>
    CONFIRM
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

// import React, { Component } from 'react'
// import { Navbar, Button, FormControl, Container, Row, Image, Col, Form } from 'react-bootstrap'

// export default class account extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar bg="light" fixed="top" variant="dark" expand="sm">
//             <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img style={{marginRight:'10px'}} alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
//             <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'10px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/1ff33bb6-9a3d-49e0-830a-f4268a46b296.png" width="20" height="20"/></Navbar.Brand>
//             <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'15px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/a2560254-34ab-4bbb-bb2a-fb33ed7c1fa9.png" width="20" height="20"/></Navbar.Brand>
//             <Navbar.Brand style={{ fontSize: '15px'}} href="#"><img style={{marginLeft:'20px'}} alt="" src="https://cdn.zeplin.io/5dd5a2c109246c062247a82d/screens/756ef3d9-18de-4f1c-be7e-1fb111429af6.png" width="20" height="20"/></Navbar.Brand>
//                <br />
//                <br />
//                <br />
//                <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bolder'}} href="#"><img alt="" src="https://i.imgur.com/eFCHtTt.png" width="30" height="30"/>COFFEVENT</Navbar.Brand>
//                 </Navbar>
//                 <br />
//                 <br />
//                 <div>
//   <Button variant="primary" size="lg" block>
//     Sign In
//   </Button>
//   <br />
//   <br />
//   <Button variant="secondary" size="lg" block>
//     Create an Account
//   </Button>
//   <br />
//   <h3>Or</h3>
//   <Button variant="secondary" size="lg" block>
//     Sign In Google Account
//   </Button>
// </div>
// <div style={{backgroundColor:'gray', marginBottom:'0'}}>
//             <Row style={{marginBottom:"22px", marginLeft: '22px', marginRight:'44px'}}>
//                 <Col style={{marginTop:"55px", marginLeft:'16%'}}><img src="https://i.imgur.com/4wYSqBt.png" width="120px" height="90px"/></Col>
//                 <Col style={{marginTop:"50px", marginLeft:'16%'}}><img src="https://i.imgur.com/RQ1NP8M.png" width="120px" height="99px"/></Col>
//             </Row>
//             <Row>
//             <div className="col-md-4 col-sm-4"></div>
//             <div className="col-md-4 col-sm-4"></div>
//             <div className="col-md-4 col-sm-4"></div>
//             </Row>
//             <Row className="footer-info-row" style={{marginLeft:'5%',marginRight:'5%'}}>
//             <Col><p className="footer-info-col">Terms of Use</p></Col>
//             <Col className="footer-spacer"><p>|</p></Col>
//             <Col><p className="footer-info-col">Privacy Policy</p></Col>
//             <Col className="footer-spacer"><p>|</p></Col>
//             <Col><p className="footer-info-col">Archived Events</p></Col>
//             <Col className="footer-spacer"><p>|</p></Col>
//             <Col><p className="footer-info-col">About Us</p></Col>
//            </Row>
//         </div >

//             </div>
//         )
//     }
// }
