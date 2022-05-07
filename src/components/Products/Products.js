import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { name, supplier, quantity,price, image, details, _id } = product
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
                       Price</span>: $ {price}
                    </Card.Text>
                    <Card.Text>
                       <span className='fw-bold'>
                       Quantity</span>:  {quantity}
                    </Card.Text>
                    <Link to={`/inventory/${_id}`}>
                        <Button className='button'>Go to update</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Products;