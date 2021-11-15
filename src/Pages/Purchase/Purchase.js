import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/Firebasce/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './Purchase.css';
const axios = require('axios').default;


const Purchase = (props) => {

    const { user, } = useAuth();
    const { laptopId } = useParams();
    console.log(laptopId)

    const [purchaseLaptop, setPurchaseLaptop] = useState();


    useEffect(() => {
        fetch(`https://guarded-journey-56459.herokuapp.com/popularlaptops/${laptopId}`)
            .then(res => res.json())
            .then(data => setPurchaseLaptop(data))
    }, [])

    console.log(purchaseLaptop)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://guarded-journey-56459.herokuapp.com/confirmOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className=' '>
            <Navigation></Navigation>
            <div className='  mt-3'>
                <h1 className="text-primary">Package details</h1>

            </div>
            <div className='container mt-2'>
                <CardGroup>
                    <Card>
                        <Card.Img style={{ width: '70%' }} variant="top" src={purchaseLaptop?.img} />

                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {purchaseLaptop?.name}</Card.Title>

                            <Card.Text>
                                <h5>Price: {purchaseLaptop?.price}</h5>
                            </Card.Text>
                            <Card.Text className='marginLeft'>
                                <span className='font-weight-bold'>Brand:</span> {purchaseLaptop?.brand}
                            </Card.Text>
                            <Card.Text className='marginLeft'>
                                <span className='font-weight-bold'>Description:</span> {purchaseLaptop?.description}.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </div>


            <div className="booking-container">

                <div className="mt-1 mb-2">
                    <h1 className="text-primary">packages info</h1>

                </div>
                <div className="container ">
                    <div className="package-container">

                        <div className='add-confirm'>
                            <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>
                                <input type='text'{...register("name")} defaultValue={user?.displayName} />
                                <input type='text'{...register("laptopTitle")} defaultValue={purchaseLaptop?.name} />
                                <input type='url' {...register("img")} defaultValue={purchaseLaptop?.img} />
                                <input type='text' {...register("brand")} defaultValue={purchaseLaptop?.brand} />
                                <textarea type='text'{...register("description")} defaultValue={purchaseLaptop?.description} />
                                <input type="price" {...register("price")} defaultValue={purchaseLaptop?.price} />
                                <input type="email" {...register("email")} defaultValue={user?.email} />

                                <input className='btn-primary' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;