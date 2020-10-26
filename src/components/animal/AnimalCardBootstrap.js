import React, { useContext } from "react"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { history } from "react-router-dom"
import { CardDeck, Card, Button } from "react-bootstrap";

export const AnimalCardBootstrap = ({animal, location}) => {
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
	/*
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
	*/
// 	<Card>
//     <Image src={require('./../../images/dog.jpg')}  wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>{animal.name}</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
// 	  	{animal.name} is a animal living in {animal.location.name}.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
// 	<Button primary type="button" onClick={() => {
// 		releaseAnimal(animal.id)
// 		}}>Release</Button>
//     </Card.Content>
//   </Card>
//<CardDeck></CardDeck>
	return (
    
		<div className="col-sm-3 mb-3" >
	<Card className="h-100"> {/*make all cards same height or use CardDeck or CardGroup*/}
	<Card.Header>
		<Link to={`/animals/detail/${animal.id}`}>
		{ animal.name }
		</Link>
	</Card.Header>
	
	<Card.Img src={require('./../../images/dog.jpg')}  variant="top"/>
	<Card.Body>
	<Card.Text>
		{animal.name} is a animal living in {animal.location.name}.
	</Card.Text>
	</Card.Body>
	<Card.Footer>
	<Button type="button" onClick={() => {
		releaseAnimal(animal.id)
		}}>Release</Button>
		</Card.Footer>
	
	</Card>
	</div>
	)
	
}