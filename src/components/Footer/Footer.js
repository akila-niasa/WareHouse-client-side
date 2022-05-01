import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
       <div>
            <footer className='footer container-fluid  w-100 py-8 mt-8'>
        <div className="row">
        <div className='text-center col-lg-4 text-light  p-10 mt-3  mb-4'>
         <h3> Contract</h3>
          <p>Location: 500/4 Dhanmondi Road,Dhaka</p>
  
           <p> Mail: ino@gmail.com</p>
  
          <p> Tel: 123456789</p>
           
        </div>
        <div className='text-center col-lg-4 text-light  p-10 mt-3  mb-4'>
        <h3 className='fw-bold'>Quick LINK</h3>
            <br />
            <Link className='text-decoration-none' to='/'>Home</Link>
            <br />
            <Link className='text-decoration-none' to='/'>About Us</Link>
            <br />
            <Link className='text-decoration-none' to='/'>Get Start</Link>
        </div>
       
        <div className='text-center col-lg-4  text-light  p-10  d-flex mt-3 justify-content-center'>
        <h3 className='fw-bold'>Follow Us</h3>
        <br />
       <div>
       <a href='https://github.com/akila-niasa?tab=repositories'><img className='w-25 h-25 me-3' src="https://www.shareicon.net/data/256x256/2015/08/11/83538_facebook_512x512.png" alt="" /></a>
        <a href='https://github.com/akila-niasa?tab=repositories'><img className='w-25 h-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbmlO8vg3r4q4Ule3u4XvSKLXZP4mNjE4Uw&usqp=CAU" alt="" /></a>
       </div>
        </div>
        </div>
  
  <div className='text-light'>
  All Rights Reserved By &copy; Laptop Store | 2020-2026
  </div>
      </footer>
       </div>
    );
};

export default Footer;