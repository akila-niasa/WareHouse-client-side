import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FiSend } from "react-icons/fi";
import './ContractUs.css'

const ContractUs = () => {
    return (
        <div className='contact'>
            
            <Form className='mx-auto'>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-light fs-4'>Email address</Form.Label>
                    <Form.Control className='w-50 mx-auto' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='text-light fs-4'>Message</Form.Label>
                    <Form.Control  className='w-50 mx-auto'  as="textarea" placeholder='what you want' rows={3} />
                </Form.Group>
                <Button className='button mb-5' variant="primary" type="submit">
                    Send <FiSend />
                </Button>
            </Form>
        </div>
    );
};

export default ContractUs;