import React from 'react';
import './BlogCard.css';

const BlogCard = ({data}) => {
    return (
        <div className='col-md-6 cards'>
            <div className='d-flex justify-content-around pt-3'>
              <img src={data.img} alt="" className='img-fluid blog-img'></img>
              <div>
                  <h6>{data.name}</h6>
                  <p>{data.date}</p>
              </div>        
            </div>
            <div className='pt-3'>
                  <h6>{data.title}</h6>
                  <p>{data.description}</p>
              </div>
        </div>
    );
};

export default BlogCard;