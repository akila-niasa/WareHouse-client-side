import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInventories from '../../hooks/useInventories';
import Footer from '../Footer/Footer';
import './AddItems.css'

const AddItems = () => {
    const[user]=useAuthState(auth)
    console.log(user);
    const handleSubmit = event => {
        event.preventDefault()
        const product = {
            name: event.target.name.value,
            supplier: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
            image: event.target.image.value,
            details: event.target.details.value,
            email:user.email
        };
        if (product) {
            fetch('https://secure-sands-04849.herokuapp.com/product', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
        }
        window.location.reload();
    }
    return (
        <div>
                <div className='m-5'>
                    <h2 className='mx-auto mt-3 fw-bold text-primary'>If You Want Add New Product</h2>
                    <form onSubmit={handleSubmit}  className="form mt-5 mx-auto" >
                        <label>
                            <span>Enter Product Name</span><input type="text" name="name" />
                        </label>
                        <label>
                            <span>Supplier Name</span><input type="text" name="supplierName" />
                        </label>
                        <label>
                            <span>Quantity</span><input type="text" name="quantity"  />
                        </label>
                        <label>
                            <span>Price</span><input type="text" name="price"  />
                        </label>
                        <label >
                            <span>Image</span><input type="text"
                                name="image"
                                placeholder="url" />
                        </label>
                        <label >
                            <span>Details</span><textarea name="details" onkeyup="adjust_textarea(this)" ></textarea>
                        </label>
                        <label>
                            <span> </span><input type="submit" value="Add New Item" />
                        </label>
                    </form>
                </div>
                <Footer/>
        </div>
    );
};

export default AddItems;