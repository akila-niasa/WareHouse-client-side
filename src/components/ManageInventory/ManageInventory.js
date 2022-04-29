import React from 'react';
import useInventories from '../../hooks/useInventories';
import Footer from '../Footer/Footer';
import SingleInventory from '../SingleInventory/SingleInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useInventories()
    const handleSubmit = event => {
        event.preventDefault()
        const product = {
            name: event.target.name.value,
            supplier: event.target.name.value,
            quantity: event.target.quantity.value,
            image: event.target.image.value,
            details: event.target.details.value,
        };
        if (product) {
            fetch('http://localhost:5000/product', {
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
    }
    return (
        <div>
            <div className='container'>
                <h2 className='mx-auto mt-3 mb-4 fw-bold text-primary'>ManageInventory</h2>
                <div className='row'>
                    {
                        products.map(product => <SingleInventory key={product._id} product={product}></SingleInventory>)
                    }
                </div>
                <hr />
                <div className='m-5'>
                    <h2 className='mx-auto mt-3 fw-bold text-primary'>If You Want Add New Product</h2>
                    <form onSubmit={handleSubmit} className="form mt-5 mx-auto" >
                        <label for="field1">
                            <span>Enter Product Name</span><input type="text" name="name" required="true" />
                        </label>
                        <label for="field2">
                            <span>Supplier Name</span><input type="text" name="supplierName" required="true" />
                        </label>
                        <label for="field3">
                            <span>Quantity</span><input type="text" name="quantity" required="true" />
                        </label>
                        <label for="field3">
                            <span>Image</span><input type="text"
                                name="image"
                                placeholder="url" required="true" />
                        </label>
                        <label for="field4">
                            <span>Details</span><textarea name="details" onkeyup="adjust_textarea(this)" required="true"></textarea>
                        </label>
                        <label>
                            <span> </span><input type="submit" value="Add New Item" />
                        </label>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ManageInventory;