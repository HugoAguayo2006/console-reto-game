import React, { useState } from 'react'
import './GameScreen.css'

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
    const vidaPercent = Math.max(0, Math.min(100, vida));
    const vidaEnemigoPercent = Math.max(0, Math.min(100, vidaenemigo));
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
    <div className="battle-screen">
      {winnerMessage ? (
        <div className="battle-result">
          <p>
            {winnerMessage}
          </p>
        </div>
      ) : null}
      
      <div className="battle-player">
        {MyPokeSelection?.map((pokemon, index) => (
          <div key={index} className="battle-pokemon player-pokemon">
            <p className="battle-name">{pokemon.name}</p>

            <img
              src={pokemon?.sprites?.back_default}
              alt={pokemon.name}
              className="battle-sprite player-sprite"
            />
            <div className="battle-moves">
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
        <div className="life-panel player-life">
          <p>Vida: {vida}</p>
          <div className="life-bar">
            <span style={{ width: `${vidaPercent}%` }}></span>
          </div>
        </div>
      </div>

      <div className="battle-enemy">
        {PcPokeSelection?.map((pokemon, index) => (
          <div key={index} className="battle-pokemon enemy-pokemon">
            <p className="battle-name">{pokemon.name}</p>
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon.name}
              className="battle-sprite enemy-sprite"
            />
          </div>
        ))}
        <div className="life-panel enemy-life">
          <p>Vida: {vidaenemigo}</p>
          <div className="life-bar">
            <span style={{ width: `${vidaEnemigoPercent}%` }}></span>
          </div>
        </div>
      </div>



    </div>
  );
}

export default GameScreen;
