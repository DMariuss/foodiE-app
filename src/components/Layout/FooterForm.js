import useInput from "../../hooks/input-hook";
import classes from "./FooterForm.module.scss";

const FooterForm = () => {
  // implementeza hookul personalizat pt validare

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit");
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <input type="email" id="subscribe" />
      <button>
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
};

export default FooterForm;
