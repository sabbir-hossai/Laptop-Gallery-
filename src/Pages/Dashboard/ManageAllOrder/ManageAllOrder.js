import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/Firebasce/useAuth';
import DashboardItem from '../DashboardItem/DashboardItem';

const ManageAllOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/allOrders`;
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
        <div>
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <Row className='container'>
                <Col className='link' xs={6} md={4}>
                    <DashboardItem></DashboardItem>
                </Col>
                <Col xs={12} md={8}>

                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Laptop Name</th>
                                <th>Laptop brand</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr>

                                        <td> {order.laptopTitle
                                        }</td>
                                        <td> {order.brand}</td>
                                        <td>{order.price}</td>
                                        <td> <button onClick={() => handeldelete(order._id)} className='btn btn-dark'>X</button> </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </Table>


                </Col>
            </Row>

        </div>
    );
};

export default ManageAllOrder;