import React from "react";
import Modal from "react-modal";
import "./AppointForm.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointForm = ({ modalIsOpen, closeModal, title, date }) => {
  const { user } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.service = title;
    // data.appointmentDate = date;
    // date.date.split("").slice(0, 10).join("");
    data.appointmentDate = date;
    data.created = new Date();

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment created");
          console.log("success");
        }
      });

    console.log(data);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 className="text-center text-green">{title}</h3>
        <p className="text-center">{date.toString()}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="your name"
              {...register("name", { required: true })}
              className="form-control m-3"
            />
            {errors.name && (
              <p className="text-danger">This field is required.</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="your phone"
              {...register("phone", { required: true })}
              className="form-control m-3"
            />
            {errors.phone && (
              <p className="text-danger">This field is required.</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Email"
              placeholder="your E-mail"
              {...register("Email", { required: true })}
              className="form-control m-3"
            />
            {errors.Email && (
              <p className="text-danger">This field is required.</p>
            )}
          </div>
          <div className="row form-group ">
            <div className="col-md-4">
              <select
                className="form-control"
                type="text"
                name="gender"
                placeholder="Select gender"
                {...register("gender", { required: true })}
              >
                <option value="Not set" disabled={true}>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <p className="text-danger">This field is required.</p>
              )}
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="number"
                name="age"
                placeholder="your age"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <p className="text-danger">This field is required.</p>
              )}
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="number"
                name="weight"
                placeholder="your weight"
                {...register("weight", { required: true })}
              />
              {errors.weight && (
                <p className="text-danger">This field is required.</p>
              )}
            </div>
          </div>
          {user?.email ? (
            <div className="text-right form-group button">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          ) : (
            <div
              style={{
                background: "tomato",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "48px",
                marginTop: "1.5rem",
                borderRadius: "4px",
              }}
              className="text-right form-group "
            >
              Please at first login your account for appointment.
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AppointForm;
