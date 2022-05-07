import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import './MySingleItem.css'

const MySIngleItem = ({item,handleDelete}) => {
    const { name, supplier, quantity,price, image, details, _id } = item
   
    return (
        <div className='row'>
            
    <div className='container Card p-3 m-4' >
                <div className='row'>
                    <div className='col-lg-6'><img src={image} alt="" /></div>
                    <div className='col-lg-6 p-3'>
                        <h3>Name: {name}</h3>
                        <h5>Supplier:{supplier}</h5>
                        <p>Details: {details}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Price: {price}</p>
                        <Button onClick={()=>handleDelete(_id)} className='deletButton ms-1' >Delete</Button>
                    </div>
                </div>
            </div>

  
        </div>
    );
};

export default MySIngleItem;