import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const[products,setProducts]=useInventories()
   
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/product`)
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])
    return (
        <div>
            <Banner/>
            {/* inventories */}
            <div className='container'>
                <h1 className='fw-bold mx-auto title m-4'>Our Inventories</h1>
                <div className='row mb-3'>
                    {
                       products.slice(0,6).map(product=><Products key={product._id} product={product}></Products>)
                    }
                </div>
            </div>
            <div>
                <Link to='/manageInventory'>
                <button className='invenButton mx-auto p-4 mb-3 mt-3 w-75'>Go To MAnage Inventory</button>
                </Link>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;