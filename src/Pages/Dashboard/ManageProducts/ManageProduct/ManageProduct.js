import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { _id, name, img, price, description, brand, products, setProducts } = props.product;

    const handeldelete = id => {
        console.log(id)
        const url = `https://guarded-journey-56459.herokuapp.com/popularlaptops/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('are you want to delete')
                    const remaining = products.filter(order => order._id !== id);
                    setProducts(remaining)
                }
                console.log(data)
            })
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text>Price: {price} </Card.Text>
                        <Card.Text> {description.slice(0, 200)} </Card.Text>
                        <button onClick={() => handeldelete()} className="btn btn-primary">Delete product</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProduct;