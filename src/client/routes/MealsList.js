import React from 'react'

import Container from '../components/Container'
import Footer from '../components/Footer'
import Meals from '../components/Meals'

const MealsList = () => {
	return (
		<>
			<Container>
				<Meals />
			</Container>

			<Footer />
		</>
	)
}

export default MealsList
