import styled from "styled-components";

export const Searchbar = styled.input`

    background-color: transparent;
    border: none;
    border-radius: 1rem;
    margin-right: 5px;
    border-bottom: white 1px solid;

    &:hover{
        border-bottom: #F1C40F solid 1px;
    }
`
export const NavDiv = styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    background-color: #aabfd1;
    border-bottom: 2px solid #F1C40F;
    padding: 1rem;
`

export const NavImg = styled.img`
    height: 100px;
`