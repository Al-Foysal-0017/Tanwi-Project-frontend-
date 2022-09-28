import React from 'react';
import './Services.css';
import fluoride from "../../../images/001-dental.png";
import whitening from "../../../images/tooth.png";
import cavity from "../../../images/tooth (1).png";
import ServiceDetails from '../ServiceDetailes/ServiceDetails';
import '../MakeAppointment/MakeAppointment.css';

const serviceData=[
    {
        img:fluoride,
        title:'Fluoride Treatment',
        description:"Lorem ipsum"
    },
    {
        img:cavity,
        title:'Cavity Filling',
        description:"Lorem ipsum"
    },
    {
        img:whitening,
        title:'Teeth Whitening',
        description:"Lorem ipsum"
    }
]
const Services = () => {
    return (
        <div className='text-center mt-5 Service'> 
            <h6 className='text-green '> Our services</h6>
            <h2>Services we provide</h2>
            <div className='d-flex justify-content-center'>
            <section className='row w-75 mt-5 pt-5 pb-5 '>
                {
                   serviceData.map(data=><ServiceDetails data={data}></ServiceDetails>) 
                }
            </section>
            </div>
        </div>
    );
};

export default Services;