import React from 'react';

class List extends React.Component {
  render() {
    const pokemonsList = this.props.pokemon.name.map((name, index) => {
      return <li key={index}>{name}</li>;
    });

    return (
      <article>
        {pokemonsList}
        <img src={this.props.url} alt={this.props.name}>
          {this.props.avatar || 'Imagen por defecto'}
        </img>
        <h2>{this.props.name}</h2>
        <span>{this.props.type}</span>
      </article>
    );
  }
}

export default List;
