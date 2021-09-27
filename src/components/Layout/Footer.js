import FooterForm from "./FooterForm";
import React from "react";
import classes from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <section className={classes.footer__block}>
        <aside className={classes.footer__contacts}>
          <h4>Feedback or suggestions:</h4>
          <p>
            <i className="fas fa-phone"></i> 0733175085
          </p>
          <p>
            <i className="far fa-envelope"></i>contact@foodie.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> Ciresoasa Street 102,
            Sector 1, Bucharest, 013346
          </p>
          <p>
            <i className="far fa-calendar-alt"></i>
            Schedule: <br /> Monday - Friday 07:00-19:00 <br /> Saturday -
            Sunday 12:00-22:00
          </p>
        </aside>
        <aside className={classes.footer__socials}>
          <h4>Subscribe to our newsletter</h4>
          <FooterForm />

          <h4>SOCIALS</h4>
          <div className={classes.footer__socials__icons}>
            <a href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </aside>
        <aside className={classes.footer__navmap}>
          <h4>Quick Access</h4>
          <ul>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Delivery Details</a>
            </li>
            <li>
              <a href="#!">News</a>
            </li>
            <li>
              <a href="#!">Location</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Terms and Conditions</a>
            </li>
          </ul>
        </aside>
      </section>
      <p>&copy; Copyright 2021. All Rights Reserved. </p>
    </footer>
  );
};

export default React.memo(Footer);
