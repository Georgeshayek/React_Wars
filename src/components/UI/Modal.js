import React, { Fragment, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Toggler from "./Toggler";
import ContextItem from "../../context/contextItem";
import Button from "./button";
import Card from "./Card";
const Modal = (props) => {
  const ctx = useContext(ContextItem);
  useEffect(() => {
    if (ctx.characterToggle) localStorage.setItem("CharacterConfig", "1");
    else localStorage.setItem("CharacterConfig", "0");
  }, [ctx.characterToggle]);
  useEffect(() => {
    if (ctx.planetToggle) localStorage.setItem("PlanetConfig", "1");
    else localStorage.setItem("PlanetConfig", "0");
  }, [ctx.planetToggle]);
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.dismiss}></div>;
  };
  const Model = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>SETTINGS</h2>
        </header>
        <div className={classes.content}>
          <Toggler
            id="character_switch"
            span="Toggler #1"
            onChange={ctx.CharacterToggler}
            value={ctx.characterToggle}
          />
          <Toggler
            id="Planet_switch"
            span="Toggler #2"
            onChange={ctx.PlanetToggler}
            value={ctx.planetToggle}
          />
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.dismiss}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop dismiss={props.dismiss} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Model dismiss={props.dismiss} />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};
export default Modal;
