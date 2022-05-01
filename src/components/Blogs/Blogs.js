import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
     <div>
            <div className='border p-3 m-5 rounded shadow'>
            <h2>Difference between javascript and nodejs</h2>
            <p><span className='fw-bold'>Javascript</span> is a Programming language.It used for any client side coding.It is run inside the browser.</p>
            <p><span className='fw-bold'>nodejs</span> is a server side coding for javascript.It used for performing any non blocking operation.It runs outsite the browser</p>
        </div>
        {/* <div  className='border p-3 m-5 rounded shadow'>
            <h2> When should you use nodejs and when should you use mongodb</h2>
            <p></p>
        </div> */}
        <div className='border p-3 m-5 rounded shadow'> <h2>Differences between sql and nosql databases.</h2>
        <p><span className='fw-bold'>SQL</span> is used in Relational Database Management system.It's structuret data can be stored in tables.The Schemas are static.</p>
        <p><span className='fw-bold'>NOSQL</span> is used in Non-Relational,Distributed Database Management system.Using JSON data,Unstructured data can be stored.The Schemas are dynamic.</p>
        </div>
        <div className='border p-3 m-5 rounded shadow'>
            <h2>What is the purpose of jwt and how does it work</h2>
            <p>JWT is full form of JSON Web Token.It is used to share security information between client side and a server side.</p>
            <p>Client request to sign in the client side,Client side give that to API.it create a jwt token and return a jwt.After that,client sign in in side.</p>
        </div>
        
        <Footer/>
     </div>
    );
};

export default Blogs;