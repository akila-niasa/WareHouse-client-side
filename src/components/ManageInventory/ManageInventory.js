import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Footer from '../Footer/Footer';
import SingleInventory from '../SingleInventory/SingleInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    // const [products, setProducts] = useInventories()
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleDelete=id=>{
        const proccessed=window.confirm("are you sure about that")
  if(proccessed){
    fetch(`http://localhost:5000/product/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        const remain=products.filter(product=>product._id!==id)
        setProducts(remain)
      }
     
    })
  }
    }

    // const handleSubmit = event => {
    //     event.preventDefault()
    //     const product = {
    //         name: event.target.name.value,
    //         supplier: event.target.name.value,
    //         quantity: event.target.quantity.value,
    //         image: event.target.image.value,
    //         details: event.target.details.value,
    //     };
    //     if (product) {
    //         fetch('http://localhost:5000/product', {
    //             method: 'POST', // or 'PUT'
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(product),
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log('Success:', data);
    //             })
    //     }
    //     window.location.reload();
    // }
    return (
        <div>
            <div className='container'>
                <h2 className='mx-auto mt-3 mb-4 fw-bold text-primary'>ManageInventory</h2>
                <div className='row'>
                    {
                        products.map(product => <SingleInventory key={product._id} product={product} handleDelete={handleDelete}></SingleInventory>)
                    }
                </div>
                <hr />
                
                <Link to='/addItem'>
                <button className='button mt-5 mb-5 px-5 py-4'>Add New Item</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default ManageInventory;