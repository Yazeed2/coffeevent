import React, { Component } from 'react'
import './EventPage.css'
import { Row, Button, Jumbotron, Container, Carousel } from 'react-bootstrap'

export default class EventPage extends Component {
    render() {
        return (
            <div>
                <Carousel >
                    <Carousel.Item id="CarouselEvent" style={{ height: '35vh' }}>
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
                    <h1 className="EventTitle">Drink Coffee & Draw</h1> 
                    <h4 className="EventCapacity">Capacity 100</h4>
                </div>

                <div>
                    <h2 style={{display:'inline-block', marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}>Date and Time</h2>
                    <h2 style={{display:'inline-block', float:'right', marginRight:'8%', fontSize:'3vw'}}>200-SR</h2>
                    <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw', fontWeight:'bold'}}>Wed, 15 Fri, 16 Dec</p> 
                    <p style={{marginLeft:'15.5%', marginTop:'-1%', fontSize:'2vw',fontWeight:'bold'}}>5:00 PM - 9:30PM</p>
                </div>
                <div>
                    <h2 style={{marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}>Location</h2>
                    <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw',fontWeight:'bold'}}>Jeddah - Brew92</p>
                    <p style={{marginLeft:'15.5%', marginTop:'-1%', fontSize:'2vw',fontWeight:'bold'}}>Ar Rawdah, Jeddah 23432</p>
                </div>
                <div>
                <h2 style={{marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}>About Event</h2>
                <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw', fontWeight:'bold', marginRight:'13%'}}>In this workshop, you will learn about the different tools and strategies you can use to successfully market your business on social media. You will also be provided with an overview of the capabilities of digital marketing and social media and how it can help you generate real business.</p>
                </div>
                <div>
                <h2 style={{marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}>AGENDA</h2>
                <ul style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw',fontWeight:'bold'}}>You’ll learn:
                <li style={{marginLeft:'10%'}}>Business best practices on social media</li>
                <li style={{marginLeft:'10%'}}>Which social media platforms are right for your business</li>
                <li style={{marginLeft:'10%'}}>The elements of a social media marketing strategy</li>
                <li style={{marginLeft:'10%'}}>How to build an audience around your ideal customer</li>
                <li style={{marginLeft:'10%'}}>How to create engaging, shareable content</li>
                </ul>
                </div>
                <Button style={{width:'60%',margin:'10% auto 20% auto'}} variant="outline-primary" size="lg" block>
                    Book
                </Button>
            </div>
        )
    }
}






