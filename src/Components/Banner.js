import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { StyledButton, highlightColor } from '../Common/Styles/StyledComponents'


function Banner() {
    return (
        <Container>
            <Content>Get your<br /><span style={{ color: highlightColor }} >Dream job</span>, <br />Now.</Content>
            <GetStartedBtn to="/jobs">See all jobs</GetStartedBtn>
        </Container>
    )
}

export default Banner

// === Styles Component ===
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`
const Content = styled.p`
    margin: 20px 0px;
    padding: 0px;
    text-align: left;
    font-weight: bold;
    font-size: 3.5em;
`

const GetStartedBtn = styled(NavLink)`
    ${StyledButton}
    width: 200px;
    text-decoration: none;
    font-weight: bold;
    padding: 6px 20px;
    transition: all 0.4s;
    &:hover{
        text-decoration: none;
    }
`