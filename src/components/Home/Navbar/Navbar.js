import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../../store/types/UserTypes";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: LOGOUT });
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto ">
              <Link to="/home" style={{ textDecorationLine: "none" }}>
                <li class="nav-item nav-link mx-3">Home</li>
              </Link>
              {/* <li class="nav-item">
                <a class="nav-link mx-3" href="#">About</a>
              </li> */}
              <Link to="/appointment" style={{ textDecorationLine: "none" }}>
                <li class="nav-item nav-link mx-3">Appointment</li>
              </Link>
              {user?.email && (
                <Link
                  to="/dashboard/appointment"
                  style={{ textDecorationLine: "none" }}
                >
                  {user?.role === "admin" ? (
                    <li class="nav-item nav-link mx-3">Admin</li>
                  ) : (
                    <li class="nav-item nav-link mx-3">Dashboard</li>
                  )}
                </Link>
              )}
              <li class="nav-item ">
                <a class="nav-link mx-3 " href="#reviews">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3 text-white" href="#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3 text-white" href="#contact">
                  Contact us
                </a>
              </li>
              <Link to="/login">
                <li class="nav-item">
                  {user?.email ? (
                    <button
                      onClick={logout}
                      style={{ background: "tomato", border: "none" }}
                      className="btn btn-primary pl-3"
                    >
                      Logout
                    </button>
                  ) : (
                    <button className="btn btn-primary pl-3">Login</button>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
