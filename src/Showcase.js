import bulbImg from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "yourmom";
  const pokeCharacteristics = {
    type: "fat",
    move: "diarrhea",
  };
  return (
    <div>
      <h1>{favPokemon}'s showcase</h1>
      <h2>
        <span style={{ backgroundColor: "#00ff00" }}>
          Type: {pokeCharacteristics.type}
        </span>
      </h2>
      <img src={bulbImg} />
      <h2>
        <span style={{ backgroundColor: "#ff0000" }}>
          Move: {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
