import React from 'react';
import './TestCard.css';
import '../MakeAppointment/Shared.css'

const TestCard = ({data}) => {
    return (
        <div className='col-md-4 d-flex justify-content-center  card-container'>
            <div className='test-card'>
            <p>{data.description}</p>
            <div className='row  d-flex justify-content-center '>
               <div className='col-md-3'>
                  <img src={data.img} alt="" className='test-img img-fluid'></img>
               </div>
               <div className='col-md-7'>
                   <h6 className='text-green'>{data.name}</h6>
                   <small>{data.place}</small>
               </div>
            </div>
            </div>
        </div>
    );
};

export default TestCard;