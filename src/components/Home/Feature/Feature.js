import React from 'react';
import './Feature.css';
import service from '../../../images/Mask Group 3.png';

const Feature = () => {
    return (
        <div className='row mt-5 feature'>
            <div className='col-md-5 d-flex justify-content-end'>
            <img src={service} alt=" " className='featuredImg img-fluid'></img>
            </div>
            <div className='col-md-7'>
              <h1> Exceptional dental <br/>care,on your term</h1>
              <small>
                  It is a long established fact that a render will be distracted by the readable content of a page when looking at it's layout.
              </small>
            </div>
        </div>
    );
};

export default Feature;