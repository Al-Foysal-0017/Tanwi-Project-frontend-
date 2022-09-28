import React, { useEffect, useState } from "react";
import login from "../../images/Group 140.png";
import "./Login.css";
import { useDispatch } from "react-redux";
import {
  clearAuthErrors,
  postLogin,
} from "../../store/asyncMethods/AuthMethods";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loginErrors, loading } = useSelector((state) => state.user);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const userLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  };
  useEffect(() => {
    if (loginErrors.length > 0) {
      loginErrors.map((error) => toast.error(error.msg));
      dispatch(clearAuthErrors());
    }
  }, [dispatch, loginErrors]);

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
          <form onSubmit={userLogin}>
            <div className="form-group">
              <h4 className="text-center text-green">Login</h4>
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
              Are you new in this site?{" "}
              <Link to="/register" className="authSwipLink">
                Create account
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
                  onClick={userLogin}
                  className="btn btn-primary mt-3"
                >
                  Login
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

export default Login;
