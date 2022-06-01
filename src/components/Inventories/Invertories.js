// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Inventories.css'


const Invertories = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [stock,setStock]=useState(0)
    // const [rerender, setRerender] = useState(false)
    // const [loading, setLoading] = useState(false);
    // const[quantity,setquantity]=useState(0)
    // const[rerender,setRerender]=useState(false)
    useEffect(() => {
       
        fetch(`https://secure-sands-04849.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data)
                setStock(data.quantity)
            })
    }, [id])
    // console.log(product);

    const handledeliver=()=>{
        const updatedQuantity=parseInt(stock)-1
        setStock(updatedQuantity)
        if (updatedQuantity) {
            console.log('in if');
            fetch(`https://secure-sands-04849.herokuapp.com/product/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({updatedQuantity})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                
            //    setRerender(!rerender)
        }
    }

    const handleUpdate = event => {
        event.preventDefault()
   
        const updatedQuantity = parseInt(event.target.quantity.value) + parseInt(stock)
        const quantityObj = { updatedQuantity }
        // console.log(quantity);
        setStock(updatedQuantity)
        if (updatedQuantity) {
           
            // console.log('in if');
            fetch(`https://secure-sands-04849.herokuapp.com/product/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(quantityObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                   
                   
                })
                // setRerender(!rerender);
                console.log('render is successfull');
                event.target.reset()
               
        }
        
    }

    return (
        <div>
            <h2>The Product Id:{id}</h2>
            <div className='container card p-5 m-4' >
                <div className='row'>
                    <div className='col-lg-6'><img src={product.image} alt="" /></div>
                    <div className='col-lg-6 p-3'>
                        <h3>Name: {product.name}</h3>
                        <h5>Supplier : {product.supplier}</h5>
                        <p>Details: {product.details}</p>
                        <p>Price: {product.price}</p>
                    
                            <p>Quantity:  {stock}</p>
                    </div>
                </div>
            </div>
            {/* deliver button */}

            <button onClick={handledeliver} className='button p-3 w-50'>deliverd</button>

            {/* update */}
            <div  className="form-style m-5 ">
                <h1>update quantity</h1>
                <form onSubmit={handleUpdate}>
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