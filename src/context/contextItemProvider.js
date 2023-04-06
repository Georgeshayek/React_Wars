import { useState,useEffect } from "react"
import ContextItem from "./contextItem"

const ContextItemProvider=(props)=>{
    const[characterToggle,setCharacterToggle]=useState(true)
    const[planetToggle,setPlanetToggle]=useState(true)

    useEffect(() => {
        const storedCharacterConfig = localStorage.getItem('CharacterConfig');
        const storedPlanetConfig = localStorage.getItem('PlanetConfig');
    
        if (storedCharacterConfig === '1') {
            setCharacterToggle(true);
        }
        else if (storedCharacterConfig === '0') {
            setCharacterToggle(false);
        }
        if (storedPlanetConfig === '1') {
            setPlanetToggle(true);
        }
        else if (storedPlanetConfig === '0') {
            setPlanetToggle(false);
        }
      }, []);
    const CharacterToggler=()=>{
        setCharacterToggle(prev=>!prev)
    }
    const PlanetToggler=()=>{
        setPlanetToggle(prev=>!prev)
    }
    const ctxProvider={
        characterToggle:characterToggle,
        planetToggle:planetToggle,
        CharacterToggler:CharacterToggler,
        PlanetToggler:PlanetToggler
    }
    return(<ContextItem.Provider value={ctxProvider}>{props.children}</ContextItem.Provider>)

}
export default ContextItemProvider