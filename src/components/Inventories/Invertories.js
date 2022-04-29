// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Inventories.css'

const Invertories = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }, [id])

    const handledeliver=()=>{
        const quantity=parseInt(product.quantity)-1
        if (quantity) {
            console.log('in if');
            fetch(`http://localhost:5000/product/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({quantity})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                
               
        }
    }

    const handleUpdate = event => {
        event.preventDefault()
        const quantity = parseInt(event.target.quantity.value) + parseInt(product.quantity)
        const quantityObj = { quantity }
        console.log(quantity);
        
        if (quantity) {
            setLoading(!loading);
            console.log('in if');
            fetch(`http://localhost:5000/product/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(quantityObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                event.target.reset()
               
        }
    }

    return (
        <div>
            <div className='container card p-5 m-4' >
                <div className='row'>
                    <div className='col-lg-6'><img src={product.image} alt="" /></div>
                    <div className='col-lg-6 p-3'>
                        <h3>Name: {product.name}</h3>
                        <h5>Supplier : {product.supplier}</h5>
                        <p>Details: {product.details}</p>
                        <p>Quantity:  {product.quantity}</p>
                    </div>
                </div>
            </div>
            {/* deliver button */}

            <button onClick={handledeliver} className='button p-3 w-50'>deliverd</button>

            {/* update */}
            <div onSubmit={handleUpdate} className="form-style m-5 ">
                <h1>update quantity</h1>
                <form>
                    <input type="text" name="quantity" placeholder="quantity" />

                    <input type="submit" value="update " />
                </form>
            </div>

            {/* manage inventory */}
            <div className='mb-3 mt-3'>
                <Link to='/manageInventory'>
                    <button className='button mx-auto p-4  w-75'>Go To Manage Inventory</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Invertories;