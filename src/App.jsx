
import './App.css';
import Screen from  './components/Screen';
import GameScreen from './components/GameScreen';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';



function App() {
    const url =  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const {data, loading, error} = useFetch(url)

    const [pokemones, setPokemones] = useState([]);
    const getListPokemones = () => {
      const list = data?.results?.filter((p) => p.url);
      const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
      Promise.all(plist).then((values) => {
        console.log('promesa values', values);
        setPokemones(values);
      });
    };

    useEffect(() => {
      getListPokemones();
    }, [data]);

    const [position,setPosition] = useState(1)

    
    const[MyPokeSelection, setMyPokeSelection] = useState(0)
    const[PcPokeSelection, setPcPokeSelection] = useState(0)
    
    const handleDirection = (direction) => {
      console.log(direction)
      if(direction === 'right'){
        setPosition((prev) => prev + 1);
      }
      else {
        setPosition((prev) => prev - 1);
      }
    };

    
    function getRandomInt(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
    
    const computerSelection = () => {
      const rnd = getRandomInt(1,100)

      const pc = pokemones.filter((p) => p.id === rnd) 

      setPcPokeSelection(pc)
    }

    const handleSelection = () => {
      const selectPokemon = pokemones.filter((p) => p.id === position) 
      setMyPokeSelection(selectPokemon)
      computerSelection()
    }

    console.log(MyPokeSelection.length)
    console.log(PcPokeSelection.length)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <LeftControl handleDirection={handleDirection}/>
      {MyPokeSelection.length && PcPokeSelection.length ? (
        <GameScreen/>
      ):(
        <Screen pokemones={pokemones} position={position} />
      )}
      <RightControl handleSelection={handleSelection}/>
    </div>
  );
};

export default App
