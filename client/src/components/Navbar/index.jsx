import { Link } from "react-router-dom";
import "./style.scss";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar ${props.handleMenu ? "showMenu" : "hiddenMenu"}`}>
        <div className="navbar__container container">
          <ul className="navbar__menu">
            <li className="navbar__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="navbar__item">
              <Link to="/about">About us</Link>
            </li>
            <li className="navbar__item">
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="navbar__item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar__feature-mobile">
            <p className="navbar__feature-mobile-title">My account</p>
            <div className="navbar__feature-mobile-btn">
              <Link
                to="/login"
                className="navbar__feature-item btn btn-primary"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="navbar__feature-item  btn btn-outline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
