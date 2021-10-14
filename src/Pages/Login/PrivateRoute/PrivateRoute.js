import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = (props) => {
    const {children,...rest}=props;
    const {user,isLoading}=useAuth();
    //loading refresh hold login data
    if(isLoading){
        return  <Spinner animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({location})=> user?.email ? children : <Redirect
             to={{
                 pathname:"/login",
                 state:{from:location}
             }}
            >

            </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;