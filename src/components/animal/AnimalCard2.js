import React, { useContext } from "react"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { history } from "react-router-dom"

export const AnimalCard2 = ({animal, location}) => {
	const { releaseAnimal, updateAnimal } = useContext(AnimalContext)
	const history = useHistory();

	const constructAnimalObject = () => {
		const newStatus = animal.status ? false : true
		updateAnimal({
			id: animal.id,
			name: animal.name,
			locationId: parseInt(animal.locationId),
			customerId: parseInt(animal.customerId),
			status: newStatus
		})
	}

	return (
    <section className="animal">
	<h3 className="animal__name">
		<Link to={`/animals/detail/${animal.id}`}>
			{ animal.name }
		</Link>
	</h3>
	Food: <input type="checkbox" value={animal.status} checked={animal.status} 
			onChange={()=>{constructAnimalObject()}}/>
			<button type="button" onClick={() => {
				releaseAnimal(animal.id)
				}}>Release Animal
			</button>
	</section>
	)
}