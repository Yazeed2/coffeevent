import React from 'react'
import { Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <div style={{backgroundColor:'gray', marginBottom:'0'}}>
            <Row style={{marginBottom:"22px", marginLeft: 'auto', marginRight:'auto'}}>
                <Col style={{marginTop:"50px", marginLeft:'21%'}}><img src="https://i.imgur.com/4wYSqBt.png" width="118px" height="79px"/></Col>
                <Col style={{marginTop:"55px"}}><img src="https://i.imgur.com/RQ1NP8M.png" width="118px" height="79px"/></Col>
            </Row>
            <Row className="footer-info-row" style={{marginLeft:'5%',marginRight:'5%'}}>
            <Col><p className="footer-info-col">Terms of Use</p></Col>
            <Col><p>|</p></Col>
            <Col><p className="footer-info-col">Privacy Policy</p></Col>
            <Col><p>|</p></Col>
            <Col><p className="footer-info-col">Archived Events</p></Col>
            <Col><p>|</p></Col>
            <Col><p className="footer-info-col">About Us</p></Col>
           </Row>
        </div >
    )
}

export default Footer