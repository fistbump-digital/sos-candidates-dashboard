import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Title } from '../Common/Styles/StyledComponents'
import { API_URI } from '../Endpoint'
import JobCard from '../Components/JobCard'
import styled from 'styled-components'
import axios from 'axios'
import { saveCurrentJob } from '../Actions/JobsActions'

const jobCardVariants = {
	initial: {
		opacity: 0,
		x: '+5vw',
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

const cardVariants = {
	initial: {
		opacity: 0,
		x: '+5vw',
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.2,
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

const aboutCardVariants = {
	initial: {
		opacity: 0,
		x: '+5vw',
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.4,
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

function JobDetailsPage(props) {
	const id = props.match.params.id
	const dispatch = useDispatch()
	const { job } = useSelector((state) => state.jobsData)

	useEffect(() => {
		if (!job) {
			const URL = `${API_URI}${id}`
			axios
				.get(URL)
				.then(({ data }) => {
					console.log(data)
					dispatch(saveCurrentJob(data))
				})
				.catch((err) => console.log(err))
		}
	}, [])

	const renderList = (data) => {
		console.log(data)
		return data.map((item) => <li key={item}>{item}</li>)
	}

	return (
		job && (
			<JobDetailsContainer>
				<JobCard variants={jobCardVariants} job={job} canApply={true} />
				<Card variants={cardVariants} initial='initial' animate='animate'>
					<Title>Job Details</Title>

					<SubTitle>Description</SubTitle>
					<p>{job.jobDetails.jobDescription}</p>

					<SubTitle>Eligibility</SubTitle>
					<ul>{renderList(job.jobDetails.eligibility)}</ul>

					<SubTitle>Responsibilities</SubTitle>
					<ul>{renderList(job.jobDetails.responsibilities)}</ul>
				</Card>

				<Card variants={aboutCardVariants} initial='initial' animate='animate'>
					<Title>About Company</Title>
					<p>{job.companyDetails.companyId.companyName}</p>
					<p>{job.companyDetails.companyId.companyAddress}</p>
				</Card>
			</JobDetailsContainer>
		)
	)
}

export default JobDetailsPage

const SubTitle = styled.p`
	font-weight: bold;
`
const JobDetailsContainer = styled.div`
	max-width: 1140px;

	margin: auto;
`
