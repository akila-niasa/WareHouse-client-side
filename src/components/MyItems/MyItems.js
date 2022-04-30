import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const[user]=useAuthState(auth)
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[user.email])
    return (
        <div>
            {
                items.map(item=><div key={item._id}>
                    {item.name}
                </div>)
            }
        </div>
    );
};

export default MyItems;