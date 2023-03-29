import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
//import characters, { Rick } from './data.js'
import { DivApp } from './components/Generalstyles'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login'
import Favorites from './components/MyFavorites/MyFavorites'

function App() {
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(0);
  const username = 'cristianmassa30@gmail.com';
  const password = '123456';
  
  function login(userData) {
     if (userData.password === password && userData.username === username) {
        setAccess(1);
        navigate('/home');
        console.log(access);
     }
  }
  useEffect(() =>{
    !access && navigate('/')
    console.log(access);
  }, [access])


  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.find((element) => element.id == data.id)) {
            window.alert('Ya existe ese id en la lista')
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function random() {
    let character = Math.ceil(Math.random() * 826)
    onSearch(character)
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id))
  }

  return (
    <DivApp>
      { access === 1 ? <Nav
        onSearch={onSearch} random={random} />: null}
      <Routes>
        <Route exact path='/' element={<Login login={login}/>}/>
        <Route path='/home' element={
          <Cards
            characters={characters} onClose={onClose}
          />} />
        <Route path='/About' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
        <Route path='/MyFavorites' element={<Favorites />}/>
      </Routes>
    </DivApp >
  )
}

export default App
