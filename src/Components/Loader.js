import React from 'react'
import styled from 'styled-components'
import LoaderIconSVG from '../Assets/Icons/loader.svg'

function Loader() {
	return <LoaderIcon src={LoaderIconSVG} />
}

export default Loader

const LoaderIcon = styled.img`
	width: 60px;
`
