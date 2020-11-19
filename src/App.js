import React, { useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import LandingPage from './Pages/LandingPage'
import JobListPage from './Pages/JobListPage'
import JobDetailsPage from './Pages/JobDetailsPage'
import ProfilePage from './Pages/ProfilePage'
import RegisterPage from './Pages/RegisterPage'
import firebase from './Config/firebaseConfig'
import axios from 'axios'
import { API_URI } from './Endpoint'

// Full name
// Email
// number
// education
// skills
// resume

function App(props) {
	console.log(props)

	let inDev = false

	const hideRightClick = (e) => {
		if (!inDev) {
			e.preventDefault()
		}
	}

	return (
		<div onContextMenu={hideRightClick} className='App'>
			<HashRouter basename='/'>
				<NavBar />
				<Switch>
					{/* <Route path='/' exact component={LandingPage} /> */}
					<Route path='/' exact component={JobListPage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/profile/:id' component={ProfilePage} />
					<Route path='/form/:id' component={ProfilePage} />
					<Route path='/:id' component={JobDetailsPage} />
				</Switch>
			</HashRouter>
		</div>
	)
}

export default App
