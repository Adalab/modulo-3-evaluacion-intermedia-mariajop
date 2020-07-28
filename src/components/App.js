import React from 'react';
import PokeList from './PokeList';
import pokemonsFromApi from '../data/pokemons.json';

const App = () => {
  return (
    <div>
      <h1>Pokemons</h1>
      <PokeList list={pokemonsFromApi} />
    </div>
  );
};

export default App;
