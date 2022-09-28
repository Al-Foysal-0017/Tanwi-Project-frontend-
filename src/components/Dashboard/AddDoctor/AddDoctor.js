import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  let navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  console.log(file);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", info.email);
    formData.append("name", info.name);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    };
    try {
      const { data } = await axios.post("/addDoctor", formData, config);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div style={{ marginTop: "5rem" }} className="col-md-9">
        <div>
          <h3>Add a doctor:</h3>
        </div>
        <form style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onBlur={handleBlur}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              class="form-control"
              name="name"
              id="exampleInputPassword1"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Upload an image</label>
            <input
              onBlur={handleChange}
              type="file"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="image"
            />
          </div>
          <button
            style={{ margin: "2rem 0 0 8px" }}
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
