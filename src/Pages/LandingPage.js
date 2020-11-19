import React from 'react'
import styled from 'styled-components'
import Banner from '../Components/Banner'
import { Container } from '../Common/Styles/StyledComponents'
import Interview from '../Assets/Icons/interview.svg'

function LandingPage() {
    return (
        <Container>
            <SubContainer>
                <div>
                    <Banner />
                </div>
                <Icon src={Interview} />
            </SubContainer>
        </Container>
    )
}

export default LandingPage

// Styled Components

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SubContainer = styled.div`
    margin: auto;
    margin-top: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
`
const Icon = styled.img`
    max-width: 500px;
    transition: all 0.5s;
    @media (max-width: 500px) {
        width: 300px;
    }
`

