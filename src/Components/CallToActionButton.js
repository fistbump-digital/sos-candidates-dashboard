import React from 'react'
import styled from 'styled-components'

function CallToActionButton({text}) {
    return (
        <Button>
            {text}
        </Button>
    )
}

export default CallToActionButton


const Button = styled.button`
	color: white;
	border-style: none;
	padding: 5px 15px;
	font-size: 0.8em;
	border-radius: 6px;
	background-color: #2b96dc;
`