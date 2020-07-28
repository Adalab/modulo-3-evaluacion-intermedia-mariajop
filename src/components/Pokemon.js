import React from 'react';

class List extends React.Component {
  render() {
    console.log(this.props);

    const types = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });

    return (
      <article>
        <img src={this.props.avatar} alt={this.props.name}></img>
        <h2>{this.props.name}</h2>
        <ul>{types}</ul>
      </article>
    );
  }
}

export default List;
