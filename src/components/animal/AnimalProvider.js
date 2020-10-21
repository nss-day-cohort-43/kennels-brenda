import React, { useState, createContext, useCallback } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = createContext()

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {
	const [animals, setAnimals] = useState([])
	const [ searchTerms, setSearchTerms ] = useState("")

    const getAnimals = useCallback(() => {
        console.log("getAnimals")
        return fetch("http://localhost:8088/animals?_expand=location")
            .then(res => res.json())
            .then(setAnimals)
    }, [setAnimals])

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
	}
	
	const getAnimalById = useCallback((id) => {
		return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
			.then(res => res.json())
	}, [])

	const releaseAnimal = animalId => {
		return fetch(`http://localhost:8088/animals/${animalId}`, {
			method: "DELETE"
		}).then(getAnimals)
	}

	const updateAnimal = animal => {
		return fetch(`http://localhost:8088/animals/${animal.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(animal)
		}).then(getAnimals)
	}

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById, releaseAnimal, updateAnimal, setSearchTerms, searchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}