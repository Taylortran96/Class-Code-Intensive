import React from "react";
import Pokemondata from "./pokemondata";

export default function PokemonList() {
    const pokemon = Pokemondata.data;
    return(
        <div style={{display:"flex", flexDirection: "row", justifyContent:"space-between", margin: "0 2rem"}}>
            {pokemon.map ((element) => (
                <div key={element.id}>
                    <h1>Tên Pokemon: {element.name}</h1>
                    <p>Chiều cao: {element.height}</p>
                    <p>Cân nặng: {element.weight}</p>
                </div>
            ))}
        </div>
    )
};
