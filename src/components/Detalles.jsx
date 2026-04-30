import React from 'react'
import './Detalles.css'

function Detalles({ pokemon , game}) {

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    }

    const cero = getRandomInt(1,100)
    const uno = getRandomInt(1,100)
    const dos = getRandomInt(1,100)
    const tres = getRandomInt(1,100)
    const damages = [cero, uno, dos, tres]

    return (
    game && (
        <div className='card-container'>
        <div className="details-content">
            {pokemon ? (
            <div className="details-card">
                <div className="details-header">
                    <p className="details-name">{pokemon.name}</p>
                    <p className="details-id"># {pokemon.id}</p>
                </div>

                <div className="details-types">
                    {pokemon.types.map((t, index) => (
                    <span key={index}>{t.type.name}</span>
                    ))}
                </div>

                <div className="details-sprites">
                <img
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                />
                <img
                    src={pokemon?.sprites?.back_default}
                    alt={pokemon.name}
                />
                </div>

                <div className="moves-list">
                <p className="moves-title">MOVES</p>
                {pokemon.moves.slice(0, 4).map((m, index) => (
                    <div key={index} className="move-row">
                    <p>{m.move.name}</p>
                    <span>{damages[index]}</span>
                    </div>
                ))}
                </div>
            </div>
            ) : null}
        </div>
        </div>
    )
    )
    }

export default Detalles
