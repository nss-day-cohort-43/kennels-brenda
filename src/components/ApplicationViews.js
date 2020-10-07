import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalForm } from "./animal/AnimalForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home greeting="Let's get some more coffee"/>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
			<AnimalProvider>
				<Route exact path="/animals">
					<AnimalList />
				</Route>
			</AnimalProvider>

			<AnimalProvider>
				<Route path="/animals/detail">

				</Route>
			</AnimalProvider>

			
			<AnimalProvider>
				<LocationProvider>
					<CustomerProvider>
						<Route exact path="/animals/create">
							<AnimalForm />
						</Route>
					</CustomerProvider>
				</LocationProvider>
			</AnimalProvider>
        </>
    )
}