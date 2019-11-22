import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="none" style={{background:'transparent'}}>
                    <Navbar.Brand href="#">COFFEVENT</Navbar.Brand>
                </Navbar>
            </Container>
        </div >
    )
}

export default Navigation