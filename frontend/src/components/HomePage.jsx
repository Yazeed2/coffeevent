// import React, { Component } from 'react'
import React from 'react'
import {Card} from 'react-bootstrap'

const HomePage = () => {
    return (
    <div className="col-lg-2 col-md-3 col-sm-6 mb-2" id="Card-Margin" style={{width: 'auto',}}>
        <Card style={{ width: '170px', border: 'none', marginTop: '60px' ,marginLeft:'auto', marginRight:'auto', display:'block'}}>
        <Card.Img id="Card-Image-home" variant="top" src="https://i.imgur.com/PU5Zex0.jpg"/>
        <Card.Body class="text-left" style={{width: '147px', height: '50px', margin: '0 auto'}}>
            <Card.Title style={{fontSize: '16px', textAlign: 'left', marginTop: '7px'}}>Karaoke Night</Card.Title>
            <Card.Text style={{fontSize: '13px'}}>
                Fri, Nov 29, 9:00 pm 
                Brew92, Ar Rawdah
            </Card.Text>
        </Card.Body>
        </Card>
        
    </div >    
    )
}

export default HomePage
