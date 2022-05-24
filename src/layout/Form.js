import React from "react";
import "../assets/css/Form.css";

const Form = () => {
  return (
    <>
      <div className="form">
        <form className="form--container">
          <div className="form__header">weather forecast</div>
          <div className="form__content">
            <div className="form__content--input">
              <input
                className="input--text"
                type="text"
                placeholder="Your city"
              />
            </div>
            <div className="form__content--button">
              <input type="button" className="input--button" value="Search" />
            </div>
          </div>
          <div className="form__footer">
            <a href="https://github.com/QuangMinh8699" target="_blank">
              <i class="form__footer--bi bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/quangminh8699/"
              target="_blank"
            >
              <i class="form__footer--bi bi bi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/minh8699/" target="_blank">
              <i class="form__footer--bi bi bi-facebook"></i>
            </a>
            <a href="https://openweathermap.org/api" target="_blank">
              <i class="form__footer--bi bi bi-brightness-high-fill"></i>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
