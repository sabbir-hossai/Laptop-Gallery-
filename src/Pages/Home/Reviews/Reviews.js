import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://guarded-journey-56459.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <h2 className="text-primary mt-5 mb-5">Recent Reviews</h2>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    reviews.map(review => <Review
                        review={review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;