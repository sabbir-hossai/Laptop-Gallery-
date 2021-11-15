import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import login from '../../../image/login.jpg';
import useAuth from '../../Hooks/Firebasce/useAuth';
import './Login.css'

const Login = () => {
    const { userLogin, user, authError, isLoading } = useAuth();
    const [loginINfo, setLoginIngo] = useState({});
    const location = useLocation();
    const history = useHistory()


    const handelOnblurPassword = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginINfo };
        newLoginData[field] = value;
        setLoginIngo(newLoginData);

    }
    const handelLoginForm = e => {

        if (loginINfo.password.length <= 7) {
            alert('Password must be more than eight characters')
            return
        }
        userLogin(loginINfo.email, loginINfo.password, location, history)
        console.log(loginINfo)
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
                        {!isLoading && <Form onSubmit={handelLoginForm} className='loginForm'>
                            <div>
                                <h4>Login</h4>
                                <div>
                                    <input
                                        type="email"
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
                        </Form>}
                        {isLoading && <Spinner animation="border" />}
                        {user?.email && ['success'].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                login successfully
                            </Alert>
                        ))}
                        {authError && ['danger'].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                {authError}
                            </Alert>
                        ))}

                        <br />
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