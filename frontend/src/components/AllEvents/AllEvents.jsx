import {Card, Row,Button, Carousel} from 'react-bootstrap'
import './AllEvents.css'
import data1 from '../../Tempdata'
import { FaPen } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

import React, { Component } from 'react'

export default class AllEvents extends Component {

    state={
        change: false,

    }

    render() {
        return (
            <div>
                <div className="pageDiv">
                <br/><br/><br/>
                <h1 className="pageTitle">AVAILABLE EVENTS</h1>
                <Row>
                {data1.map((data)=>{
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
                    <Button onClick={() => { this.setState({ arry: [1, 2, 3, 4], showAll: true, hideThem: false }) }} style={{marginTop:'20px'}}>View Event</Button>
                    </Card>
                    
                    
                </div >)
                })}
                </Row>
                <br/><br/><br/>
                <Button block style={{width:'40%',margin:'10% auto 20% auto'}} variant="outline-secondary">Go Back</Button>
                </div>



                {this.state.change==true? <div>



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
            </div> : null}
                



            </div>
        )
    }
}
