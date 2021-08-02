import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { AuthContextProvider } from "./auth-context/auth-context";

import { useState } from "react";

function App() {
  //implementez aceasta stare aici pt ca aici am aceasta componenta pe care o alternez on/off ⇨ Cart
  //⇨ trimit mai departe functiile ce-mi alterneaza starea, in Header si Cart  ...as putea folosi si context dar nu voi avea modalul reutilizabil(pt ca acolo
  //                                       olosesc functia de inchidere a modalului) ⇨⇨⇨ implementez context-ul in alta ramura din git 🢣 switch-modal-context
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <AuthContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}{" "}
      {/* o pot pune oriunde aici ⇨ React.createPortal */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </AuthContextProvider>
  );
}

export default App;
