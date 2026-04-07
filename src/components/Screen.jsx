const Screen=({pokemones})=>{
    return(
      <>
        <div className="w-[450px] h-[200px] border-t-4 border-b-4  border-solid">
            {pokemones?.map((pokemon) => (
                <p>{pokemon.name}</p>
            ))}

        </div>
     </>
    );
};

export default Screen;