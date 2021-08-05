import classes from "./Cart.module.scss";
import Modal from "../UI_General/Modal";
import CartItem from "./CartItem";
import AuthContext from "../../auth-context/auth-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(AuthContext);

  //pentru a adauga/inlatura un element pot aplica mai multe variante: pot implementa contextul direct in comp CartItem si realizez acolo conexiunile
  // 🢣 sau implementez logica aici pt ca deja am contextul aplicat aici si doar transmit functiile ca si atribute
  const onAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); // 🢣 suprascriu amount pt a adauga cate un articol
    //                                      altfel imi adauga tot cate erau din acest item(depinde de cat am adaugat din lista initiala)
  };
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //voi avea o lista cu produse -> va fi pe o stare pt ca va trebui sa declanseze o re-evaluare a componentelor
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onAdd={onAddItemHandler.bind(null, item)}
      // 🢣 .bind() pt a pasa acest argument functiei fara a o executa:  o alta varianta ar fi: 🢣🢣🢣
      // onAdd={() => onAddItemHandler(item)}
      onRemove={onRemoveItemHandler.bind(null, item.id)} // {cartCtx.removeItem.bind(null, item.id)} 🢣 varianta
    />
  ));

  // 🢣 pt ca folosesc contextul aici si orice modificare in acesta duce la re-evaluarea acestei componente nu mai este nevoie sa definesc o stare
  //    separat doar pt a afisa sau nu acest buton
  const showOrder = cartCtx.items.length > 0;

  return (
    <Modal onClick={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {showOrder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
