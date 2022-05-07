import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Banner from '../Banner/Banner';
import ContractUs from '../ContractUs/ContractUs';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import SupplierFeedback from '../SupplierFeedback/SupplierFeedback';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useInventories()

    // useEffect(()=>{
    //     fetch(`https://secure-sands-04849.herokuapp.com/product`)
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])
    return (
        <div>
            <Banner />
            {/* ---------------
            inventories
            -------------------- */}
            <div className='container-fluid'>
                <h1 className='fw-bold mx-auto title mt-4 mb-4'>Our <span className='text-primary'>Inventories</span></h1>
                <div className='row mb-3'>
                    {
                        products.slice(0, 6).map(product => <Products key={product._id} product={product}></Products>)
                    }
                </div>
            </div>
            {/*-----------
         manage inventory
         ----------- */}
            <div>
                <Link to='/manageInventory'>
                    <button className='invenButton mx-auto p-4 mb-3 mt-3 w-75'>Go To MAnage Inventory</button>
                </Link>
            </div>
            {/* --------------------------supplier feed back ---------------*/}
            <div>
                <SupplierFeedback />
            </div>
            {/* --------------
            contact
             ----------------- */}
            <div >
                <h2 className='fw-bold text-primary mt-5'><span className='text-color'>Contract </span> Us</h2>
                <ContractUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;