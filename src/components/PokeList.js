import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemonsList = props.list.map((pokemon, index) => {
    console.log(pokemon.id);
    return (
      <li key={pokemon.id} className="card">
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return <ul className="cards">{pokemonsList}</ul>;
};

export default PokeList;
