import styled, { css } from 'styled-components'
import DripImage from '../../Assets/Images/Vector1.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const themeColor = '#2B96DC'
export const highlightColor = '#40CD8A'

export const colors = {
	PRIMARY_COLOR: ' #0066B3',
	SECONDARY_COLOR: '#F5821F',
}

export const Container = styled.div`
	height: 80vh;
`

export const Card = styled(motion.div)`
	background-color: white;
	padding: 20px;
	text-align: left;
	box-shadow: 1px 1px 5px 0px #00000026;
	margin: 10px 10px 5px 10px;
`

export const Grid = styled.div`
	background-color: #276eb012;
	display: grid;
	gap: 0rem;
	row-gap: 0rem;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	@media (max-width: 400px) {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
`
export const Title = styled.p`
	text-align: left;
	font-weight: bold;
	font-size: 1.3em;
`
export const StyledButton = css`
	background-color: ${themeColor};
	border: 1px solid ${themeColor};
	padding: 5px 10px;
	width: 150px;
	/* border-radius: 9px; */
	color: white;
	font-weight: bold;
	transition: all 0.5s;
	&:focus {
		outline: none;
	}
	&:hover {
		background-color: transparent;
		color: ${themeColor};
	}
`

export const StyledNavlink = styled(NavLink)`
	color: black;
	text-decoration: none;
	&:hover {
		color: black;
		text-decoration: none;
	}
	&:active {
		color: black;
		text-decoration: none;
	}
`

export const ListView = styled.div`
	max-width: 1140px;
	margin: auto;
	display: flex;
	flex-direction: column;
`

export const SpinnerIcon = styled.img`
	width: 60px;
	margin: auto;
`
