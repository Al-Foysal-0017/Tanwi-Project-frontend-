import React from 'react';
import './AppointInformation.css';

const AppointInformation = ({appointments}) => {
    console.log(appointments)
    return (
        <div className='information'>
            <h2 className='pb-5 m-3'>Appointments: {appointments.length}</h2>
            {
                appointments.map(data=> <h3 className='m-3'><li>{data.name}</li></h3>
                )
            }
        </div>
    );
};

export default AppointInformation;