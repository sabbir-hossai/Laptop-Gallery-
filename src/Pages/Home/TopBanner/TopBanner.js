import './TopBanner.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../image/banner.jpg';

const TopBanner = () => {
    return (
        <div>
            <Container>
                <Row className="my-5">
                    <Col xs={12} sm={7} md={8}>
                        <img className='img-fluid' src={banner} alt="" />
                    </Col>
                    <Col xs={12} sm={5} md={4}>
                        <div className='explore'>
                            <h1>Welcome to our laptop gallery</h1>
                            <Link to='/allproducts'>
                                <Button className='mt-4' variant="outline-warning">Explore All Products</Button>
                            </Link>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;