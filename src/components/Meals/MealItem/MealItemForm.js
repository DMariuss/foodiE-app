import Input from "../../UI_General/Input";
import classes from "./MealItemForm.module.scss";

const MealForm = (props) => {
  const addHandler = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  return (
    <form onSubmit={addHandler}>
      <Input
        label="Amount"
        inputs={{
          id: "amount_" + props.id,
          type: "number",
          //   onCLick: "something",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
