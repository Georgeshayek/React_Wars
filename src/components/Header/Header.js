import classes from "./Header.module.css";
import Button from "../UI/button";
const Header = (props) => {
  return (
    <header className={classes.Header}>
      <h1>REACT WARS</h1>
      <Button className={classes.buttonHolder} onClick={props.ToggleShowing}>
        SETTINGS
      </Button>
    </header>
  );
};
export default Header;
