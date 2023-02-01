import Card from './Card';
import { CardDiv } from '../Generalstyles';

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return (
     <CardDiv>
       {characters.map((e) => (
         <Card
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
