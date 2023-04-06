import { createContext } from "react";

const ContextItem=createContext({
    characterToggle:true,
    planetToggle:true,
    CharacterToggler:()=>{},
    PlanetToggler:()=>{}
})
export default ContextItem