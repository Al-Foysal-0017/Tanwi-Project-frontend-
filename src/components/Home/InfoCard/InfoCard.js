import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    
    return (
        
            <div  className="col-md-4 " >
              <div className='info'>
              <div className={`info-${info.background} info-container justify-align-center`}>
              <div className='row d-flex justify-content-center' >
                 <div className="col-md-4 ">
                    <FontAwesomeIcon className='icon' icon={info.icon}/>
                </div>
                <div className="col-md-7 ">
                    <h6>
                       {info.title}
                    </h6>
                    <small style={{fontSize:"smaller"}}>
                       {info.description}
                     </small>
                </div>
              </div> 
              </div>
              </div>
            </div>
       
    );
};

export default InfoCard;