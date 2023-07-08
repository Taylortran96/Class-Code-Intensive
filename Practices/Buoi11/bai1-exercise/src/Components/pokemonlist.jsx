import React from "react";

export default function PokemonList({pokemon}) {
    return(
        <div className="pokemon-list">
            {pokemon.map ((element) => (
                <div key={element}>{element}</div>
            ))}
        </div>
    )
};
