import React from 'react';
import './Blog.css';
import '../MakeAppointment/Shared.css';
import BlogCard from '../BlogCard/BlogCard';
import caudy from '../../../images/Ellipse 1.png';
import john from '../../../images/Ellipse 2.png';

const blogData=[
    {
        img:caudy,
        name:"Dr. Caudy",
        date:"23 April 2022",
        title:"2 times of brush in a day can keep you healthy",
        description:"It is a long established fact that a render will be distracted by the readable content of a page when looking at it's layout."
    },
    {
        img:john,
        name:"Dr. John Mitchel",
        date:"3 April 2022",
        title:"The tooth cancer is taking a challenge",
        description:"It is a long established fact that a render will be distracted by the readable content of a page when looking at it's layout."
    }
]
const Blog = () => {
    return (
        <div className=' mt-5 container ' id="blog">
            <div className='text-center'>
                <h6 className='text-green'>Our blog</h6>
                <h1>From our blog news</h1>
            </div>
            <div className='row '>
              
              <div className='col-md-4 justify-content-center'>
             
             <div className='gradient  img-fluid mt-5 text-white '>
                  <div className='p-3 pt-5'>
                  <p>Rashed Kabir<br></br>22 Aug 2018</p>
                  <h5>Check at least a doctor in a year for your teeth</h5>
                  </div>
              </div>
             
              </div>
              <div className='col-md-8'>
                 <div className='row d-flex justify-content-center'>
                     {
                       blogData.map(data=><BlogCard data={data}></BlogCard>)
                     }
                 </div>
              </div>
              </div>
        </div>
    );
};

export default Blog;