import React from 'react';
import './ServiceDetailes.css';

const ServiceDetails = ({data}) => {
    return (
        <div className='col-md-4'>
            <img src={data.img} alt="" className='service-img'></img>
            <h6>{data.title}</h6>
            <small style={{color:"gray"}}>{data.description}</small>
        </div>
    );
};

export default ServiceDetails;