import React, { useEffect, useState } from 'react'
import { Container } from '../Common/Styles/StyledComponents'
import firebase from '../Config/firebaseConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styled from 'styled-components'
import RegisterSVG from '../Assets/Icons/register.svg'
import Loader from '../Components/Loader'
import axios from 'axios'
import { API_URI } from '../Endpoint'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedIn } from '../Actions/UsersActions'

const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [
		// firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	callbacks: {
		signInSuccess: () => false,
	},
}

function RegisterPage() {
	console.log('registerPage REnder')

	const { userDataMongoDB, isLoggedIn } = useSelector(
		(state) => state.usersData
	)

	console.log(userDataMongoDB)
	console.log(isLoggedIn)
	const dispatch = useDispatch()

	return (
		<RegisterContainer>
			<SVG src={RegisterSVG} />
			<AuthContainer>
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			</AuthContainer>
			{isLoggedIn && (
				<Redirect to={`form/${userDataMongoDB && userDataMongoDB._id}`} />
			)}
		</RegisterContainer>
	)
}

export default RegisterPage

const RegisterContainer = styled(Container)`
	display: flex;
	margin: auto;
	max-width: 900px;
	justify-content: space-between;
	align-items: center;
`
const SVG = styled.img`
	width: 500px;
`
const AuthContainer = styled.div``
