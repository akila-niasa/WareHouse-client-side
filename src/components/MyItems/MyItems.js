import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import MySIngleItem from '../MySIngleItem/MySIngleItem';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [render, setRender] = useState(false)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://secure-sands-04849.herokuapp.com/addProduct?email=${user?.email}`
        ,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem("access-token")}`,
              },
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            }
            )
    }, [user?.email, render])
    const handleDelete = id => {

        const processed = window.confirm("are you want to delete")
        if (processed) {
            fetch(`https://secure-sands-04849.herokuapp.com/addProduct/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log('rerender');
                    console.log(data);
                    setRender(!render)
                })
        }
    }
    return (
        <div>
            <div className='container'>
                {
                    items.map(item => <MySIngleItem key={item._id} item={item} handleDelete={handleDelete}></MySIngleItem>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default MyItems;