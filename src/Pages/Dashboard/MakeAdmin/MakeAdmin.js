import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/Firebasce/useAuth';
import DashboardItem from '../DashboardItem/DashboardItem';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [email, setEmail] = useState('')
    const handelOnblure = e => {

        setEmail(e.target.value);
    }

    const handelAdmin = e => {
        const user = { email };
        console.log(user)
        fetch('https://guarded-journey-56459.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('successfully added a admin')
                }
                console.log(data)
            })
        e.preventDefault()
    }

    return (
        <div  >
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <h1>Make an Admin</h1>
            <Row className='container'>
                <Col className='link' xs={6} md={4}>
                    <DashboardItem></DashboardItem>
                </Col>
                <Col xs={12} md={8}>
                    <form onClick={handelAdmin} action="">
                        <input onBlur={handelOnblure} type="text" name='email' placeholder='your email' />
                        <button type='submit'>submit</button>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;