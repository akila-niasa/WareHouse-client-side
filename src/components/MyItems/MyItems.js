import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MySIngleItem from '../MySIngleItem/MySIngleItem';

const MyItems = () => {
    const[user]=useAuthState(auth)
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[user.email])
    return (
        <div className='container'>
            {
                items.map(item=><MySIngleItem  key={item._id} item={item}></MySIngleItem>)
            }
        </div>
    );
};

export default MyItems;