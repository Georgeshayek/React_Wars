
import classes from "./Main.module.css";
import MainItem from "./MainItem";
const Main = (props) => {
  return (
   
      <div className={classes.container}>
        <h1>{props.type.par}</h1>
        <div className={classes.Main}>
          {props.array.length > 0 &&
            props.array.map((mov) => (
              <MainItem
                key={Math.random()}
                data1={mov.name}
                data2={mov[props.type.type1]}
                data3={mov[props.type.type2]}
                type={{ type1: props.type.type1, type2: props.type.type2 }}
              />
            ))}
        </div>
      </div>
    
  );
};
export default Main;
