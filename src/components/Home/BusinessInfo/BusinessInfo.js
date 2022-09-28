import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData=[
    {title:"Opening hours",
    description:"9AM-10PM",
    icon:faClock,
    background:"primary"
    },
    {title:"Our location",
    description:"Dattapara,Laxmipur",
    icon:faMapMarker,
    background:"dark"
    },
    {title:"Contuct us",
    description:"0171*******",
    icon:faPhone,
    background:"primary"
    }
]


const BusinessInfo = () => {
    return (
     
       <div className='container d-flex justify-content-center'>
         
        <div className="row  w-85" >
         {
           infoData.map(info=><InfoCard info={info}></InfoCard>)
         }
         </div>
      
       </div>
     
    );
};

export default BusinessInfo;