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
    flex-wrap: wrap;


`

export const ModalDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    border: solid #F1C40F 2px;        
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.3);
    padding: 5%;
    backdrop-blur: 10px;
    box-shadow: 10px;
    box-shadow: 0px 6px 22px -1px rgba(0,0,0,1);
-webkit-box-shadow: 0px 6px 22px -1px rgba(0,0,0,1);
-moz-box-shadow: 0px 6px 22px -1px rgba(0,0,0,1);
`

export const DefaultButton = styled.button`
    border-radius: 0.5rem;
    background-color: #F1C40F;
    width: auto;
    border: ;
    justify-self: end;

    transition: background 0.5s ;

    &:hover{
        background-color:#F0B27A;
    }
`

export const NavUl = styled.ul`
    list-style:none;
    display: flex;
    gap: 5rem;
    text-decoration: none;
    font-size: 20px;

`
export const styledLi = styled.li`
color: white;
text-decoration: none;
`