import classes from "./CardComplex.module.scss";

const CardComplex = (props) => (
  <div className={`${classes.card} ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

export default CardComplex;
