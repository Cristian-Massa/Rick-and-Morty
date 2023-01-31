import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import SearchBar from './components/Nav/SearchBar'
import characters, { Rick } from './data.js'
import { DivApp } from './components/Generalstyles'

function App() {
  return (
    <DivApp>
      <Nav />
      <Cards
        characters={characters}
      />
    </DivApp >
  )
}

export default App
