import styled from 'styled-components'

export const SubmitButton = styled.button`
    background-color: #002c53;
    color: #fff;
    width: 150px;
    height: 60px;
    padding: 5px;
    border-radius: 20px;
    border: none;
    font-family: 'Roboto Mono', monospace;
    border: 2px solid #002c53;
    font-size: 18px;
    cursor: pointer;
    
    
    &:hover {
        transition: .5s;
        color: #002c53;
        border: 2px solid #002c53;
        background-color: #f4f4f4;
    }
`