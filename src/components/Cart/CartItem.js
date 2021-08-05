import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const fixedPrice = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{fixedPrice}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {/* <button onClick={() => cartCtx.removeItem(props.item.id)}> 🢣 daca foloseam contextul aici*/}
        <button onClick={props.onRemove}>&#8722;</button>
        <button onClick={props.onAdd}>&#43;</button>
      </div>
    </li>
  );
};

export default CartItem;
