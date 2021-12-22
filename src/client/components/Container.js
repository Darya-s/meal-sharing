import Navbar from './Navbar'

const Container = ({ children }) => (
	<>
		<Navbar />

		<main>
			<div className='container p-4'>{children}</div>
		</main>
	</>
)

export default Container
