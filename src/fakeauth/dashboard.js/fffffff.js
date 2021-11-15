
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, } from 'react-bootstrap';
import useAuth from '../../Hooks/Firebasce/useAuth';
import DashboardItem from '../DashboardItem/DashboardItem';
import MyOrder from '../MyOrder/MyOrder';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import UserReview from '../UserReviesw/UserReview';
import AddProducts from '../AddProducts/AddProducts';


const Dashboard = () => {
    const { logout } = useAuth();

    let { path, url } = useRouteMatch();

    return (
        <div >
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <Row className='container'>
                <Col className='link' xs={6} md={4}>

                    <Link to='/home'><h5>Home</h5></Link>
                    <Link to={`${url}/makeAdmin`}><h5>Make Admin</h5></Link>
                    <Link to={`${url}/AddProduct`}><h5>Add Product</h5></Link>

                    <hr />
                    <Link to='/pay'><h5>Pay</h5></Link>
                    <Link to='/dashboard'><h5>My Order</h5></Link>
                    <Link to={`${url}/userReview`}><h5>Review</h5></Link>
                    <Link><button className='btn btn-link ' style={{ textDecoration: 'none', marginLeft: '-10px' }} onClick={logout}><h5>Logout</h5></button></Link>
                </Col>
                <Col xs={12} md={8}>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/:addProducts`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route exact path={`${path}/:userReview`}>
                            <UserReview></UserReview>
                        </Route>
                        <Route >

                        </Route>
                        <Route path={`${path}/:AddProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div >
    )
};

export default Dashboard;



fetch('http://localhost:5000/users/admin', {
    method: "PUT",
    headers: {
        "content-type": 'application/json'
    },
    body: JSON.stringify(data.emal)

})
    .then(res = res.json())
    .then(data => {
        console.log(data)
    })