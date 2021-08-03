import Input from "../../UI_General/Input";
import "./MealItemForm.scss";
import { useRef, useState } from "react";

const MealForm = (props) => {
  //adaug o stare pt a adauga validitate(daca nu este valid se modifica starea 🢣 rerandare si adaugarea mesajului la invaliditate)
  const [amountIsValid, setAmountIsValid] = useState(true);
  //folosesc referinta pe elem input din componenta Input 🢣 preiau valoarea
  const inputRef = useRef();

  const addHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // 🢣 pt a-l converti la tipul 'number'

    //adaug validare si o stare pt a gestiona limitele 🢣 verificarea o fac pe string-ul introdus
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    //trimit datele catre componenta parinte pt ca am nevoie de mai multe date pt a trimite obiectul catre cosul de cumparaturi
    props.onAddAmount(enteredAmountNumber); // 🢣 trimit data ca 'number'
    //am pus-o in conditie pt a nu declansa o modificare a starii de fiecare data.
    !amountIsValid && setAmountIsValid(true);
  };

  return (
    <form onSubmit={addHandler} className="meal-form">
      <Input
        ref={inputRef}
        label="Amount"
        inputs={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <p className="invalid">Please enter a valid amount between 1 and 5!</p>
      )}
    </form>
  );
};

export default MealForm;
