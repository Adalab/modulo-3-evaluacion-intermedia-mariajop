import React, { useState } from 'react';
import PokeList from './PokeList';
import pokemonsFromApi from '../data/pokemons.json';

const App = () => {
  const [pokemons, setPokemons] = useState(pokemonsFromApi);
  return (
    <div>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
