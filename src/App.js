import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import Searchbar from './components/Nav/Nav/SearchBar'
//import characters, { Rick } from './data.js'
import { DivApp } from './components/Generalstyles'
import { useState } from 'react'


function App() {

  const [ characters, setCharacters ] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            if(characters.find((element) => element.id == data.id)){
              window.alert('Ya existe ese id en la lista')
            }else{
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function random (){
  let character = Math.ceil(Math.random() * 826) 
  onSearch(character)
 }

 function onClose (id){
  setCharacters(characters.filter((element) => element.id !== id))
 }

  return (
    <DivApp>

      <Nav 
      onSearch ={onSearch} random={random}/>
      <Cards
        characters={characters} onClose={onClose}
      />
    </DivApp >
  )
}

export default App
