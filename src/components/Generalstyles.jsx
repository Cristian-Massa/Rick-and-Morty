import styled from "styled-components";

export const DivApp = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`

export const CardDiv = styled.div`
    display:flex;
    gap: 10px;
    overflow: hidden;

`

export const DefaultButton = styled.button`
    border-radius: 1rem;
    background-color: #F1C40F;
    width: 15%;
    border: none;
    justify-self: end;
    padding: 1%;

    &:hover{
        background-color:#F0B27A;
    }
`
