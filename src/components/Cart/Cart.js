import classes from "./Cart.module.scss";
import Modal from "../UI_General/Modal";
import CartItem from "./CartItem";
import CartContext from "../../cart-context/cart-context";
import Checkout from "./Checkout";
import { useContext, useState } from "react";
import useHttp from "../../hooks/fetch-hook";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  //pt afisarea formularului de completare cu datele utilizatorului
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const {
    isLoading: isSubmiting,
    error: sendError,
    sendRequest: sendOrder,
  } = useHttp();

  //pentru a adauga/inlatura un element pot aplica mai multe variante: pot implementa contextul direct in comp CartItem si realizez acolo conexiunile
  // 🢣 sau implementez logica aici pt ca deja am contextul aplicat aici si doar transmit functiile ca si atribute
  const onAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); // 🢣 suprascriu amount pt a adauga cate un articol
    //                                      altfel imi adauga tot cate erau din acest item(depinde de cat am adaugat din lista initiala)
  };
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const SubmitOrderHandler = async (data) => {
    const configRequest = {
      url: "https://react-http-tests-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: data,
        orderedItems: cartCtx.items,
        totalPrice: cartCtx.totalAmount,
      }),
    };

    //solicitarea pt a posta datele - functia este definita direct aici.
    sendOrder(configRequest, (data) => {
      console.log(data);
      cartCtx.clearCart();
      setDidSubmit(true);
    });
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

  const actionButtons = (
    <div className={classes.actions}>
      <button className={classes["button__alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {showOrder && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  //am creat o variabila in care am continutul modalului pt a-l manipula
  let modalContent = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCloseCart={props.onCloseCart}
          sentData={SubmitOrderHandler}
        />
      )}
      {!isCheckout && actionButtons}
    </>
  );

  //cat timp se incarca sa apara acest text
  if (isSubmiting) {
    modalContent = <p className={classes.sending}>Sending order...</p>;
  }
  //pt o eventuala eroare
  if (sendError) {
    modalContent = (
      <div className={classes.actions}>
        <p className={classes.error}>{sendError}</p>
        <button className={classes.button} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    );
  }
  //cand s-a trimis solicitarea sa imi apara mesajul de confirmare
  if (didSubmit) {
    modalContent = (
      <div className={classes.actions}>
        <p className={classes.sending}>Successfully sent the order!</p>
        <button className={classes.button} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    );
  }

  return <Modal onClick={props.onCloseCart}>{modalContent}</Modal>;
};

export default Cart;
