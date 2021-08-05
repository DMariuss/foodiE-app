import React, { useReducer, useEffect } from "react";

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
      //caut elementul si preiau indexul acestuia pt mai tarziu
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      //extrag elementul 🢣 chiar daca este prelua asa nu-l modific direct
      const existingItem = state.items[existingCartItemIndex]; // referinta este catre acel loc in memorie(⇨ muabil)
      let updatedItems;

      if (existingItem) {
        // daca nu exista ⇨ undefined
        //creez un nou obiect in care am aceleasi date, dar se schimba 'amount'
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        //creez o noua lista cu obiectele existente si inlocuiesc articolul existent cautat
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
        // updatedItems = state.items.concat(action.payload); //🢣 varianta cu acelasi rezultat ca mai sus
      }

      const updatedAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      return { items: updatedItems, totalAmount: updatedAmount };

    case "REMOVE":
      // vad doua abordari:
      //       1 🢣 creez o copie a listei si o modific direct 🢣 .find + prelucrarea articolului direct 🢣🢣🢣 returnez in starea listei noua lista
      //       2 🢣 creez o copie a articolului 🢣 .findIndex(pt ca am nevoie sa si inlocuiesc articolul de la aceasta pozitie) + il prelucrez/modific +
      //            creez o copie a listei in care voi inlocui articolul de pe acel index 🢣🢣🢣 returnez in stare listei noua lista
      // metoda 2 am folosit-o pt adaugare 🢣 ambele sunt abordari de tip imuabil 🢣 o voi aplica pe prima aici.

      //copiez lista
      let updatedList = [...state.items]; // sau 🢣 state.items.concat() 🢣 state.items.slice()
      //preiau articolul (find imi intoarce valoarea obiectului cautat, adica obiectul) pt a lucra direct pe el
      const removedItem = updatedList.find(
        (item) => item.id === action.payload
      ); // orice modificare asupra lui se va raspandi in locu de unde este copiat 🢣 varianta: crearea unui nou obiect {...foundItem}
      //       ⇧ CHIAR SI ASA ⇧ cand inlocuim lista o facem cu alta adresa din memorie a copiei listei
      removedItem.amount -= 1;

      if (removedItem.amount === 0) {
        updatedList = updatedList.filter((item) => item.id !== action.payload);
      }
      // ************************************************************* abordarea 2
      // preiau indexul articolului
      //   const removedItemIndex = state.items.findIndex(
      //     (item) => item.id === action.payload
      //   );
      //   //preiau elementul cautat
      //   const removedItem = state.items[removedItemIndex];
      //   //creez o noua copie a obiectului cu articolul in care modific cantitatea acestuia
      //   const updatedItem = { ...removedItem, amount: removedItem.amount - 1 }; // 🢣 date imuabile

      //   //copiez lista si o actualizez inlocuind obiectul articolului cu noul obiect modificat
      //   let updatedList = [...state.items];
      //   updatedList[removedItemIndex] = updatedItem;

      //   //daca cantitatea = 0 atunci filtrez lista si voi avea o noua lista fara obiectul articolului inlaturat
      //   if (updatedItem.amount === 0) {
      //     updatedList = state.items.filter((item) => item.id !== action.payload);
      //     //              ⇧ ori pe state.items ori pe updatedList este acelasi lucru
      //   }
      // *************************************************************

      const updatedAmount1 = state.totalAmount - removedItem.price; //pt ca scad cate un articol

      return { items: updatedList, totalAmount: updatedAmount1 };

    case "SAVED_CART":
      const savedList = action.payload;
      //calculez suma totala
      const savedAmount = savedList.reduce(
        (total, item) => (total += item.amount * item.price),
        0
      );
      // reintorc noua stare din reducer
      return { items: savedList, totalAmount: savedAmount };

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

  //**************************************************************** Salvarea starii cosului de cumparaturi */

  // 🢣 rolul de a prelua datele din localStorage si de a actualiza cosul cu ele
  //    🢣 la reincarcarea paginii
  useEffect(() => {
    //preiau valoarea
    const cartValue = localStorage.getItem("cart");

    //daca am salvata lista de cumparaturi(daca nu este salvata inseamna ca lista este goala)
    if (cartValue) {
      // o parsez/transform inapoi in vector
      const parsedCartValue = JSON.parse(cartValue);
      // o trimit in Reducer pt a fi pusa in variabila de stare a listei cu articole
      dispatchCartAction({ type: "SAVED_CART", payload: parsedCartValue });
    }
  }, []);

  // 🢣 rolul de a adauga lista cu articole in memoria locala
  useEffect(() => {
    //transform vectorul in elem de tip Json
    const savedCart = JSON.stringify(cartState.items);
    localStorage.setItem("cart", savedCart);
    //daca lista este goala atunci inlatur salvarea
    if (cartState.items.length === 0) {
      localStorage.removeItem("cart");
    }
  }, [cartState.items]);
  //**************************************************************** */

  return (
    <AuthContext.Provider value={cartContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
