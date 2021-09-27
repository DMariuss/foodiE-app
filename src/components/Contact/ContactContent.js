import ContactForm from "./ContactForm";
import CardComplex from "../UI_General/CardComplex";
import Map from "./Map";
import classes from "./ContactContent.module.scss";

const Contact = (props) => {
  return (
    <section className={classes.contact}>
      <CardComplex>
        <h2>Contact Us</h2>
        <p className={classes.talk}>Let's talk</p>
      </CardComplex>
      <aside className={classes.contact__container}>
        <div className={classes.contact__information}>
          <h3>Contact information</h3>
          <p>
            <i className="fas fa-map-marked-alt"></i> Ciresoasa Street 102,
            Sector 1, Bucharest, 013346
          </p>
          <p>
            <i className="fas fa-phone"></i> 0733175085
          </p>
          <p>
            <i className="far fa-envelope"></i> contact@foodie.com
          </p>
          <p>
            <i className="far fa-calendar-alt"></i>
            Schedule: <br /> Monday - Friday 07:00-19:00 <br /> Saturday -
            Sunday 12:00-22:00
          </p>
        </div>
        <div className={classes.contact__form}>
          <h3>Leave a message</h3>
          <ContactForm />
        </div>
      </aside>
      <div className={classes.contact__map}>
        <h3>Our location</h3>
        <Map />
      </div>
    </section>
  );
};

export default Contact;
