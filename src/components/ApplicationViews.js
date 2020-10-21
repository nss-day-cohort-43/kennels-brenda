import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList2 } from "./animal/AnimalList2"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalSearch } from "./animal/AnimalSearch"


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
					<AnimalSearch />
					<AnimalList2 />
				</Route>
			</AnimalProvider>

			<AnimalProvider>
				<Route exact path="/animals/detail/:animalId(\d+)">
					<AnimalDetail />
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


			<AnimalProvider>
				<LocationProvider>
					<CustomerProvider>
						<Route path="/animals/edit/:animalId(\d+)">
    						<AnimalForm />
						</Route>
					</CustomerProvider>
				</LocationProvider>
			</AnimalProvider>
        </>
    )
}