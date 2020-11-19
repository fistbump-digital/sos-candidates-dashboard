import React from 'react'
import styled from 'styled-components'
import { themeColor } from '../Common/Styles/StyledComponents'


function InputComponent({ label, type, onChange, value }) {
    return (
        <InputContainer>
            <Label>{label}</Label>
            {
                type === 'file' ? <Input required onChange={(e) => onChange(e.target.files[0])} type={type}></Input> :
                    <Input required value={value} onChange={(e) => onChange(e.target.value)} type={type}></Input>
            }
        </InputContainer>
    )
}

export default InputComponent


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

const Label = styled.label`
    color: #00000073;
    font-weight: bold;
`

const Input = styled.input`
    padding: 3px 10px;
    border-style: none;
    border-bottom: 1px solid #0000002e;
    
    background-color: white;
    &:focus{
        outline: none;
    border-bottom: 1px solid ${themeColor};

    }
`