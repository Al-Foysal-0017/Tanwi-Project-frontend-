import React from 'react';
import './Shared.css';
import './MakeAppointment.css';
import doctor from "../../../images/5790-removebg.png";

const MakeAppointment = () => {
    return (
        <div className='mt-5  ' style={{height:"310px"}}>
            <div className='appoint-background  '>
             <div className='row container mt-5 pt-5'>
            <div className='col-md-5'>
               <img src={doctor} alt="" className='img-fluid doctor'></img>
            </div>
            <div className='col-md-7'>
              <h5 className='text-green'>Appointment</h5>
              <div className='text-white'>
              <h1>Make an Appointment<br></br>today</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
              </div>
            </div>
        </div>
        </div>
       
        </div>
    );
};

export default MakeAppointment;