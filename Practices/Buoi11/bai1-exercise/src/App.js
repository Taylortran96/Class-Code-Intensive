import './App.css';
import React from 'react';
import PokemonList from './Components/pokemonlist';
import Pokemondata from './Components/pokemondata';
import Pagination from './Components/pagination';

function App() {
  const [pokemons, setPokemons] = useState([])

  return (
    <div className="App"> 
      <PokemonList pokemon={Pokemondata.data}/>

    </div>
  );
}

export default App;
