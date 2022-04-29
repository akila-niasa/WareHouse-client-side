import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    let location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (password !== confirmPassword) {

          toast.error("your password don't match")

        }
        else {
            createUserWithEmailAndPassword(email, password)
        }
    }

    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        console.log(error);
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='container Card w-50 mx-auto p-5 mt-5 mb-5'>
            <h2 className='text-primary fw-bold text-center mt-4 mb-3'>Please Registration</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
               
                <Button className='Button' variant="primary" type="submit">
                    Submit
                </Button>
                {errorElement}
                <Toaster/>

            </Form>


            <p>Already have an account? <Link to="/login" className='text-primary mt-5 pe-auto text-decoration-none'>Please Login</Link> </p>
            <SocialLogin/>
        </div>
    );
};

export default Register;