
import './App.css';
import Screen from  './components/Screen';
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


  return (
    <div className="flex items-center justify-center min-h-screen">
      <LeftControl />
      <Screen pokemones={pokemones} />
      <RightControl />
    </div>
  );
};

export default App
