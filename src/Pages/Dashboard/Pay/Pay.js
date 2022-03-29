import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm ';


const stripePromise = loadStripe('pk_test_51KbPmpLoCXg4B3WodIGmBty4Tc7DKDD2r4jLzLbHvFuA1mpGOuip8dl9AaLUf08exxL168NXuDNPomGLx6feNDSv00odl12mCS');

const Pay = () => {
    const { paymentId } = useParams();
    const [BuyLaptop, setBuyLaptop] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/confirmOrders/${paymentId}`)
            .then(res => res.json())
            .then(data => setBuyLaptop(data));
    }, [paymentId]);

    return (
        <div>
            <h1 className='margin'><span className='text-warning'>Pay</span> for your order   </h1>
            <p>{BuyLaptop.price}</p>
            <Row className='container'>
                <Col xs={12} md={8}>
                    {BuyLaptop?.price && <Elements stripe={stripePromise}>
                        <CheckoutForm
                            BuyLaptop={BuyLaptop}
                        />
                    </Elements>}
                </Col>
            </Row>

        </div>
    );
};

export default Pay;