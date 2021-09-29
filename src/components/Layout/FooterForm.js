import useInput from "../../hooks/input-hook";
import classes from "./FooterForm.module.scss";

// functia de validare
const isValidEmail = (value) =>
  // eslint-disable-next-line
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

const FooterForm = () => {
  // implementeza hookul personalizat pt validare
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput(isValidEmail);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!emailIsValid) {
      return;
    }

    console.log("email successfully sent");

    emailReset();
  };

  const emailClasses = emailHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={emailClasses}>
        <input
          type="email"
          id="subscribe"
          value={email}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        <button>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
