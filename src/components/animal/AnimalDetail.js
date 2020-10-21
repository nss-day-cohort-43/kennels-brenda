import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    const { getAnimalById, releaseAnimal } = useContext(AnimalContext)
	console.log("animalDetail")
	const [animal, setAnimal] = useState()
	// const [location, setLocation] = useState({})
	// const [customer, setCustomer] = useState({})
	
	const {animalId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getAnimalById(animalId)
        .then((response) => {
			setAnimal(response)
			// setLocation(response.location)
			// setCustomer(response.customer)
		})
		}, [getAnimalById, animalId])

    return (
		<section className="animal">
            <h3 className="animal__name">{animal?.name}</h3>
			<div className="animal__breed">{animal?.breed}</div>
			{/* null safe operator */ }
			<div className="animal__location">Location: {animal?.location.name}</div>
			<div className="animal__owner">Customer: {animal?.customer.name}</div>
			<button onClick={
				() => {
					releaseAnimal(animal.id)
						.then(() => {
							history.push("/animals")
						})
				}}>Release Animal
			</button>
			<button onClick={() => {
    			history.push(`/animals/edit/${animal?.id}`)
			}}>Edit</button>
			</section>
    )
}