import React from 'react'
import { Row, Col} from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer-div">
            <Row style={{marginBottom:"22px", marginLeft: 'auto', marginRight:'auto'}}>
                <Col id="Footer2030"><img src="https://i.imgur.com/4wYSqBt.png" className="Footer2030img" width="128px" height="89px"/></Col>
                <Col style={{marginTop:"50px"}}><img src="https://i.imgur.com/RQ1NP8M.png" className="Footerlogoimg" width="128px" height="99px"/></Col>
            </Row>
            {/* <Row>
            <div className="col-md-6 col-sm-6" style={{ marginLeft: 'auto', marginRight:'auto', display: 'block'}}><img src="https://i.imgur.com/4wYSqBt.png" width="118px" height="79px"/></div>
            <div className="col-md-6 col-sm-6" style={{ marginLeft: 'auto', marginRight:'auto', display:'block'}}><img src="https://i.imgur.com/RQ1NP8M.png" width="128px" height="89px"/></div>
            </Row> */}
            <Row>
            <div className="col-md-4 col-sm-4"></div>
            <div className="col-md-4 col-sm-4"></div>
            <div className="col-md-4 col-sm-4"></div>
            </Row>
            <Row className="footer-info-row" style={{marginLeft:'5%',marginRight:'5%'}}>
            <Col><p className="footer-info-col">Terms of Use</p></Col>
            <Col className="footer-spacer"><p>|</p></Col>
            <Col><p className="footer-info-col">Privacy Policy</p></Col>
            <Col className="footer-spacer"><p>|</p></Col>
            <Col><p className="footer-info-col">Archived Events</p></Col>
            <Col className="footer-spacer"><p>|</p></Col>
            <Col><p className="footer-info-col">About Us</p></Col>
           </Row>
        </div >
    )
}

export default Footer