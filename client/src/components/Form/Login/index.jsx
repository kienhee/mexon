import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.scss";
export default function Login() {
  const [showHideForgot, setShowHideForgot] = useState(false);
  return (
    <div className="login">
      <div className="login__container container">
        {showHideForgot ? (
          <form className="reset-password">
            <h3 className="form__heading">Reset your password</h3>
            <p className="form__paragraph">
              We will send you an email to reset your password.
            </p>
            <div className="form__group">
              <input
                type="text"
                className="form__control"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-between align-center gap-10">
              <button type="submit" className="btn btn-primary btn-form">
                Sign In
              </button>
              <button
                className="color-secondary btn"
                onClick={() => setShowHideForgot(!showHideForgot)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <form action="#" className="login__form">
            <h3 className="form__heading">Login</h3>
            <div className="form__group">
              <input
                type="text"
                className="form__control"
                placeholder="Email"
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__control"
                placeholder="Password"
              />
            </div>
            <p
              className="login__forgot"
              onClick={() => setShowHideForgot(!showHideForgot)}
            >
              Forgot your password?
            </p>
            <button type="submit" className="btn btn-primary btn-form">
              Sign In
            </button>
          </form>
        )}

        <div className="login__right">
          <h3 className="form__heading">New Customer</h3>
          <p className="form__paragraph">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <Link to="/register" className="btn btn-primary btn-form">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
