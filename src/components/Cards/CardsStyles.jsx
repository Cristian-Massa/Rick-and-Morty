import styled from "styled-components"

export const ImgCard = styled.img`
width: 150px;
border: solid black 2px;

`

export const DivCard = styled.div`
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,0.20351890756302526) 100%);
border: solid #F1C40F 2px;
border-radius: 1rem;
text-align: center;
width: 200px;
padding: 40px;
margin:10px;
transition: transform 1s;

 &:hover{
    transform: scale(1.05);
    background: linear-gradient(0deg, rgba(36,22,0,0.26094187675070024) 0%, rgba(121,75,9,0.7371323529411764) 35%, rgba(255,214,0,0.8379726890756303) 100%);
 }
`
