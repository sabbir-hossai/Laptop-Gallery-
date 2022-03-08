import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AllProduct from '../../AllProducts/AllProduct/AllProduct';
import ManageProduct from './ManageProduct/ManageProduct';

const axios = require('axios').default;

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://guarded-journey-56459.herokuapp.com/popularlaptops')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data)
        axios.post('https://guarded-journey-56459.herokuapp.com/productAdd', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };


    return (
        <div>
            <Row className='container'>
                <Col xs={12} md={8}>
                    <h2>Add a product</h2>
                    <div className="package-container">
                        <div className='add-confirm'>
                            <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>
                                <input type='text'{...register("name")} placeholder='Product Name' />
                                <input type="price" {...register("price")} placeholder='Product Price' />
                                <input type='url' {...register("img")} placeholder='img url' />
                                <input type='text' {...register("brand")} placeholder='Product brand' />
                                <textarea type='text'{...register("description")} placeholder='Product description' />



                                <input className='btn-primary' type="submit" />
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <div className='container'>
                <h2 className="text-primary mt-5 mb-5">All Products</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <ManageProduct
                            setProducts={setProducts}
                            products={products}
                            key={product._id}
                            product={product}
                        ></ManageProduct>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ManageProducts;