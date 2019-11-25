import {Card, Row,Button, Carousel, Image,Form,Container,Col} from 'react-bootstrap'
import './AllEvents.css'
import data1 from '../../Tempdata'
import { FaPen } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import axios from "axios"

import React, { Component } from 'react'

export default class AllEvents extends Component {

    state={
        data: data1,
        // data : [],
        showAll:true,
        showEvent: false,
        coffeeName: "",
        startingTime: "",
        endingTime: "",
        showBook: false,
        hideBook: true,
        showPay: false,
    }
//     componentDidMount(){
//         axios.get('http://localhost:5100/events/')
//         .then(data=>{
//             this.setState({
//                 data:data.data
//             })
// console.log('herer');

            
//         })
//         .catch(err=> console.log(err)
//         )
//     }
//cehck
    render() {
        return (

            <div>
                <a id="topOfPage"></a>
            <div>
                {/* dont show any of them if they are both false */}
                {this.state.showEvent==false && this.state.showAll==false ? null :

                <div>

                {this.state.showEvent==true && this.state.showAll==false ? null :
                <div className="pageDiv">
                <br/><br/><br/>
                <h1 className="pageTitle">AVAILABLE EVENTS</h1>
                <Row>
                {this.state.data.map((data)=>{
                    return(
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-2" id="Card-Margin" style={{width: 'auto',}}>
                    <Card style={{ width: '170px', border: 'none', marginTop: '60px' ,marginLeft:'auto', marginRight:'auto', display:'block'}}>
                    <Card.Img id="Card-Image-home" variant="top" src="https://i.imgur.com/PU5Zex0.jpg"/>
                    <Card.Body class="text-left" style={{width: '147px', height: '50px', margin: '0 auto'}}>
                <Card.Title style={{fontSize: '16px', textAlign: 'left', marginTop: '7px'}}>{data.coffeeName}</Card.Title>
                        <Card.Text style={{fontSize: '13px'}}>
                            {data.description}
                            Starting Time: {data.startingTime}
                            Ending Time: {data.endingTime}
                        </Card.Text>
                    </Card.Body>
                    <Button href="#topOfPage" onClick={() => { this.setState({ showEvent: true, showAll:false, coffeeName: data.coffeeName, startingTime: data.startingTime, endingTime: data.endingTime }) }} style={{marginTop:'20px'}}>View Event</Button>
                    </Card>
                    
                    
                </div >)
                })}
                </Row>
                <br/><br/><br/>
                <Button href="#topOfPage" block style={{width:'40%',margin:'10% auto 20% auto'}} variant="outline-secondary">Go Back</Button>
                </div>
                
    }</div>}


                {this.state.showEvent==true ? <div>



                <Carousel >
                    <Carousel.Item id="CarouselEvent">
                        <img
                            className="d-block w-100"
                            src="https://i.imgur.com/881TPou.png"
                            alt="First slide"
                            id="CarouselImg"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="CarouselEvent">
                        <img
                            className="d-block w-100"
                            src="https://i.imgur.com/uQxAvwy.png"
                            alt="Third slide"
                            id="CarouselImg"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="CarouselEvent">
                        <img
                            className="d-block w-100"
                            src="https://i.imgur.com/Jw6nLQ9.png"
                            alt="Third slide"
                            id="CarouselImg"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div style={{marginTop:'5%'}}>
                    <h1 className="EventTitle">ABOUT {this.state.coffeeName}</h1> 
                    <h4 className="EventCapacity">Capacity 100</h4>
                </div>
                <br/>
                <div>
                    <h2 style={{display:'inline-block', marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}><MdLocationOn style={{marginLeft:'-50px'}}/>           Location</h2>
                    <h2 style={{display:'inline-block', float:'right', marginRight:'8%', fontSize:'3vw'}}>200 SAR</h2>
                    <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw', fontWeight:'bold'}}>Link:</p> 
                <p style={{marginLeft:'15.5%', marginTop:'-1%', fontSize:'2vw',fontWeight:'bold'}}>startingTime: {this.state.startingTime}</p>
                </div>
                <br/>
                <div>
                <h2 style={{marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}><FaPen style={{marginLeft:'-50px'}}/>           About Cafe</h2>
                <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw', fontWeight:'bold', marginRight:'13%'}}>Arty Cafe allows you to do just that, making it a perfect place to unwind after a long day at work. The cafe has art supplies ranging from coloring pencils to acrylic paints and brushes of all sizes.</p>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <Button href="#topOfPage" onClick={() => { this.setState({ showEvent: false,showAll:true, coffeeName: "", startingTime: "", endingTime: "" }) }} style={{marginTop:'20px'}}>Go Back</Button>
                <Button href="#topOfPage" onClick={() => { this.setState({ showEvent: false,showAll:false, showBook:true, showPay:false}) }} style={{marginTop:'20px'}}>Book</Button>
            </div> : null}
                

            {this.state.showBook==true ? 
                <div>
                    <h1>OVERVIEW</h1>
                    <h2>EventName: {this.state.coffeeName}</h2>
                    <h2>Start at: {this.state.startingTime}</h2>
                    <h2>End at: {this.state.endingTime}</h2>
                    <h2>Located at: </h2>


                    <h3>How many tickets would you like?</h3>

                    <h4>Total price:</h4>

                    <Button href="#topOfPage" onClick={() => { this.setState({ showPay:true ,showBook: false, showEvent: false,showAll:false, coffeeName: "", startingTime: "", endingTime: ""}) }} variant={"secondary"}>Payment</Button>
                    <br/>
                    <Button href="#topOfPage" onClick={() => { this.setState({ showBook: false, showEvent: false,showAll:true, coffeeName: "", startingTime: "", endingTime: "" }) }} style={{marginTop:'20px'}}>Go back to Events</Button>
                </div> : null}



            {this.state.showPay==true ? 

            <div>
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
  <Button href="#topOfPage" onClick={() => { this.setState({ showPay:false,showBook: false, showEvent: false,showAll:true, coffeeName: "", startingTime: "", endingTime: "" }) }} style={{marginTop:'20px'}}>Go back to Events</Button>
                </div>: null}



{/* The end div */}
            </div>
        </div>
        )
    }
}
