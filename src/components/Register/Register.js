import React, { useEffect, useState } from "react";
import login from "../../images/Group 140.png";
import { useDispatch } from "react-redux";
import {
  clearAuthErrors,
  postRegister,
} from "../../store/asyncMethods/AuthMethods";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

// const provider = new GoogleAuthProvider();

const Register = () => {
  const { loading, registerErrors, user } = useSelector((state) => state.user);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.map((error) => toast.error(error.msg));
      dispatch(clearAuthErrors());
    }
  }, [dispatch, registerErrors, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postRegister(state));
  };

  return (
    <div className="row">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="col-md-6">
        <div className="p-5 form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h4 className="text-center text-green">Register</h4>
              <label>Enter your name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={state.name}
                onChange={handleInputs}
                required
              />
              <label>Enter your e-mail:</label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputs}
                className="form-control"
                required
              />

              <label>Enter your password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                required
                value={state.password}
                onChange={handleInputs}
              ></input>
            </div>
            <div className="authSwip">
              Already have account?{" "}
              <Link to="/login" className="authSwipLink">
                Login account
              </Link>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  style={{ background: "gray", color: "#fff" }}
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary mt-3"
                >
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-end">
        <img src={login} alt="" className="img-fluid log-img "></img>
      </div>
    </div>
  );
};

export default Register;
