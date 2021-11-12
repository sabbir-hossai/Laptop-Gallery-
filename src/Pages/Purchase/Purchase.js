import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/Firebasce/useAuth';
const axios = require('axios').default;

const Purchase = (props) => {

    const { user, } = useAuth();
    const { laptopId } = useParams();
    console.log(laptopId)

    const [purchaseLaptop, setPurchaseLaptop] = useState();


    useEffect(() => {
        fetch(`http://localhost:5000/popularlaptops/${laptopId}`)
            .then(res => res.json())
            .then(data => setPurchaseLaptop(data))
    }, [])

    console.log(purchaseLaptop)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://scary-treat-11337.herokuapp.com/confirms', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    };



    return (
        <div>
            <p>this is purchase laptopId:{laptopId}</p>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <div className="booking-container">
                        <div>
                            <h1 className="text-primary">Tourist info</h1>
                            <h4> Name: {user.displayName}      Email: {user.email}</h4>
                        </div>
                        <div className="mt-5 mb-5">
                            <h1 className="text-primary">packages info</h1>

                        </div>
                        <div className="container ">
                            <div className="package-container">

                                <div className='add-confirm'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type='text'{...register("name")} />
                                        <textarea type='text'{...register("description")} defaultValue />
                                        <input type='text' {...register("img")} />
                                        <input type='text' {...register("package_states")} />
                                        <input type="number" {...register("price")} />

                                        <input type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </Card>

            </CardGroup>
        </div>
    );
};

export default Purchase;