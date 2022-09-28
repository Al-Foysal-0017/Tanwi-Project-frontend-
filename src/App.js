import "./App.css";
import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
// import { useSelector } from "react-redux";
import Register from "./components/Register/Register";

export const UserContext = createContext({});
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  // const { user } = useSelector((state) => state.user);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login></Login>
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register></Register>
              </PublicRoute>
            }
          />
          <Route
            path="/addDoctor"
            element={
              <PrivateRoute>
                <AddDoctor></AddDoctor>
              </PrivateRoute>
            }
          />
          {/* <Route path="/addDoctor" element={<AddDoctor></AddDoctor>}></Route> */}
          <Route
            path="/dashboard/appointment"
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
