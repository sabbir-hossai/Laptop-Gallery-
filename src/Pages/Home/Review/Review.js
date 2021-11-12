import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { name, Review } = props.review;
    return (
        <div className="container">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text> {Review.slice(0, 200)} </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;