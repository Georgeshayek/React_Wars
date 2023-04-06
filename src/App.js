import { Fragment, useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Mainbox from "./components/Mainbox/Mainbox";
import useHttp from "./hooks/use-http";
import Modal from "./components/UI/Modal";
import ContextItem from "./context/contextItem";
function App() {
  const ctx = useContext(ContextItem);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [show, setShow] = useState(false);

  const [characIsloading,CharacterApiHandle] = useHttp("https://swapi.dev/api/people/", setCharacters);
  const [planetIsloading,PlanetApiHandle] = useHttp("https://swapi.dev/api/planets/", setPlanets);
  useEffect(() => {
    CharacterApiHandle();
    PlanetApiHandle();
    
  }, [CharacterApiHandle,PlanetApiHandle]);

  const ToggleShowing = () => {
    setShow((prev) => !prev);
  };

  return (
    <Fragment>
      {show && <Modal dismiss={ToggleShowing} />}
      <Header ToggleShowing={ToggleShowing} />
      <Mainbox />
       {/* Characters */}
      {!ctx.characterToggle && !ctx.planetToggle && <h2>No Data Displayed</h2>}
      {ctx.characterToggle && characIsloading&&<h2>Loading...</h2>}
      {ctx.characterToggle && !characIsloading&&(
        <Main
          array={characters}
          type={{ par: "CHARACTERS", type1: "height", type2: "mass" }}
        />
      )}

      {/* Planets */}
      {ctx.planetToggle && planetIsloading&&<h2>Loading...</h2>}
      {ctx.planetToggle &&!planetIsloading&& (
        <Main
          array={planets}
          type={{ par: "PLANETS", type1: "terrain", type2: "climate" }}
        />
      )}
    </Fragment>
  );
}

export default App;
