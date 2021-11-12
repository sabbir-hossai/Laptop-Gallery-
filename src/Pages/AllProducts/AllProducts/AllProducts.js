import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularlaptops')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
                <h2 className="text-primary mt-5 mb-5">All Products</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <AllProduct product={product}></AllProduct>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default AllProducts;