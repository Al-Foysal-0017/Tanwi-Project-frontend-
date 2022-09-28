import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
  {
    title: "Teeth Orthodontics",
    time: "8Am to 11:30AM",
    space: "10 spaces available",
  },
  {
    title: "Cosmetic Dentistry",
    time: "9Am to 1.00PM",
    space: "10 spaces available",
  },
  {
    title: "Teeth Cleaning",
    time: "11:00 to 1.30PM",
    space: "10 spaces available",
  },
  {
    title: "Cavity Protection",
    time: "11:00 to 1.30PM",
    space: "10 spaces available",
  },
  {
    title: "Teeth Orthodontics",
    time: "8Am to 11:30",
    space: "10 spaces available",
  },
  {
    title: "Teeth Orthodontics",
    time: "9.00AM to 12.00PM",
    space: "10 spaces available",
  },
];
const BookAppointment = ({ date }) => {
  return (
    <div className="pt-5">
      <div>
        <h3 className="text-green text-center">
          Appointment available on {date.toDateString()}
        </h3>
      </div>
      <div className="row">
        {bookingData.map((data) => (
          <BookingCard bData={data} date={date}></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
