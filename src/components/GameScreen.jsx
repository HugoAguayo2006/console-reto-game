import React, { useState } from 'react'

function GameScreen({ MyPokeSelection, PcPokeSelection }) {

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const [vida, setVida] = useState(100);
  const [vidaenemigo, setVidaenemigo] = useState(100);
  
    const cero = 10;
    const uno = 20;
    const dos = 30;
    const tres = 400;

    const cuatro   = getRandomInt(1, 40);
    const cinco = getRandomInt(1, 40);
    const seis = getRandomInt(1, 40);
    const siete = getRandomInt(1, 40);

    const damages = [cero, uno, dos, tres];
    const damagesenemigo = [cuatro, cinco, seis, siete];
    const winnerMessage =
      vida === 0 && vidaenemigo === 0
        ? 'Empate'
        : vidaenemigo === 0
          ? 'Ganaste tu'
          : vida === 0
            ? 'Gano el botardo'
            : '';

    const atacar = (index) => {
    if (winnerMessage) return;
    const daño = damages[index];
    const dañoenemigo = damagesenemigo[index];

    
    setVidaenemigo((prev) => {
        const nuevaVida = prev - daño;
        return nuevaVida < 0 ? 0 : nuevaVida;
      });

    setVida((prev) => {
        const nuevaVida = prev - dañoenemigo;
        return nuevaVida < 0 ? 0 : nuevaVida;
    });
    };

  return (
    <div className="relative w-[450px] h-[250px] overflow-y-auto border-y-4 border-solid flex justify-around items-center">
      {winnerMessage ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
          <p className="text-white text-2xl font-bold text-center px-4">
            {winnerMessage}
          </p>
        </div>
      ) : null}
      
      <div className="flex flex-col items-center">
        {MyPokeSelection?.map((pokemon, index) => (
          <div key={index} className="flex flex-col items-center border-2">
            <p>{pokemon.name}</p>

            <img
              src={pokemon?.sprites?.back_default}
              alt={pokemon.name}
              className="w-35 h-25"
            />
            <div>
              {pokemon.moves.slice(0, 4).map((m, i) => (
                  <button
                    className="btn-poder"
                    key={i}
                    onClick={() => atacar(i)}
                    disabled={Boolean(winnerMessage)}
                  >
                    {m.move.name}
                </button>
              ))}
            </div>
          </div>
        ))}
        <p>Vida: {vida}</p>
      </div>

      <div className="flex flex-col items-center">
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
        <p>Vida: {vidaenemigo}</p>
      </div>



    </div>
  );
}

export default GameScreen;
