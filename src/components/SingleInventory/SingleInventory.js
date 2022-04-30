
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleInventory.css'

const SingleInventory = ({ product,handleDelete }) => {
    const { name, supplier, quantity, image, details, _id } = product

    return (
        <div className='col-lg-4 col-md-6 g-2'>
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold'>Supplier</span>: {supplier}
                    </Card.Text>
                    <Card.Text>
                       <span className='fw-bold'> Details</span>: {details}
                    </Card.Text>
                    <Card.Text>
                       <span className='fw-bold'>
                       Quantity</span>:  {quantity}
                    </Card.Text>
                   
                        <Button className='button me-1' >Add Item</Button>
                        <Button onClick={()=>{handleDelete(_id)}} className='deletButton ms-1' >Delete</Button>
                  
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleInventory;