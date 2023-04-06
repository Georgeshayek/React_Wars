
import classes from './Toggler.module.css'
const Toggler=(props)=>{
    return(
        <div className={classes.toggler}>
        <span> {props.span} </span>
    <input className={classes.input} type="checkbox"  checked={props.value?true:false}  id={props.id} onChange={props.onChange} /><label id='switch' className={classes.label} htmlFor={props.id}>Toggle</label>
    </div>
    
    )
}
export default Toggler