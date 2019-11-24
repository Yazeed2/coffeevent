import react from 'react'
import data1 from '../../Tempdata'
import {Card, Row} from 'react-bootstrap'

import React, { Component } from 'react'

export default class AllShops extends Component {
    render(){
    console.log("hello data")
    console.log(data1)
        return (
            <div>
                <h1 style={{textAlign:'center'}}>AVAILABLE COFFEE SHOPS</h1>
                <Row>
                {data1.map((data)=>{
                    return(
                    <div className="col-lg-2 col-md-3 col-sm-6 mb-2" id="Card-Margin" style={{width: 'auto',}}>
                    <Card style={{ width: '170px', border: 'none', marginTop: '60px' ,marginLeft:'auto', marginRight:'auto', display:'block'}}>
                    <Card.Img id="Card-Image-home" variant="top" src={data.photo}/>
                    <Card.Body class="text-left" style={{width: '147px', height: '50px', margin: '0 auto'}}>
                <Card.Title style={{fontSize: '16px', textAlign: 'left', marginTop: '7px'}}>{data.coffeeName}</Card.Title>
                        <Card.Text style={{fontSize: '13px'}}>
                            {data.description}
                            {data.location}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    
                </div >)
                })}
                </Row>
            </div>
        )
    }
}
