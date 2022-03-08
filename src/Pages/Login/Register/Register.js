import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../image/login.jpg';
import useAuth from '../../Hooks/Firebasce/useAuth';
import './Register.css'

const Register = () => {
    const { userRegister, isLoading, user, authError } = useAuth();
    const [loginINfo, setLoginIngo] = useState({});


    const location = useLocation();
    const navigate = useNavigate()

    const handelOnblurPassword = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginINfo };
        newLoginData[field] = value;
        setLoginIngo(newLoginData);

    }
    const handelLoginForm = e => {
        if (loginINfo.password !== loginINfo.password2) {
            alert('your did not match')
            return
        }
        if (loginINfo.password.length <= 7) {
            alert('Password must be more than eight characters')
            return
        }

        userRegister(loginINfo.email, loginINfo.password, loginINfo.name, navigate)
        alert('successfully register')


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
                        {!isLoading ? <Form onSubmit={handelLoginForm} className='loginForm'>
                            <div>
                                <h4>Register</h4>
                                <div>
                                    <input
                                        type="text"
                                        name='name'
                                        onBlur={handelOnblurPassword}
                                        placeholder='Your name'
                                    />
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
                                    <input
                                        name='password2'
                                        type="password"
                                        onBlur={handelOnblurPassword}
                                        placeholder='again password'
                                    />
                                </div>
                                <input className='btn btn-primary mt-2' type="submit" value="Register" />
                            </div>
                        </Form> : <Spinner animation="border" />}
                        {user?.email && ['success'].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                User created successfully
                            </Alert>
                        ))}
                        {authError && ['danger'].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                {authError}
                            </Alert>
                        ))}
                        <br />
                        <Link to='/login'>
                            <Button style={{ textDecoration: 'none' }} variant="link">Already you are register?Please Login </Button>
                        </Link>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;