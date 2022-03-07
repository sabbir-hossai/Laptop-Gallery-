import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './popularLaptop.css';
const PopularLptop = (props) => {
    const { _id, name, img, price, description, brand } = props.product;
    return (
        <div className="container">
            <Col>
                <div className='card-shadow'>
                    <div className='opacity  '>
                        <img src="" alt="" />
                        <Card.Img className='laptopImg' variant="top" src={img} />
                        <Card.Body >
                            <Card.Title> {name}</Card.Title>
                            <Card.Text>Price: {price} </Card.Text>
                            {/* <Card.Text className='PackageText'> {description.slice(0, 150)} </Card.Text> */}
                            {/* <Link to={`/purchase/${_id}`}><button className="btn btn-primary">Purchase here</button></Link> */}
                        </Card.Body>
                        <Link to={`/purchase/${_id}`}><button className="btn btn-primary center  ">Purchase here</button></Link>
                    </div>
                </div>
            </Col>

        </div>
    );
};

export default PopularLptop;