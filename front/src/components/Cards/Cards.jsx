import Card from './Card';
import { CardDiv, ModalDiv } from '../Generalstyles';

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   if(characters.length === 0){
    return (
      <ModalDiv>
    <h1>Busca un personaje</h1>
    </ModalDiv>
    )
   }else{
   return (
     <CardDiv>
       {characters.map((e) => (
         <Card
          id={e.id}
           name={e.name}
           species={e.species}
           gender={e.gender}
           image={e.image}
           onClose={() => props.onClose(e.id)}
           key={i++}
         />
       ))}
     </CardDiv>
   );
  }
}
