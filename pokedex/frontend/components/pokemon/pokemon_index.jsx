import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

// export class PokemonIndex extends React.Component


export const PokemonIndex = (props) => {
  return (
    <div>
      <ul>
        {
          props.pokemon.map(pokemon =>
            // <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
            <li>{pokemon.name}</li>
          )
        }
      </ul>
    </div>
  );
};
