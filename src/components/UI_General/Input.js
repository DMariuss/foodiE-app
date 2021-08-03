import React from "react";

//folosesc React.forwardRef pt a face legatura intre ref de pe componenta Input si elementul din aceasta pt a prelua valoarea
const Input = React.forwardRef((props, ref) => {
  // const options = ['cats', 'dogs', 'hamsters', 'snakes']; // 🢣 example of array with options

  return (
    //   .input-action stylings are in MealItemForm.scss
    <div className="input-action">
      <label htmlFor={props.inputs.id}>{props.label}</label>
      {props.inputType === "input" && <input {...props.inputs} ref={ref} />}
      {props.inputType === "select" && (
        <select {...props.inputs}>
          {" "}
          {props.options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      )}
      {props.inputType === "textarea" && (
        <textarea {...props.inputs}>{props.children}</textarea>
      )}
    </div>
  );
});

// 🢣 pentru a adauga proprietati implicite 🢣 🢣 in cazul in care nu specific
Input.defaultProps = {
  inputType: "input",
}; // inpuType ⇨ 'input/select/textarea'

export default Input;
