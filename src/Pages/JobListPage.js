import React from 'react'
import { useSelector } from 'react-redux'
import JobCard from '../Components/JobCard'
import styled from 'styled-components'
import { ListView, SpinnerIcon } from '../Common/Styles/StyledComponents'
import { saveAllJobs } from '../Actions/JobsActions'
import { API_URI } from '../Endpoint'
import Loader from '../Assets/Icons/loader.svg'
import { useGetAndSaveData } from '../Hooks/Hooks'

function JobListPage() {
	useGetAndSaveData(`${API_URI}public-jobs`, saveAllJobs)
	const { jobs } = useSelector((state) => state.jobsData)

	const renderJobList = () => {
		if (jobs) {
			if (jobs.length > 0) {
				return jobs.map((item, index) => {
					return <JobCard key={item._id} job={item} />
				})
			}
			return (
				<LoaderContainer>
					<SpinnerIcon src={Loader} />
				</LoaderContainer>
			)
		}
	}

	return <ListView>{renderJobList()}</ListView>
}

export default JobListPage

const LoaderContainer = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
