import { DefaultButton } from "../../Generalstyles";
import { Searchbar } from "./NavStyles";

export default function SearchBar(props) {
   return (
      <div>
         <Searchbar type='search' />
      <DefaultButton onClick={() => (props.onSearch('un id'))}>Agregar</DefaultButton>
      </div>
   );
}
