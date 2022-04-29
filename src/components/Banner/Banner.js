import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className=' banner w-100 h-100'>
            <h1 className=' p-5 mx-5 mb-5 text-light'>Choose Your Laptop</h1>
            <div className='p-5'>
                <Link to='/blogs'>
                <button className='banner-btn'>
                    Blogs
                </button>
                </Link>
            </div>

        </div>
    );
};

export default Banner;