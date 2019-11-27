import react from 'react'
import data1 from '../../Tempdata'
import { Card, Row, Button, Carousel, Image, Form, Container, Col } from 'react-bootstrap'
import './AllShops.css'
import { FaPen } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import axios from "axios"

import React, { Component } from 'react'

export default class AllShops extends Component {

    state = {
        showAll: true,
        showShop: false,
        coffeeName: '',
        capacity: '',
        price: '',
        description: '',

    }

    render() {
        console.log("hello data")
        console.log(data1)
        return (
            <div>
                <a id="topOfPage"></a>
                {this.state.showShop == false && this.state.showAll == false ? null : <div>

                    {this.state.showShop == true && this.state.showAll == false ? null :

                        <div className="pageDiv">
                            <br /><br /><br />
                            <h1 className="pageTitle">AVAILABLE COFFEE SHOPS</h1>
                            <div id="Cards-Div-width">
                            <Row>
                                {data1.map((data) => {
                                    return (
                                        <div onClick={() => { this.setState({ coffeeName: data.coffeeName, description: data.description, price: data.price, showAll: false, showShop: true }) }} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-2" id="Card-Margin" style={{ width: 'auto', }}>
                                            <Card style={{ width: '170px', border: 'none', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                                                <Card.Img id="Card-Image-home" variant="top" src="https://i.imgur.com/PU5Zex0.jpg" />
                                                <Card.Body class="text-left" style={{ width: '147px', height: '50px', margin: '0 auto' }}>
                                                    <Card.Title style={{ fontSize: '16px', textAlign: 'left', marginTop: '7px' }}>{data.coffeeName}</Card.Title>
                                                    <Card.Text style={{ fontSize: '13px' }}>
                                                        {data.description}
                                                        {data.location}
                                                    </Card.Text>
                                                    {/* <Button>View Cafe</Button> */}
                                                </Card.Body>
                                            </Card>

                                        </div >)
                                })}
                            </Row>
                            
                            <br /><br /><br />
                            <Button block style={{ width: '40%', margin: '10% auto 20% auto' }} variant="outline-secondary">Go back to Home</Button>
                        </div>
                        </div>} </div>}


                {this.state.showShop == true ? <div>
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
                        <h1 className="EventTitle">ABOUT {this.state.coffeeName}</h1>
                        <h4 className="EventCapacity">Capacity 100</h4>
                    </div>
                    <br />
                    <div>
                        <h2 style={{ display: 'inline-block', marginLeft: '15%', fontSize: '3vw', marginTop: '4%' }}><MdLocationOn style={{ marginLeft: '-50px' }} />           Location</h2>
                        <h2 style={{ display: 'inline-block', float: 'right', marginRight: '8%', fontSize: '3vw' }}>{this.state.price} SAR</h2>
                        <p style={{ marginLeft: '15.5%', marginTop: '2%', fontSize: '2vw', fontWeight: 'bold' }}>Link:</p>
                        <p style={{ marginLeft: '15.5%', marginTop: '-1%', fontSize: '2vw', fontWeight: 'bold' }}>District:</p>
                    </div>
                    <br />
                    <div>
                        <h2 style={{ marginLeft: '15%', fontSize: '3vw', marginTop: '4%' }}><FaPen style={{ marginLeft: '-50px' }} />           About Cafe</h2>
                        <p style={{ marginLeft: '15.5%', marginTop: '2%', fontSize: '2vw', fontWeight: 'bold', marginRight: '13%' }}>{this.state.description}</p>
                    </div>
                    <br />
                    <Button href="#topOfPage" onClick={() => { this.setState({ coffeeName: '', description: '', price: '', showAll: true, showShop: false }) }} href="#topOfPage" block style={{ width: '40%', margin: '10% auto 20% auto' }} variant="outline-secondary">Go Back</Button>
                    <br /><br /><br /><br /><br /><br />


                </div> : null}

            </div>

        )
    }
}


