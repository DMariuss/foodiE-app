import Input from "../../UI_General/Input";
import "./MealItemForm.scss";

const MealForm = (props) => {
  const addHandler = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  return (
    <form onSubmit={addHandler} className="meal-form">
      <Input
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
    </form>
  );
};

export default MealForm;
