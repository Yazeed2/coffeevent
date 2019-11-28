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
        dataShops: [],
        photo1:'',
        photo2:'',
        photo3:'',
        cap:10,
        locationLink:''

    }

    componentDidMount = () => {
        
        axios.get('http://localhost:5100/events/coffeShop')
        .then(response => {
            this.setState({dataShops : response.data})
            console.log("data shops")
          
        })
        .catch(error => {
          
        })
        
    }
    
    render() {
        console.log(this.state.dataShops)
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
                                {this.state.dataShops.map((data) => {
                                    return (
                                        <div onClick={() => { this.setState({ coffeeName: data.coffeeName, description: data.description, price: data.priceHour, showAll: false, showShop: true, photo1: data.photos[0], photo2: data.photos[1], photo3: data.photos[2],cap:data.maxCapacity,locationLink:data.googleLocation,price:data.priceHour, location:data.location }) }} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-2" id="Card-Margin" style={{ width: 'auto', }}>
                                            <Card style={{ width: '170px', border: 'none', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                                                <Card.Img id="Card-Image-home" variant="top" src={data.logo} />
                                                <Card.Body class="text-left" style={{ width: '147px', height: '50px', margin: '0 auto' }}>
                                                    <Card.Title style={{ fontSize: '16px', textAlign: 'left', marginTop: '7px' }}>{data.coffeeName}</Card.Title>
                                                    <Card.Text style={{ fontSize: '13px' }}>
    
                                                    {data.description}

                                                    </Card.Text>
                                                    {/* <Button>View Cafe</Button> */}
                                                </Card.Body>
                                            </Card>

                                        </div >)
                                })}
                            </Row>
                            
                            <br /><br /><br />
                            <Button href="/" block style={{ width: '40%', margin: '10% auto 20% auto' }} variant="outline-secondary">Go back to Home</Button>
                        </div>
                        </div>} </div>}


                {this.state.showShop == true ? <div>
                <div id="CarouselDivv">
                    <Carousel >
                        <Carousel.Item id="CarouselEvent">
                            <img
                                className="d-block w-100"
                                src={this.state.photo1}
                                alt="First slide"
                                id="CarouselImg"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id="CarouselEvent">
                            <img
                                className="d-block w-100"
                                src={this.state.photo2}
                                alt="Third slide"
                                id="CarouselImg"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id="CarouselEvent">
                            <img
                                className="d-block w-100"
                                src={this.state.photo3}
                                alt="Third slide"
                                id="CarouselImg"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                    <div style={{ marginTop: '5%' }}>
                        <h1 className="EventTitle">ABOUT {this.state.coffeeName}</h1>
                        <h4 className="EventCapacity">Capacity {this.state.cap}</h4>
                    </div>
                    <br />
                    <div>
                        <h2 style={{ display: 'inline-block', marginLeft: '15%', fontSize: '3vw', marginTop: '4%' }}><MdLocationOn style={{ marginLeft: '-50px' }} />           Location</h2>
                        <h2 style={{ display: 'inline-block', float: 'right', marginRight: '8%', fontSize: '3vw' }}>Price/hr {this.state.price} SAR</h2>
                <p style={{ marginLeft: '15.5%', marginTop: '2%', fontSize: '2vw', fontWeight: 'bold' }}>GoogleMap: <a href={this.state.locationLink}>link</a></p>
                <p style={{ marginLeft: '15.5%', marginTop: '-1%', fontSize: '2vw', fontWeight: 'bold' }}>District:{this.state.location}</p>
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


