import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardItem from '../DashboardItem/DashboardItem';

const Pay = () => {
    return (
        <div>
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <Row className='container'>
                <Col className='link' xs={6} md={4}>
                    <DashboardItem></DashboardItem>
                </Col>
                <Col xs={12} md={8}>
                    <h1>pay method is coming soon</h1>
                </Col>
            </Row>

        </div>
    );
};

export default Pay;