import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, Redirect } from 'react-router-dom'
import LogoSVG from '../Assets/Icons/fistbump-logo.svg'
import { colors, themeColor } from '../Common/Styles/StyledComponents'
import firebase from '../Config/firebaseConfig'
import { userLoggedOut, userLoggedIn } from '../Actions/UsersActions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { API_URI } from '../Endpoint'
import Menu from '../Components/Menu'
import CallToActionButton from './CallToActionButton'

function NavBar() {
	const dispatch = useDispatch()
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				const { uid, email, displayName } = user
				const data = {
					uid,
					email,
					name: displayName,
				}
				console.log(data)
				axios
					.post(`${API_URI}create-user-client`, data)
					.then(({ data }) => {
						dispatch(userLoggedIn(data))
					})
					.catch((err) => console.log(err))
			}
		})
	}, [])

	const { userDataMongoDB, isLoggedIn } = useSelector(
		(state) => state.usersData
	)
	const logoutHandler = () => {
		firebase.auth().signOut()
	}

	const renderRegister = isLoggedIn ? (
		<Menu
			title={userDataMongoDB.name}
			link={`profile/${userDataMongoDB && userDataMongoDB._id}`}
		/>
	) : (
		<StyledNavLink to='/register'>Register</StyledNavLink>
	)

	return (
		<Header>
			{/* Grid */}
			<HeaderContainer>
				{/* Logo */}
				<StyledNavLink to='/'>
					<span style={{color: colors.SECONDARY_COLOR}}>switch On</span> Success
					{/* <CompanyLogo src={LogoSVG} /> */}
				</StyledNavLink>

				{/* Links */}

				<LinkContainer>
					<ListItem>{renderRegister}</ListItem>
				</LinkContainer>

				{/* CallToAction */}
				{/* <ActionContainer></ActionContainer> */}
			</HeaderContainer>
		</Header>
	)
}

export default NavBar

// Styled Components
const Header = styled.header`
	position: sticky;
	top: 0;
	color: white;
	/* background-color: ${themeColor}; */
	/* border: 1px solid black; */
	padding: 10px 20px;
`

const HeaderContainer = styled.div`
	display: flex;
	/* grid-template-columns: repeat(6, 1fr); */
	justify-content: space-between;
	text-align: left;
	max-width: 1140px;
	margin: auto;
	padding: 0px 0px 0px 10px;
`

// Styling Pending
const StyledNavLink = styled(NavLink)`
	color: ${colors.PRIMARY_COLOR};
	text-decoration: none;
	font-weight: bold;
	&:hover {
		text-decoration: none;
		/* color: white; */
	}
	&:active {
		text-decoration: none;
		/* color: white; */
	}
`

const CompanyLogo = styled.img`
	width: 80px;
`

const LinkContainer = styled.ul`
	grid-column: 2/6;
	display: flex;
	justify-content: flex-end;
	list-style: none;
	margin: 0px;
	padding: 0px;
`

const ListItem = styled.li`
	color: ${themeColor};
	margin-left: 10px;
`

const ActionContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`
