import React from 'react';
import { Card } from 'react-bootstrap';
import './Supplier.css'

const SupplierFeedback = () => {
  return (
    <div>
      <h2 className='fs-3 fw-bold mt-5 mb-4'>Latest <span className='text-primary'>Supplier Feedback</span></h2>
     
       <div className='container card p-3 m-4' >
                <div className='row'>
                    <div className='col-lg-6'><img src="https://i.ibb.co/TvnZCBR/dell-laptop-500x500-intel-cor.jpg" alt="" /></div>
                    <div className='col-lg-6 p-3 mt-4'>
                        <h3> Name: MD Anamul Rahman</h3>
                        <h4>supply: Dell Laptop</h4>
                        <p>comment: I'm supply them dell laptop.They always want best companies laptop.they always provided best product.</p>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default SupplierFeedback;