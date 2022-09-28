import React from "react";
import AppointForm from "../AppointForm/AppointForm";
import "./BookingCard.css";

const BookingCard = ({ bData, date }) => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="m-5 card p-5">
        <div className="text-center  ">
          <h4 className="text-green">{bData.title}</h4>
          <h6>{bData.time}</h6>
          <p>{bData.space}</p>
          <div>
            <button className=" btn btn-primary" onClick={openModal}>
              Book Appointment
            </button>
          </div>
        </div>
        <AppointForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          title={bData.title}
          date={date}
        ></AppointForm>
      </div>
    </div>
  );
};

export default BookingCard;
