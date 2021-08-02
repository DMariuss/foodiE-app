import React, { useReducer } from "react";

// Voi folosi acest context pt a implementa logica ce-mi permite sa adaug si sa inlatur elemente din cosul
// de cumparaturi 🢣 voi avea un un obiect cu articolele create(o functie ce-mi va adauga in items obiecte cu datele preluate din MealItem -un nou obiect ce va contine ceva date din obiectul cu mancare + amount)
//                🢣 un cost total

//Puteam imparti aceasta logica in doua 🢣 un fisier in care sa am crearea contextului
//                                      🢣 un fisier in care sa am componenta provider
const AuthContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

// 🢣 valorile implicite ale proprietatilor starii din reduce
const defaultValues = { items: [], totalAmount: 0 };

const reducerFn = (state, action) => {
  switch (action.type) {
    case "ADD":
      return defaultValues;
    case "REMOVE":
      return defaultValues;
    default:
      return defaultValues;
  }
};

// Componenta ce va infasura componentele in care voi folosi contextul
export const AuthContextProvider = (props) => {
  // 🢣 folosesc reducer pt a retine starea
  const [cartState, dispatchCartAction] = useReducer(reducerFn, defaultValues);

  //functia ce-mi trimite o comanda de a adauga un articol in lista 🢣 logica este in reducer
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", payload: item }); // sau: ,item: item
  };
  //functia ce-mi trimite comanda de a inlatura un articol din lista 🢣 logica este in reducer
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id }); // sau: ,id: id
  };

  //🢣 declarat separat, contine tot ceea ce voi trimite in context pt a fi accesat din alte componente
  const cartContext = {
    // valorile vor fi adaugate dinamic
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <AuthContext.Provider value={cartContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
