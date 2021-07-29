import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartModalContext from "./auth-context/cartModal-context";

import { useContext } from "react";

function App() {
  //implementez aceasta stare aici pt ca aici am aceasta componenta pe care o alternez on/off ⇨ Cart
  //⇨ trimit mai departe functiile ce-mi alterneaza starea, in Header si Cart  ...as putea folosi si context dar nu voi avea modalul reutilizabil(pt ca acolo
  //                                       folosesc functia de inchidere a modalului) ⇨⇨⇨ implementez context-ul in alta ramura din git 🢣 switch-modal-context
  // ⇨ ⇨ ⇨ implementare cu cartModal-context.js
  const cartModalCtx = useContext(CartModalContext);

  return (
    <>
      {cartModalCtx.cartIsShown && <Cart />}{" "}
      {/* o pot pune oriunde aici ⇨ React.createPortal */}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
