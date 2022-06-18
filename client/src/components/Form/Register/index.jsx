import React from "react";
import { Link } from "react-router-dom";
import "../style.scss";
export default function index() {
  return (
    <div className="register ">
      <div className="register__container container">
        <h3 className="form__heading">Register</h3>
        <form action="#" className="regiter__form">
          <div className="form__group">
            <input
              type="text"
              className="form__control"
              placeholder="Firt Name"
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              className="form__control"
              placeholder="Last Name"
            />
          </div>
          <div className="form__group">
            <input type="text" className="form__control" placeholder="Email" />
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__control"
              placeholder="Password"
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__control"
              placeholder="Confirm Password"
            />
          </div>
          <p className="form__paragraph">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <button
            type="submit"
            className="btn btn-primary btn-form register__btn"
          >
            Register
          </button>
          <Link to="/login" className="btn btn-outline btn-form">
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}
