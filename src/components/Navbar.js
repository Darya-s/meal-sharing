import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar sticky-top navbar-dark bg-dark navbar-expand-lg'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Meals Sharing
				</Link>

				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/meals'>
							Meals
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

 export default Navbar
