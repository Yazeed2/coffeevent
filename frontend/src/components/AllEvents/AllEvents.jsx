import { Card, Row, Button, Carousel, Image, Form, Container, Col, ButtonToolbar } from 'react-bootstrap'
import './AllEvents.css'
import data1 from '../../Tempdata'
import { FaPen } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import axios from "axios"
import { FiMinusCircle } from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import React, { Component } from 'react'



export default class AllEvents extends Component {

    state = {
        data: data1,
        // data : [],
        showAll: true,
        showEvent: false,
        coffeeName: "",
        startingTime: "",
        endingTime: "",
        showBook: false,
        hideBook: true,
        showPay: false,
        ticketsNumber: 1,
        totalPrice: 200
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
                {this.state.ticketsNumber == 0 ? this.setState({ ticketsNumber: 1 }) : null}
                {this.state.totalPrice < 200 ? this.setState({ totalPrice: 200 }) : null}
                {this.state.totalPrice == 400 ? null : this.state.ticketsNumber == 2 ? this.setState({ totalPrice: 400 }) : null}



                <div>
                    {/* dont show any of them if they are both false */}
                    {this.state.showEvent == false && this.state.showAll == false ? null :

                        <div>

                            {this.state.showEvent == true && this.state.showAll == false ? null :
                                <div className="pageDiv">
                                    <br /><br /><br />
                                    <h1 className="pageTitle">AVAILABLE EVENTS</h1>
                                    <div id="Cards-Div-width">
                                        <Row>
                                            {this.state.data.map((data) => {
                                                return (
                                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-2" id="Card-Margin" style={{ width: 'auto', }}>
                                                        <Card style={{ width: '170px', border: 'none', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                                                            <Card.Img href="#topOfPage" onClick={() => { this.setState({ showEvent: true, showAll: false, coffeeName: data.coffeeName, startingTime: data.startingTime, endingTime: data.endingTime }) }} id="Card-Image-home" variant="top" src="https://i.imgur.com/PU5Zex0.jpg" />
                                                            <Card.Body class="text-left" style={{ width: '147px', height: '50px', margin: '0 auto' }}>
                                                                <Card.Title style={{ fontSize: '16px', textAlign: 'left', marginTop: '7px' }}>{data.coffeeName}</Card.Title>
                                                                <Card.Text style={{ fontSize: '13px' }}>
                                                                    {data.description}
                                                                    Starting Time: {data.startingTime}
                                                                    Ending Time: {data.endingTime}
                                                                </Card.Text>
                                                            </Card.Body>

                                                        </Card>


                                                    </div >)
                                            })}
                                        </Row>
                                        <br /><br /><br />
                                        <Button href="#topOfPage" block style={{ width: '40%', margin: '10% auto 20% auto' }} variant="outline-secondary">Go Back</Button>
                                    </div>
                                </div>

                            }</div>}


                    {this.state.showEvent == true ? <div>


                        <div id="CarouselDivv">
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
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <h1 className="EventTitle">About {this.state.coffeeName}</h1>
                            <h4 className="EventCapacity">Capacity 100</h4>
                        </div>
                        <br />
                        <div>
                            <h2 style={{ display: 'inline-block', marginLeft: '15%', fontSize: '3vw', marginTop: '4%' }}><MdLocationOn style={{ marginLeft: '-50px' }} />           Location</h2>
                            <h2 style={{ display: 'inline-block', float: 'right', marginRight: '8%', fontSize: '3vw' }}>200 SAR</h2>
                            <p style={{ marginLeft: '15.5%', marginTop: '2%', fontSize: '2vw', fontWeight: 'bold' }}>Link:</p>
                            <p style={{ marginLeft: '15.5%', marginTop: '-1%', fontSize: '2vw', fontWeight: 'bold' }}>startingTime: {this.state.startingTime}</p>
                        </div>
                        <br />
                        <div>
                            <h2 style={{ marginLeft: '15%', fontSize: '3vw', marginTop: '4%' }}><FaPen style={{ marginLeft: '-50px' }} />           About Cafe</h2>
                            <p style={{ marginLeft: '15.5%', marginTop: '2%', fontSize: '2vw', fontWeight: 'bold', marginRight: '13%' }}>Arty Cafe allows you to do just that, making it a perfect place to unwind after a long day at work. The cafe has art supplies ranging from coloring pencils to acrylic paints and brushes of all sizes.</p>
                        </div>
                        <br /><br /><br /><br /><br />
                        <Button href="#topOfPage" onClick={() => { this.setState({ showEvent: false, showAll: false, showBook: true, showPay: false }) }} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '300px' }} variant={"secondary"}>Book</Button>
                        <br />
                        <Button href="#topOfPage" onClick={() => { this.setState({ showEvent: false, showAll: true, coffeeName: "", startingTime: "", endingTime: "" }) }} style={{ margin: '20px auto 13% auto', display: 'block', width: '150px' }} variant="outline-primary">Go Back</Button>
                    </div> : null}


                    {this.state.showBook == true ?
                        <div style={{ textAlign: 'center' }}>
                            <br /><br /><br />
                            <h1 style={{ fontWeight: 'bolder' }}>OVERVIEW</h1>
                            <br />
                            <h3>EventName: {this.state.coffeeName}</h3>
                            <h3>Start at: {this.state.startingTime}</h3>
                            <h3>End at: {this.state.endingTime}</h3>
                            <h3>Located at: </h3>

                            <br /><br />
                            <h3>How many tickets would you like?</h3>

                            <ButtonToolbar style={{ margin: 'auto', display: 'block' }}>
                                <FiMinusCircle onClick={() => { this.setState({ ticketsNumber: this.state.ticketsNumber - 1, totalPrice: this.state.totalPrice - 200 }) }} size={37} /><Button style={{ width: '200px' }} variant="warning">{this.state.ticketsNumber}</Button><div onClick={() => { this.setState({ totalPrice: 200 * (this.state.ticketsNumber + 1) }) }} style={{ display: 'inline' }}><IoMdAddCircleOutline onClick={() => { this.setState({ ticketsNumber: this.state.ticketsNumber + 1 }) }} size={40} /></div>
                            </ButtonToolbar>
                            <br />

                            <h4>Total price: {this.state.totalPrice} SAR</h4>
                            <br /><br /><br />

                            <Button href="#topOfPage" onClick={() => { this.setState({ showPay: true, showBook: false, showEvent: false, showAll: false, coffeeName: "", startingTime: "", endingTime: "" }) }} style={{ width: '300px' }} variant={"secondary"}>Payment</Button>
                            <br />
                            <Button href="#topOfPage" onClick={() => { this.setState({ showBook: false, showEvent: false, showAll: true, coffeeName: "", startingTime: "", endingTime: "" }) }} style={{ marginTop: '20px' }} variant="outline-primary">Go back to Events</Button>
                            <br /><br />
                        </div> : null}



                    {this.state.showPay == true ?

                        <div>
<br/>
<br/>
                        <div>
                            <h3 style={{textAlign:'center'}}>PAYMENT</h3>
                        </div>

                        <Container style={{width:'300px'}}>
                            <Row>
                                <Col >
                                    <Image src="https://makkahnewspaper.com/uploads/images/2019/07/18/1076860.jpg" width="150" height="120" rounded />
                                </Col>
                                <Col >
                                    <Image style={{marginTop:'20px'}} src="https://thumbor.forbes.com/thumbor/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cf12476142c500008f45e32%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416" width="70" height="70" thumbnail />
                                </Col>
                            </Row>
                        </Container>

                        <div style={{width:'350px',backgroundColor:'#d1b268',padding:'20px', marginLeft:'auto',marginRight:'auto',border:'2px solid black'}}>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGrid">
                                        <Form.Label>Card Number</Form.Label>
                                        <br />
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGrid">
                                        <Form.Label>Name on Card</Form.Label>
                                        <br />
                                        <Form.Control type="name" placeholder="" />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGrid">
                                        <Form.Label>Expiry date</Form.Label>
                                        <br />
                                        <Form.Control type="text" placeholder="MM/YY" />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGrid">
                                        <Form.Label>CVV</Form.Label>
                                        <br />
                                        <Form.Control type="number" placeholder="" />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                            <Button href="" onClick={() => { this.setState({ showPay: true, showBook: false, showEvent: false, showAll: false, coffeeName: "", startingTime: "", endingTime: "" }) }} block style={{ width: '270px', margin: '2% auto 0 auto' }} variant={"success"}>CONFIRM</Button>
                            <br/>
                            </div> 
                            <br/> <br/> 
                            <Button href="#topOfPage" onClick={() => { this.setState({ showPay: false, showBook: false, showEvent: false, showAll: true, coffeeName: "", startingTime: "", endingTime: "" }) }} block style={{ width: '180px', margin: '0 auto 5% auto' }} variant="outline-primary">Go back to Events</Button>
                        
                        </div>: null}
                

                {/* The end div */}
            </div>
            </div >
        )
    }
}
