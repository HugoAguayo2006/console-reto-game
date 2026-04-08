const Screen = ({ pokemones,position }) => {
  return (
    <>
    <div className="w-[450px] h-[250px] overflow-y-auto border-t-4 border-b-4 border-solid">
        <div className="flex flex-wrap justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index} 
            style={{color: position === pokemon.id ? "red" : "white"}}
            className="flex flex-col border-2" >
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
    </>
  );
};

export default Screen;