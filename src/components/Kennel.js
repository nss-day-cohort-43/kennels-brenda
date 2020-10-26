import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import './../custom.scss'
import "./Kennel.css";


export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

// export const Kennel = () => {
//    return  ( 
//         <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>
//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>
//         </>
//     )
// }


