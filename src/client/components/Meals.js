import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Meals = () => {
	const [meals, setMeals] = useState([])

	useEffect(() => {
		fetch('https://meal-sharing-hyf-21.herokuapp.com/api/meals')
			.then((response) => response.json())
			.then((data) => {
				setMeals(data)
			})
	}, [])

	return (
		<table className='table table-hover table-striped'>
			<thead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>Meal</th>
					<th scope='col'>Description</th>
					<th scope='col'>Price</th>
					<th scope='col'>Location</th>
					<th scope='col'>Created Date</th>
					<th scope='col'>Max Reservations</th>
				</tr>
			</thead>
			<tbody>
				{meals.map((meal) => (
					<tr key={meal.id}>
						<th scope='row'>
							<Link to={`/meals/${meal.id}`}>{meal.id}</Link>
						</th>
						<td>{meal.title}</td>
						<td>{meal.description}</td>
						<td>{meal.price}</td>
						<td>{meal.location}</td>
						<td>{meal.created_date ?? '-'}</td>
						<td>{meal.max_reservations}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Meals
