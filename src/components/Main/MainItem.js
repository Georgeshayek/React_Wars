import { Fragment} from "react";
import classes from "./MainItem.module.css";
import Card from "../UI/Card";
const MainItem = (props) => {
  const twoWord=(str)=>{
      let result;
      if(str.includes('_'))
      {
        result =str.replace('_',' ')
        
       return result
      }
      return str;
  }

  const props1=props.type.type1
  const props2=props.type.type2;
 
  return (
    <Fragment>
      <Card className={classes.main}>
        <div className={classes.cont}>
          <h3>{props.data1}</h3>
        </div>
        <div className={classes.cont1}>
          <span>
            <label>{twoWord(props1)}:</label>
            {props.data2}
          </span>

          <span>
            <label>{twoWord(props2)}:</label>
            {props.data3}
          </span>
        </div>
      </Card>
    </Fragment>
  );
};
export default MainItem;
