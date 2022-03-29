import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Pages/Hooks/Firebasce/useAuth';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <Spinner animation="border" /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;