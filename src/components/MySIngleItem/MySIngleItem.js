import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './MySingleItem.css'

const MySIngleItem = ({item}) => {
    const { name, supplier, quantity, image, details, _id } = item

    
 
  
    return (
        <div className='row'>
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
            
                    <Button className='deletButton ms-1' >Delete</Button>
              
            </Card.Body>
        </Card>
    </div>
        </div>
    );
};

export default MySIngleItem;