import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import firebase from '../Config/firebaseConfig'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../Actions/UsersActions'
import styled from 'styled-components'
import { colors } from '../Common/Styles/StyledComponents'

function Menu({ title, link }) {
	console.log(link)
	const [isLogout, setIsLogout] = useState(false)
	console.log(isLogout)
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)
	const dispatch = useDispatch()

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const logoutHandler = () => {
		firebase.auth().signOut()

		dispatch(userLoggedOut(false))
	}

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus()
		}

		prevOpen.current = open
	}, [open])

	return (
		<>
			<CustomButton
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup='true'
				onClick={handleToggle}>
				<ButtonText>{title}</ButtonText>
			</CustomButton>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom' ? 'center top' : 'center bottom',
						}}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id='menu-list-grow'
									onKeyDown={handleListKeyDown}>
									<MenuItem>
										<StyledLink onClick={handleClose} to={link}>
											Profile
										</StyledLink>
									</MenuItem>
									<MenuItem onClick={logoutHandler}>Logout</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
			{isLogout && <Redirect to='/register' />}
		</>
	)
}

export default Menu

const CustomButton = styled(Button)`
	&:focus {
		outline: none;
	}
`

const ButtonText = styled.p`
	margin: 0px;
	padding: 0px;
	color: ${colors.PRIMARY_COLOR};
`
const StyledLink = styled(NavLink)`
	color: black;
	text-decoration: none;
`
