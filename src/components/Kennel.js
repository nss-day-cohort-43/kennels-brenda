import React from "react"
import "./Kennel.css"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"


export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)

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


