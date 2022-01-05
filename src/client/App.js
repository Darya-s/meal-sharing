import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import MealsDetail from './routes/MealsDetail'
import MealsList from './routes/MealsList'
import NotFound from './routes/NotFound'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/meals' element={<MealsList />} />
				<Route path='/meals/:id' element={<MealsDetail />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
