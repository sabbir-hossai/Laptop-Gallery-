import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    const { _id, name, img, price, description, brand } = props.product;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <Card.Text>Price: {price} </Card.Text>
                        <Card.Text> {description.slice(0, 200)} </Card.Text>
                        <Link to={`/purchase/${_id}`}><button className="btn btn-primary">Purchase here</button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllProduct;