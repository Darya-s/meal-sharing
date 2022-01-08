import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Container from '../components/Container'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

const MealsDetail = () => {
	const params = useParams()

	const [isMealLoading, setIsMealLoading] = useState(true)
	const [isReservationLoading, setIsReservationLoading] = useState(false)
	const [meal, setMeal] = useState(null)

	const handleSubmit = useCallback(
		async (event) => {
			event.preventDefault()

			setIsReservationLoading(true)

			const [{ value: phoneNumber }, { value: name }, { value: email }] =
				event.target.elements

			const data = {
				contact_email: email,
				contact_name: name,
				contact_phonenumber: phoneNumber,
				created_date: new Date(),
				meal_id: params.id,
			}

			try {
				const response = await fetch(
					'https://meal-sharing-hyf-21.herokuapp.com/api/reservation',
					{
						method: 'POST', // *GET, POST, PUT, DELETE, etc.
						// mode: 'cors', // no-cors, *cors, same-origin
						// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
						// credentials: 'same-origin', // include, *same-origin, omit
						// headers: {
						// 	'Content-Type': 'application/json',
						// },
						// redirect: 'follow', // manual, *follow, error
						// referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(data), // body data type must match "Content-Type" header
					},
				)

				if (response.ok) {
					alert('Reservation successful!')
				} else {
					throw new Error()
				}
			} catch (error) {
				console.error(error)

				alert(
					'Something went wrong while registering your reservation, please try again.',
				)
			} finally {
				setIsReservationLoading(false)
			}
		},
		[params.id],
	)

	useEffect(() => {
		fetch(`https://meal-sharing-hyf-21.herokuapp.com/api/meals/${params.id}`)
			.then((response) => response.json())
			.then((data) => {
				setMeal(data)
				setIsMealLoading(false)
			})
	}, [params.id])

	const isDisabled = meal?.max_reservations <= 0

	return (
		<>
			<Container>
				{isMealLoading ? (
					<Loading />
				) : (
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='phone-number' className='form-label'>
								Phone number
							</label>
							<input type='tel' className='form-control' id='phone-number' />
							<div id='phone-number-help' className='form-text'>
								We'll use your phone number to contact you in case of need.
							</div>
						</div>
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input type='text' className='form-control' id='name' />
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>
								Email address
							</label>
							<input type='email' className='form-control' id='email' />
							<div id='email-help' className='form-text'>
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className='mb-3'>
							<label htmlFor='number-guests' className='form-label'>
								Number of guests
							</label>
							<input
								type='number'
								className='form-control'
								id='number-guests'
							/>
						</div>

						<button
							type='submit'
							className='btn btn-primary'
							disabled={isDisabled || isReservationLoading}
						>
							{isReservationLoading && (
								<span
									className='spinner-border spinner-border-sm me-2'
									role='status'
									aria-hidden='true'
								/>
							)}
							Submit
						</button>

						{isDisabled && (
							<div className='alert alert-warning mt-2' role='alert'>
								Sorry, no more reservations!
							</div>
						)}
					</form>
				)}
			</Container>

			<Footer />
		</>
	)
}

export default MealsDetail
