import classes from "./ContactForm.module.scss";
import useInput from "../../hooks/input-hook";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length >= 5;
// special pt verificarea emailului
const isValidEmail = (value) =>
  // eslint-disable-next-line
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

const ContactForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput(isValidEmail);
  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    inputChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: phoneReset,
  } = useInput(isFiveChars);
  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: messageReset,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
    formIsValid = true;
  }

  const resetInputs = () => {
    nameReset();
    emailReset();
    phoneReset();
    messageReset();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const contactDetails = { name, email, message, phone };
    console.log("contact details ->", contactDetails);
    // props.sentData(contactDetails);

    resetInputs();
  };

  const nameClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const emailClasses = emailHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const phoneClasses = phoneHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const messageClasses = messageHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.controls}>
        <div className={nameClasses}>
          <input
            type="text"
            id="contact_name"
            placeholder="Name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={name}
          />
          {nameHasError && <p>Please enter a valid name!</p>}
        </div>
        <div className={emailClasses}>
          <input
            type="email"
            id="contact_email"
            placeholder="Email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={email}
          />
          {emailHasError && <p>Please enter a valid email!</p>}
        </div>
        <div className={phoneClasses}>
          <input
            type="number"
            id="contact_phone"
            placeholder="Mobile phone"
            onChange={phoneInputChangeHandler}
            onBlur={phoneInputBlurHandler}
            value={phone}
          />
          {phoneHasError && <p>Please enter a valid number!</p>}
        </div>
        <div className={messageClasses}>
          <textarea
            type="text"
            rows="8"
            id="contact_message"
            placeholder="Message"
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            value={message}
          />
          {messageHasError && <p>Please enter a valid message!</p>}
        </div>
      </div>
      <div className={classes.actions}>
        <button>SEND MESSAGE</button>
      </div>
    </form>
  );
};

export default ContactForm;
