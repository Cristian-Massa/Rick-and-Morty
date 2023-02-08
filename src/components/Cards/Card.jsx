import { DefaultButton } from "../Generalstyles";
import { DivCard, ImgCard } from "./CardsStyles";
import { Link } from "react-router-dom";
import { StyledLink } from "../Nav/Nav/NavStyles";

export default function Card(props) {
   console.log(props)
   return (
      <DivCard>
            <DefaultButton onClick={props.onClose}>X</DefaultButton>
      <StyledLink to={`/detail/${props.id}`} >
            <h2>{props.name}</h2>
         <ImgCard src={props.image} alt="" />
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         </StyledLink>
      </DivCard>
   );
}
