import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='mb-3'>
                    <h1 >Laptop Gallery</h1>
                </div>
                <div className='footerItem'>
                    <Row xs={1} md={2} lg={2}  >
                        <Col>
                            <h4>Address</h4>
                            <h5>New York 846 Sycamore Circle</h5>
                        </Col>
                        <Col>
                            <div >
                                <h5>Call Now</h5>
                                <p>02154258</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div>
                    <p>&copy; 2020 ST developing House</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;