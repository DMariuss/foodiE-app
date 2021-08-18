import classes from "./Checkout.module.scss";
import useInput from "../../hooks/input-hook";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    inputChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: postalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    inputChangeHandler: postalCodeInputChangeHandler,
    inputBlurHandler: postalCodeInputBlurHandler,
  } = useInput(isFiveChars);
  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const userOrderDetails = { name, street, city, postalCode };
    props.sentData(userOrderDetails);
  };

  const nameClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const streetClasses = streetHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const postalClasses = postalCodeHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const cityClasses = cityHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.controls}>
        <div className={nameClasses}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={name}
          />
          {nameHasError && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetClasses}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={streetInputChangeHandler}
            onBlur={streetInputBlurHandler}
            value={street}
          />
          {streetHasError && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalClasses}>
          <label htmlFor="postal">Postal code</label>
          <input
            type="text"
            id="postal"
            onChange={postalCodeInputChangeHandler}
            onBlur={postalCodeInputBlurHandler}
            value={postalCode}
          />
          {postalCodeHasError && <p>Please enter a valid postal code >=5 !</p>}
        </div>
        <div className={cityClasses}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={cityInputChangeHandler}
            onBlur={cityInputBlurHandler}
            value={city}
          />
          {cityHasError && <p>Please enter a valid city!</p>}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCloseCart}>
          Cancel
        </button>
        <button disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
