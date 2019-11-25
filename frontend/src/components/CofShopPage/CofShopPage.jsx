import react from 'react'
import './CofShopPage.css'
import { Row, Button, Jumbotron, Container, Carousel } from 'react-bootstrap'
import { FaPen } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

import React, { Component } from 'react'

export default class CofShopPage extends Component {
    render() {
        return (
            <div>
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
                    <h1 className="EventTitle">ABOUT ARTY CAFE</h1> 
                    <h4 className="EventCapacity">Capacity 100</h4>
                </div>
                <br/>
                <div>
                    <h2 style={{display:'inline-block', marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}><MdLocationOn style={{marginLeft:'-50px'}}/>           Location</h2>
                    <h2 style={{display:'inline-block', float:'right', marginRight:'8%', fontSize:'3vw'}}>200 SAR</h2>
                    <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw', fontWeight:'bold'}}>Link:</p> 
                    <p style={{marginLeft:'15.5%', marginTop:'-1%', fontSize:'2vw',fontWeight:'bold'}}>District:</p>
                </div>
                <br/>
                <div>
                <h2 style={{marginLeft:'15%', fontSize:'3vw', marginTop:'4%'}}><FaPen style={{marginLeft:'-50px'}}/>           About Cafe</h2>
                <p style={{marginLeft:'15.5%', marginTop:'2%', fontSize:'2vw', fontWeight:'bold', marginRight:'13%'}}>Arty Cafe allows you to do just that, making it a perfect place to unwind after a long day at work. The cafe has art supplies ranging from coloring pencils to acrylic paints and brushes of all sizes.</p>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
