import Container from '../components/Container'
import Footer from '../components/Footer'
import Meals from '../components/Meals'

const Home = () => {
	return (
		<>
			<Container>
				<h2>Welcome to the homepage of your meals sharing!</h2>
				<p>You can do this, I believe in you.</p>

				<Meals />
			</Container>

			<Footer />
		</>
	)
}

export default Home
