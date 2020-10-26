import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCardBootstrap } from "./AnimalCardBootstrap"
import "./Animal.css"
import { useHistory } from "react-router-dom"
import { CardDeck, CardGroup } from "react-bootstrap"

export const AnimalList2 = () => {
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

    // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])

    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
		// setSearchTerm("")
        getAnimals()
    }, [getAnimals])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="container">
          {/*the deck give same height */}
           <CardDeck>
				{
				filteredAnimals.map(animal => {
					return <AnimalCardBootstrap key={animal.id} animal={animal} />
				})
                }
                </CardDeck>
           
            </div>
        </>
    )
}