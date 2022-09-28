import React from 'react';
import '../MakeAppointment/Shared.css';
import './Testimonial.css';
import henry from "../../../images/Ellipse 1.png";
import carol from "../../../images/Ellipse 2.png";
import joey from "../../../images/Ellipse 3.png";
import TestCard from '../TestCard/TestCard';

const testData=[
    {
        description:"It is a long established fact that a render will be distracted by the readable content of a page when looking at it's layout.",
        img:henry,
        name:"Winson Henry",
        place:"california"
    },
    {
        description:"It is a long established fact that a render will be distracted by the readable content of a page when looking at it's layout.",
        img:carol,
        name:"Carol Mallry",
        place:"california"
    },
    {
        description:"It is a long established fact that a render will be distracted by the readable content of a page when looking at it's layout.",
        img:joey,
        name:"Willium Joey",
        place:"california"
    }
]
const Testimonial = () => {
    return (
        <div className=' m-5 container' id="reviews">
            <div className='row'>
            <div className='col-md-6'>
            <h5 className='text-green'>Testimonial</h5>
            <h1>What's our patients<br/> say</h1>
            </div>
            <div className='quote col-md-6'>
            </div>
            </div>
           <div className=''>
           <div className='row pt-5 d-flex justify-content-center '>
              {
                  testData.map(data=><TestCard data={data}></TestCard>)
              }
            </div>
           </div>
        </div>
    );
};

export default Testimonial;