import {Card, Row,Button} from 'react-bootstrap'
import './AllEvents.css'
import data1 from '../../Tempdata'

import React, { Component } from 'react'

export default class AllEvents extends Component {
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
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    
                </div >)
                })}
                </Row>
                <br/><br/><br/>
                <Button block style={{width:'40%',margin:'10% auto 20% auto'}} variant="outline-secondary">Go Back</Button>
                </div>
            </div>
        )
    }
}
