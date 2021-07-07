import React from 'react'
import { Row, Col, Container, Button, Image } from 'react-bootstrap'
import './HomePageCard.css'
import tshirt11 from './images/tshirt11.jpg'
import tshirt1 from './images/tshirt1.jpg'
import tshirt6 from './images/tshirt6.jpg'
import tshirtcover from './images/tshirtcover.PNG'


const HomePageCards = () => {
    return (
        <Container>
            <Row style={{padding:'0px'}}>
                <Col md={12}>
                <div className="container00">
                    <img src={tshirtcover} alt="Avatar" className="image00" style={{width:'100%'}} />
                    <div className="middle00">
                    <h2 className="banner_text">BEST PLACE IN BANGLADESH TO GET UNIQUE DESIGNS</h2>
                </div>
                </div>

                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <div className="container1">
                <img src={tshirt11} alt="Avatar" className="image1" style={{width:'100%'}} />
  <div className="middle1">
  <Button variant="warning">BUY</Button>{' '}
  </div>
  </div>
                </Col>
                
                <Col md={4}>
                <div className="container2">
                <img src={tshirt1} alt="Avatar" className="image2" style={{width:'100%'}} />
  <div className="middle2">
  <Button variant="warning">BUY</Button>{' '}
  </div>
  </div>
                </Col>
                <Col md={4}>
                <div className="container3">
                <img src={tshirt6} alt="Avatar" className="image3" style={{width:'100%'}} />
  <div className="middle3">
  <Button variant="warning">BUY</Button>{' '}
  </div>
  </div>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default HomePageCards
