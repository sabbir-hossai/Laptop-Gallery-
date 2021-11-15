import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PopularLptop from '../PopularLaptop/PopularLptop';


const PopularLaptops = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://guarded-journey-56459.herokuapp.com/popularlaptops')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <div className='container'>
            <h2 className="text-primary mt-5 mb-5">Most Popular Packages</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <PopularLptop
                        key={product._id}
                        product={product}></PopularLptop>)
                }
            </Row>
        </div>
    );
};

export default PopularLaptops;