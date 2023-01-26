import styled from "styled-components";

export const DivApp = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 300px auto auto;
    grid-template-rows: auto auto ;
    gap: 10px
    overflow: hidden;

`

export const ImgCard = styled.img`
    width: 150px;
    border: solid black 2px;
`

export const DivCard = styled.div`
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,0.20351890756302526) 100%);
    border: solid #F1C40F 2px;
    border-radius: 1rem;
    display: grid;
    text-align: center;
    justify-content: center;
    width: 200px;
    padding: 10px;
    margin:10px;
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