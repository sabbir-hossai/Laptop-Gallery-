import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../image/login.jpg';
import useAuth from '../../Hooks/Firebasce/useAuth';
import './Login.css'

const Login = () => {
    const { loginUser } = useAuth();
    const [loginINfo, setLoginIngo] = useState({});


    const handelOnblurPassword = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginINfo };
        newLoginData[field] = value;
        setLoginIngo(newLoginData);

    }
    const handelLoginForm = e => {
        alert('are you sure')
        console.log(loginINfo)
        loginUser(loginINfo.email, loginINfo.password)

        e.preventDefault()
    }
    return (
        <div>
            <Container>
                <Row className="my-5">
                    <Col xs={12} sm={7} md={8}>
                        <img className='img-fluid' src={login} alt="" />
                    </Col>
                    <Col xs={12} sm={5} md={4}>
                        <Form onSubmit={handelLoginForm} className='loginForm'>
                            <div>
                                <h4>Login</h4>
                                <div>
                                    <input
                                        type="text"
                                        name='email'
                                        onBlur={handelOnblurPassword}
                                        placeholder='Your email'
                                    />
                                    <input
                                        name='password'
                                        type="password"
                                        onBlur={handelOnblurPassword}
                                        placeholder='Your password'
                                    />
                                </div>
                                <input className='btn btn-primary mt-2' type="submit" value="Login" />
                            </div>
                        </Form><br />
                        <Link to='/register'>
                            <Button style={{ textDecoration: 'none' }} variant="link">are you a new user? please register.</Button>
                        </Link>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;