import Card from './Card';
import { CardDiv, DivApp } from '../Generalstyles';

export default function Cards(props) {
   const { characters } = props;
   return (<CardDiv> 
      {characters.map((character) => (<Card key={character.name}
      name ={character.name}
      species ={character.species}
      gender ={character.gender}
      image ={character.image}
      onClose ={() => window.alert('Emulamos que se cierra la card')}
      />))}
   </CardDiv>);
}
