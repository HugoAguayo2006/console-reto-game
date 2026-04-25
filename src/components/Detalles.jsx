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

    return (
    game && (
        <div className='card-container'>
        <div className="flex flex-col items-center">
            {pokemon ? (
            <div className="flex flex-col items-center">
                <p>{pokemon.name}</p>
                <p># {pokemon.id}</p>

                {pokemon.types.map((t, index) => (
                <p key={index}>{t.type.name}</p>
                ))}

                <div className="flex items-center justify-center">
                <img
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                    className="w-35 h-35"
                />
                <img
                    src={pokemon?.sprites?.back_default}
                    alt={pokemon.name}
                    className="w-35 h-35"
                />
                </div>

                <div className="flex flex-col gap-2">
                MOVES
                {pokemon.moves.slice(0, 4).map((m, index) => (
                    <div key={index} className="flex gap-4">
                    <p>{m.move.name}</p>
                    <div>{[cero, uno, dos, tres][index]}</div>
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
