import React from 'react'

function GameScreen({ MyPokeSelection, PcPokeSelection }) {
  return (
    <div className="w-[450px] h-[250px] overflow-y-auto border-y-4 border-solid flex justify-around items-center">
      
      <div className="flex flex-col items-center">
        <h2>Mi Pokémon</h2>
        {MyPokeSelection?.map((pokemon, index) => (
          <div key={index} className="flex flex-col items-center border-2">
            <p>{pokemon.name}</p>

            <img
              src={pokemon?.sprites?.back_default}
              alt={pokemon.name}
              className="w-35 h-35"
            />
            <div>
              {pokemon.moves.slice(0, 4).map((m, i) => (
                <button key={i}>{m.move.name}</button>
              ))}
            </div>
          </div>
        ))}

      </div>

      <div className="flex flex-col items-center">
        <h2>PC</h2>
        {PcPokeSelection?.map((pokemon, index) => (
          <div key={index} className="flex flex-col items-center border-2">
            <p>{pokemon.name}</p>
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon.name}
              className="w-35 h-35"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default GameScreen;