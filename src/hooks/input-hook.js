import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const reducerFN = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    default:
      return initialState;
  }
};

const useInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(reducerFN, initialState);

  const isValid = validateInput(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
