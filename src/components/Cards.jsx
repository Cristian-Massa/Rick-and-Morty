import Card from './Card';
import { DivApp } from './styles';

export default function Cards(props) {
   const { characters } = props;
   return (<DivApp> 
      {characters.map((character) => (<Card key={character.name}
      name ={character.name}
      species ={character.species}
      gender ={character.gender}
      image ={character.image}
      onClose ={() => window.alert('Emulamos que se cierra la card')}
      />))}
   </DivApp>);
}
