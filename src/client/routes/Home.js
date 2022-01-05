import React from 'react'

import Container from '../components/Container'
import Footer from '../components/Footer'
import Meals from '../components/Meals'

const Home = () => {
	return (
		<>
			<Container>
				<h2>Welcome to the homepage of your meals sharing!</h2>
				<p>You can book a meal by clicking on its row.</p>

				<Meals />
			</Container>

			<Footer />
		</>
	)
}

export default Home
