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
        fetch(`https://secure-sands-04849.herokuapp.com/product`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleDelete=id=>{
        const proccessed=window.confirm("are you sure about that?")
  if(proccessed){
    fetch(`https://secure-sands-04849.herokuapp.com/product/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        const remainProduct=products.filter(product=>product._id!==id)
        setProducts(remainProduct)
      }
     
    })
  }
    }

  
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