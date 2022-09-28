import React from "react";
import AppointInformation from "./AppointInformation/AppointInformation";
import Sidebar from "./Sidebar/Sidebar";
import Calendar from "react-calendar";
import { useState } from "react";

const Dashboard = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  console.log(appointments);

  const handleChange = (date) => {
    // setSelectedDate(date);

    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4">
        <h3 className="text-green pt-5">
          Select date to know the appointments:
        </h3>
        <Calendar onChange={handleChange} className="Calender  " />
      </div>
      <div className="col-md-5">
        <AppointInformation appointments={appointments}></AppointInformation>
      </div>
    </div>
  );
};

export default Dashboard;
