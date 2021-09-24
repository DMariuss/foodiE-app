// here I will be implementing the footer part
import React from "react";

const Footer = (props) => {
  return (
    <div>
      <aside>
        <p>
          <i class="fas fa-phone"></i> Feedback or suggestions: 0733175085
        </p>
        <p>
          <i class="far fa-envelope"></i>contact@foodie.com
        </p>
        <p>
          <i class="fas fa-map-marked-alt"></i> Ciresoasa Street 102, Sector 1,
          Bucharest, 013346
        </p>
        <p>
          <i class="far fa-calendar-alt"></i>
          Schedule: <br /> Monday - Friday 12:00-22:00 <br /> Saturday - Sunday
          12:00-24:00
        </p>
      </aside>
      <aside>
        <p>SOCIALS</p>
        <div>
          <a>
            <i class="fab fa-facebook-f"></i>
          </a>
          <a>
            <i class="fab fa-instagram"></i>
          </a>
          <a>
            <i class="fab fa-twitter"></i>
          </a>
          <a>
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </aside>
      <div>
        <p>Subscribe to our newsletter</p>
        <div className>
          <label for="subscribe">
            <i class="fas fa-paper-plane"></i>
          </label>
          <input type="email" id="subscribe" />
        </div>
      </div>
      <aside>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Careers</a>
          </li>
          <li>
            <a href="#!">News</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
          <li>
            <a href="#!">Terms and Conditions</a>
          </li>
          <li>
            <a href="#!">Location</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </aside>
      <p>&copy; Copyright 2019. All Rights Reserved. FoodiE</p>
    </div>
  );
};

export default React.memo(Footer);
