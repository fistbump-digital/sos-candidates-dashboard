import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { API_URI } from '../Endpoint'
import { saveCurrentJob } from '../Actions/JobsActions'
import {
	Card,
	StyledButton,
	StyledNavlink,
} from '../Common/Styles/StyledComponents'
import { postMessage } from '../Common/Functions/helperFunctions'

import ExpSVG from '../Assets/Icons/exp.svg'
import LocationSVG from '../Assets/Icons/location.svg'
import DotSVG from '../Assets/Icons/dot.svg'
import SalarySVG from '../Assets/Icons/salary.svg'
import InputComponent from './InputComponent'
import Loader from '../Assets/Icons/loader-white.svg'
import firebase from '../Config/firebaseConfig'
import { Redirect } from 'react-router-dom'

function JobCard({ variants, job, canApply }) {
	const [appliedBtnText, setAppliedBtnText] = useState('Apply')
	const [isApplied, setIsApplied] = useState(false)
	const { isLoggedIn, userDataMongoDB } = useSelector(
		(state) => state.usersData
	)
	const [redirectToProfile, setRedirectToProfile] = useState(false)
	const [redirectToRegister, setRedirectToRegister] = useState(false)

	const dispatch = useDispatch()
	const { title, company, experience, salary, location, createdAt, user } = job  //not working, inprove this...
	const openDetailsHandler = () => {
		dispatch(saveCurrentJob(job))
	}


	const id = userDataMongoDB ? userDataMongoDB._id : ''
	useEffect(() => {
		if (user.includes(id)) {
			setIsApplied(true)
			setAppliedBtnText('Applied')
		}
	}, [id])

	const applyHandler = async () => {
		if (isLoggedIn) {
			console.log('Logged in')
			if (userDataMongoDB) {
				const {
					_id,
					name,
					email,
					education,
					skills,
					resume,
					number,
				} = userDataMongoDB
				try {
					if (name && email && education && skills && resume && number) {
						if (!user.includes(_id)) {
							const applied = await axios.patch(
								`${API_URI}apply/${job._id}`,
								{
									candidateID: _id,
								},
								{ withCredentials: true }
							)
							setIsApplied(true)
							setAppliedBtnText('Applied')
						}
					} else {
						setRedirectToProfile(true)
					}
				} catch (err) {
					setRedirectToProfile(true)
				}
			}
		} else {
			setRedirectToRegister(true)
		}

		// setRedirectToProfile(isLoggedIn)
		// console.log(isLoggedIn)
	}
	console.log(job)
	return (
		<Card onClick={openDetailsHandler}>
			<StyledNavlink to={`/${job._id}`}>
				<DetailsContainer>
					<SpaceFlex>
						<Company>{job.companyDetails.companyId.companyName}</Company>
						<Posted>Posted {postMessage(job.createdAt)}</Posted>
					</SpaceFlex>
					<SpaceFlex style={{ alignItems: 'flex-end' }}>
						<div>
							<JobTitle>{job.jobOpeningInfo.jobTitle}</JobTitle>
							<InfoContainer>
								<Details>
									<Icon src={ExpSVG} />
									{job.jobOpeningInfo.jobType}
								</Details>
								{/* <DotIcon src={DotSVG} /> */}
								{/* <Details>
									<Icon src={SalarySVG} />
									{salary}
								</Details> */}
								<DotIcon src={DotSVG} />
								<Details style={{textTransform: 'capitalize'}}>
									<Icon src={LocationSVG} />
									{job.jobAddress.city}
								</Details>
							</InfoContainer>
						</div>

						{canApply && (
							<ButtonContainer>
								<ApplyButton disabled={isApplied} onClick={applyHandler}>
									{appliedBtnText}
								</ApplyButton>
							</ButtonContainer>
						)}
					</SpaceFlex>
				</DetailsContainer>
			</StyledNavlink>
			{redirectToProfile && (
				<Redirect to={`profile/${userDataMongoDB && userDataMongoDB._id}`} />
			)}
			{redirectToRegister && <Redirect to='/register' />}
		</Card>
	)
}

export default JobCard

// Styled Components

const DetailsContainer = styled.div``

const ApplyButton = styled.button`
	${StyledButton};
	@media (max-width: 500px) {
		margin-top: 20px;
	}

	&:disabled {
		background-color: transparent;
		border-color: green;
		color: green;
		cursor: not-allowed;
	}
`

const ButtonContainer = styled.div``

const DotIcon = styled.img`
	margin-right: 15px;
	opacity: 0.6;
`

const Posted = styled.p`
	margin: 0px;
	padding: 0px;
	color: grey;
	font-weight: 600;
`

const InfoContainer = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
`

const Company = styled.p`
	margin: 0px;
	padding: 0px;
	font-weight: bold;
	color: grey;
`

const Icon = styled.img`
	margin-right: 2px;
`

const JobTitle = styled.h2`
	margin: 0px;
	padding: 0px;
	font-weight: bold;
`

const Details = styled.p`
	opacity: 0.6;
	width: fit-content;
	text-align: left;
	margin: 0px 15px 0px 0px;
	padding: 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 600;
`

const CancelBtn = styled.button`
	color: red;
	padding: 5px 8px;
	width: 100px;
	border-radius: 0px;
	background-color: transparent;
	border: 1px solid red;
	transition: all 0.3s;
	&:hover {
		background-color: red;
		color: white;
	}
`

const SendBtn = styled.button`
	color: white;
	padding: 5px 8px;
	width: 100px;
	border-radius: 0px;
	background-color: #30af9e;
	border: 1px solid #30af9e;
	transition: all 0.3s;
	&:disabled {
		opacity: 0.3;
	}
`

const SpaceFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const SpinnerIcon = styled.img`
	width: 25px;
	margin: auto;
`
