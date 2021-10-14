import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleSignIn}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    // redirect to page user wanna go after login
    const googleSignInHandler = ()=>{
        googleSignIn()
        .then(result=>{
            history.push(redirect_url);
        })
    }
    return (
        <div>
            <Form className="w-50 mx-auto mt-5 text-start">
            <h1 className="text-primary mb-3">Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-success" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="btn btn-primary" type="submit">
                    signIn
                </Button>
            </Form>

            <h6>OR</h6>
            <Button onClick={googleSignInHandler} className="btn btn-secondary" type="submit">
                   signInWith google
                </Button>
        </div>
    );
};

export default Login;