import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Meals Cart</span>
      <span>4</span>
    </button>
  );
};

export default CartButton;
