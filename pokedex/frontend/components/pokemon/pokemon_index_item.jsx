import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';


export class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    requestAllPokemon();
  }

  render() {
    return (
      <li>HAHAHA</li>
    );
  }
}
