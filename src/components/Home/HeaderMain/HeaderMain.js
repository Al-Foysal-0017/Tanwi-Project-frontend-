import React from 'react';
import chair from '../../../images/Mask Group 1.png';

const HeaderMain = () => {
    return (
        <div style={{height:"600px"}} class="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            <h1>Your New Smile <br/> Starts Here</h1>
               <p className="text-secondary">lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text</p>
            </div>
           <div className="col-md-6">
           <img src={chair} alt="" className='img-fluid'></img>
           </div>  
        </div>
    );
};

export default HeaderMain;