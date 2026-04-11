
import './App.css';
import Screen from  './components/Screen';
import GameScreen from './components/GameScreen';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Detalles from './components/Detalles';
import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';



function App() {
    const url =  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
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

    const [current,setCurrent] = useState(0)


  const [MyPokeSelection, setMyPokeSelection] = useState([])
  const [PcPokeSelection, setPcPokeSelection] = useState([])
  const [game, setgame] = useState(true)
  const currentPokemon = pokemones.find((p) => p.id === position)
    
    const handleDirection = (direction) => {

      if(direction === 'right'){
        if(current !== 99){
          setPosition((prev) => prev + 1);
          setCurrent((current) => current +1);
        }
      }
      else if(direction === 'left'){
        if(current !== 0){
          setPosition((prev) => prev - 1);
          setCurrent((current) => current -1);
        }
      }
      else if(direction === "top"){
        if(current !== 0 && current !== 1 && current !== 2){
          setPosition((prev) => prev - 3);
          setCurrent((current) => current - 3);
        }
      }
      else { // down
        console.log(current)
        if(current !== 99 && current !== 98){
          setPosition((prev) => prev + 3);
          setCurrent((current) => current + 3);
        }
      }
    };

    
    function getRandomInt(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    }
    
    const computerSelection = () => {
      const rnd = getRandomInt(1,100)

      const pc = pokemones.filter((p) => p.id === rnd) 

      setPcPokeSelection(pc)
    }

    const handleSelection = () => {
      const selectPokemon = pokemones.filter((p) => p.id === position) 
      console.log("el pokemon selecionado por mi es ", MyPokeSelection) 

      setMyPokeSelection(selectPokemon)
      computerSelection()
      setgame(false)
    }

    console.log("my", MyPokeSelection.length , MyPokeSelection)
    console.log("pc", PcPokeSelection.length, PcPokeSelection )

  return (
    < div className="flex flex-col items-center justify-center min-h-screen -mt-0">
      <div className="flex items-center justify-center">
        <LeftControl handleDirection={handleDirection}/>
        {MyPokeSelection.length && PcPokeSelection.length ? (
          <GameScreen MyPokeSelection={MyPokeSelection} PcPokeSelection={PcPokeSelection}/>
        ):(
          <Screen pokemones={pokemones} position={position} />
        )}
        <RightControl handleSelection={handleSelection}/>
        </div>
          <div className="mt-4">
          <Detalles pokemon={currentPokemon} game={game}/>
        </div>
    </div>



  );
};

export default App
