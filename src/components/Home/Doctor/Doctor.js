import React, { useEffect, useState } from "react";
import "./Doctor.css";
import "../MakeAppointment/Shared.css";
import DoctorDetails from "../DoctorDetails/DoctorDetails";

const Doctor = () => {
  const [dInformation, setDInformation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDInformation(data);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center dc-container" id="service">
      <div>
        <div className="d-flex justify-content-center mt-5">
          <h6 className="text-green">Our doctors</h6>
        </div>
        <div className=" row ">
          {[...dInformation]
            .reverse()
            .slice(0, 3)
            .map((info, index) => (
              <DoctorDetails key={index} data={info} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
