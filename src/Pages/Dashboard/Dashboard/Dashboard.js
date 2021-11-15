
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, } from 'react-bootstrap';
import useAuth from '../../Hooks/Firebasce/useAuth';
import DashboardItem from '../DashboardItem/DashboardItem';
import MyOrder from '../MyOrder/MyOrder';
import './Dashboard.css'


const Dashboard = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/confirmOrders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handeldelete = id => {
        console.log(id)
        const url = `http://localhost:5000/confirmOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('are you want to delete')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
                console.log(data)
            })
    }


    return (
        <div >
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <Row className='container'>
                <Col className='link' xs={6} md={4}>
                    <DashboardItem></DashboardItem>
                </Col>
                <Col xs={12} md={8}>

                    <MyOrder></MyOrder>


                </Col>
            </Row>
        </div >
    )
};

export default Dashboard;