import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.item.price}</span>
          <span className={classes.amount}>x 1</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>&#8722;</button>
        <button>&#43;</button>
      </div>
    </li>
  );
};

export default CartItem;
