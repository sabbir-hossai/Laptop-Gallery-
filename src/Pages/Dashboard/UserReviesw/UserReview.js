import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/Firebasce/useAuth';
import DashboardItem from '../DashboardItem/DashboardItem';

const UserReview = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://guarded-journey-56459.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review successfully added');
                    reset();
                }
            })
    };
    return (
        <div  >
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <h1>Review now</h1>
            <Row className='container'>
                <Col className='link' xs={6} md={4}>
                    <DashboardItem></DashboardItem>
                </Col>
                <Col xs={12} md={8}>
                    <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>
                        <input type='text'{...register("name")} placeholder='Your name' />
                        <input type='text'{...register("laptopTitle")} defaultValue={user?.email} />
                        <textarea type='text'{...register("description")} placeholder='Type your review' />
                        <input className='btn-primary' type="submit" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default UserReview;