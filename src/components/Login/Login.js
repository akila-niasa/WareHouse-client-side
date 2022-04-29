import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Login.css'
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    let location = useLocation();
    let errorElement
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading || sending) {
        return <Loading />
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            alert('Please enter your email');
        }
    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <div className='container '>
                <div className=' card w-50 mx-auto mt-5 p-5 mb-5'>
                    <h2 className='text-primary fw-bold text-center mt-4 mb-3'>Please Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        {errorElement}


                        <Button className='button' variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                    <p className=''>Forgot Password?<button onClick={resetPassword} className='btn btn-link text-primary text-decoration-none '>Reset Now</button></p>

                    <p>New in My Site? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Login;