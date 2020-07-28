import React from 'react';
import Pokemon from './Pokemon';

const List = (props) => {
  const pokemons = props.pokemons.map((pokemon, index) => {
    return (
      <li key={index}>
        <Pokemon name={pokemon.name} avatar={pokemon.url} type={pokemon.type} />
      </li>
    );
  });
  return <ul>{pokemons} </ul>;
};

export default List;
