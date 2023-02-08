import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavAll = styled.div`
    display: grid;
`

export const Searchbar = styled.input`

    background-color: rgba(100,100,100,0.5);
    border: none;
    border-radius: 1rem;
    margin-right: 5px;
    border-bottom: white 1px solid;
    color: white;
    ::placeholder { color: white; }
    &:hover{
        border-bottom: #F1C40F solid 1px;
    }
`
export const NavDiv = styled.nav`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid #F1C40F;
    padding: 1rem;
    overflow: hidden;
    box-shadow: 0px 6px 22px -1px rgba(0,0,0,1);
    -webkit-box-shadow: 0px 6px 22px -1px rgba(0,0,0,1);
    -moz-box-shadow: 0px 6px 22px -1px rgba(0,0,0,1);
    
`

export const NavImg = styled.img`
    height: 100px;
`
export const StyledLink = styled(Link)`
 text-decoration:none;
 color: white;
 &::visited {color:white;}
`