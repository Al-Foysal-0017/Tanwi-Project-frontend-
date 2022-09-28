import Navbar from '../../Home/Navbar/Navbar';
import './AppointmentHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/Mask Group 1.png';

const AppointmentHeader = ({handleChange}) => {
    return (
        <div className='app-container'>
            <Navbar></Navbar>
            <div style={{ height: "600px" }} class="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <div>
                        <h2>Appointment</h2>
                        <Calendar onChange={handleChange}  className="Calender"/>
                    </div>
                </div>
                <div className="col-md-6">
           <img src={chair} alt="" className='img-fluid'></img>
           </div> 
            </div>
        </div>

    );
};

export default AppointmentHeader;