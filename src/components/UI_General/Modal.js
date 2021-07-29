import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";
import Card from "./Card";

// Voi folosi React.createPortal pt a muta modalul in care am articolele din cosul de cumparaturi

// daca vreau sa inchid ceva cand dau click pe backdrop si folosesc 'context' pt a transmite functia ce face asta 🢣 NU mai este reutilizabil
// ...asa, trimitand functia din componenta in componenta il pot reutiliza si in alta parte(cu alta functie)
const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick}></div>
);

const ModalOverlay = (props) => (
  <Card className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </Card>
);

// 🢣 Modalul ce-mi va infasura elementele din componenta Cart 🢣 componenta generala
const Modal = (props) => {
  const cartModal = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, cartModal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        cartModal
      )}
    </>
  );
};

export default Modal;
