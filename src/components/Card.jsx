import { DefaultButton, DivCard, ImgCard } from "./styles";

export default function Card(props) {
   return (
      <DivCard>
         <DefaultButton onClick={props.onClose}>X</DefaultButton>
         <h2>{props.name}</h2>
         <ImgCard  src={props.image } alt="" />
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </DivCard>
   );
}
