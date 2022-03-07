import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const Review = (props) => {
    const { name, description, star } = props.review;
    return (
        <div className="container">
            <Col>
                <Card className='card-shadow'>
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text> {description
                        } </Card.Text>
                        <Rating
                            initialRating={star}
                            readonly
                            emptySymbol="far fa-star star-color "
                            fullSymbol="fas fa-star star-color"
                        />
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;