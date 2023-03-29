import { DefaultButton } from "../Generalstyles";
import { Searchbar } from "./Nav/NavStyles";
import { useState } from "react";
import { NavList } from "./Nav";
export default function SearchBar(props) {

   const [ character, setCharacter ] = useState(0)

  const handleSearch = (e) => {
    let { value } = e.target;
    setCharacter(value);
  };

   return (
      <div>
         <Searchbar type='search' onChange={handleSearch} placeholder='Busca un personaje'/>
      <DefaultButton onClick={() => (props.onSearch(character))}>Agregar</DefaultButton>
      <DefaultButton onClick={props.random}>Random</DefaultButton>
      </div>
   );
}
