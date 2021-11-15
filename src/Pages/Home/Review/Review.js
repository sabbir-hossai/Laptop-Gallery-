import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { name, description
    } = props.review;
    return (
        <div className="container">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text> {description
                        } </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;