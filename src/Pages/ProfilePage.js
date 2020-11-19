import React, { useEffect, useState } from 'react'
import { Card, StyledButton } from '../Common/Styles/StyledComponents'
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import { API_URI } from '../Endpoint'
import { userLoggedIn } from '../Actions/UsersActions'
import { Redirect } from 'react-router-dom'

function ProfilePage({ match }) {
	const [isProfileUpdated, setIsProfileUpdated] = useState(false)
	const id = match.params.id
	const type = match.url.split('/')[1]
	const dispatch = useDispatch()
	const { userDataMongoDB } = useSelector((state) => state.usersData)
	useEffect(() => {
		Axios.get(`${API_URI}user-client/${id}`, { withCredentials: true })
			.then(({ data }) => {
				dispatch(userLoggedIn(data))
			})
			.catch((err) => console.log(err))
	}, [])

	const [name, setName] = useState(userDataMongoDB && userDataMongoDB.name)
	const [email, setEmail] = useState(userDataMongoDB && userDataMongoDB.email)
	const [number, setNumber] = useState(
		userDataMongoDB && userDataMongoDB.number
	)
	const [education, setEducation] = useState(
		userDataMongoDB && userDataMongoDB.education
	)
	const [skills, setSkills] = useState(
		userDataMongoDB && userDataMongoDB.skills
	)

	const [resume, setResume] = useState()
	const [resumeName, setResumeName] = useState(
		userDataMongoDB && userDataMongoDB.resumename
	)

	useEffect(() => {
		if (
			name &&
			email &&
			number &&
			education &&
			skills &&
			resumeName &&
			type !== 'profile'
		) {
			setIsProfileUpdated(true)
		}
	}, [])
	const updateHandler = async (e) => {
		console.log('Update')
		e.preventDefault()
		const userData = {
			name,
			email,
			number,
			education,
			skills,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(userData))
		if (resume) {
			formData.append('file', resume)
		}

		try {
			const { data } = await Axios.patch(
				`${API_URI}update-client-profile/${id}`,
				formData,
				{
					withCredentials: true,
				}
			)
			dispatch(userLoggedIn(data))
			setIsProfileUpdated(true)
			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<ProfileContainer>
			<Card>
				<form onSubmit={updateHandler}>
					<FlexDiv>
						<ProfileTitle>Profile</ProfileTitle>
						<FlexDiv>
							<SaveBtn>Save</SaveBtn>
						</FlexDiv>
					</FlexDiv>

					<InputContainer>
						<Input
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							label='Full Name'
						/>
					</InputContainer>

					<InputContainer>
						<Input
							disabled
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							type='email'
							label='Email'
						/>
					</InputContainer>

					<InputContainer>
						<Input
							value={number}
							required
							onChange={(e) => setNumber(e.target.value)}
							type='number'
							label='Contact Number'
						/>
					</InputContainer>

					<InputContainer>
						<Input
							value={education}
							required
							onChange={(e) => setEducation(e.target.value)}
							label='Education'
						/>
					</InputContainer>

					<InputContainer>
						<Input
							value={skills}
							required
							onChange={(e) => setSkills(e.target.value)}
							label='Skills'
						/>
					</InputContainer>

					<InputContainer>
						<label htmlFor='resume'>
							{resumeName
								? `${resumeName} (Old Resume) - Click on 'Choose File' to upload updated RESUME (If any)`
								: 'RESUME'}
						</label>
						<input
							onChange={(e) => setResume(e.target.files[0])}
							type='file'
							name='resume'
						/>
					</InputContainer>
				</form>
			</Card>
			{isProfileUpdated && <Redirect to='/jobs' />}
		</ProfileContainer>
	)
}

export default ProfilePage

const ProfileContainer = styled.div`
	margin: auto;
	max-width: 900px;
`

const SaveBtn = styled.button`
	${StyledButton}
`

const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ProfileTitle = styled.h2`
	margin: 0px;
	padding: 0px;
`

const ProfileStatus = styled.p`
	margin: 0px;
	padding: 0px;
`

const InputContainer = styled.div`
	margin: 20px 0px;
	display: flex;
	flex-direction: column;
`

const Input = styled(TextField)`
	width: 100%;
`
