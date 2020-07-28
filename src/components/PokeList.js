import React from 'react';
import Pokemon from './Pokemon';

const List = (props) => {
  const pokemons = props.pokemons.map((pokemon, index) => {
    return (
      <li key={pokemon.id}>
        <Pokemon name={pokemon.name.toUpperCase()} avatar={pokemon.url} types={pokemon.types} />
      </li>
    );
  });
  return <ul>{pokemons} </ul>;
};

export default List;
