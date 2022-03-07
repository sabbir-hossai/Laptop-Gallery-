import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://guarded-journey-56459.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='reviewsBody'>
            <div className='container'>
                <h2 className="text-primary mt-5 mb-5">Recent <span className='text-warning'>Reviews</span> </h2>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        reviews.slice(0, 6).map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Reviews;