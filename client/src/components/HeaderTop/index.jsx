import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Navbar from "../Navbar";
import Cart from "../Cart";
export default function HeaderTop() {
  const [showHiddenMenu, setShowHiddeMenu] = useState(false);
  const [showHiddenCart, setShowHiddeCart] = useState(false);

  function handleShowHideMenu() {
    showHiddenMenu !== true ? setShowHiddeMenu(true) : setShowHiddeMenu(false);
  }
  function handleShowHideCart() {
    showHiddenCart !== true ? setShowHiddeCart(true) : setShowHiddeCart(false);
  }
  function handleRemoveBg() {
    if (showHiddenMenu === true && showHiddenCart === false) {
      setShowHiddeMenu(!setShowHiddeMenu);
    } else {
      setShowHiddeCart(!setShowHiddeCart);
    }
  }
  useEffect(() => {
    const navbarItems = document.querySelectorAll(".navbar__item");
    const navbarFeatureItems = document.querySelectorAll(
      ".navbar__feature-item "
    );
    if (window.screen.availWidth <= 739) {
      navbarItems.forEach((navbarItem) => {
        navbarItem.addEventListener("click", handleShowHideMenu);
      });
      navbarFeatureItems.forEach((navbarFeatureItem) => {
        navbarFeatureItem.addEventListener("click", handleShowHideMenu);
      });
    } else {
      setShowHiddeMenu(false);
    }
  }, [showHiddenMenu]);
  useEffect(() => {
    const closeCart = document.querySelector(".cart__close");
    closeCart.addEventListener("click", () => handleShowHideCart());
  }, [showHiddenCart]);
  return (
    <>
      <div className="header-top">
        <div className="header-top__container container">
          <div className="header-top__menu-mobile" onClick={handleShowHideMenu}>
            <ion-icon name="menu"></ion-icon>
          </div>
          <Link to="/" className="header-top__logo">
            <img src={require("../../assets/images/logo.png")} alt="Logo" />
          </Link>
          <div className="header-top__input-search">
            <p>Search products</p>
            <ion-icon name="search-outline"></ion-icon>
          </div>

          <ul className="header-top__feature  ">
            <li className="header-top__icon header-top__input-search-mobile ">
              <Link to="/">
                <ion-icon name="search-outline"></ion-icon>
              </Link>
            </li>
            <li className="header-top__icon tooltip header-top__icon-person">
              <Link to="/login">
                <ion-icon name="person-outline"></ion-icon>
                <p className="tooltiptext">person</p>
              </Link>
            </li>
            <li className="header-top__icon header-top__icon-relative tooltip header-top__icon-wishlist">
              <Link to="/">
                <ion-icon name="star-outline"></ion-icon>
                <p className="header-top__icon-total">1</p>
                <p className="tooltiptext">Wishlist</p>
              </Link>
            </li>
            <li className="header-top__icon header-top__icon-relative tooltip header-top__icon-bag">
              <ion-icon
                name="bag-outline"
                onClick={handleShowHideCart}
              ></ion-icon>
              <p className="header-top__icon-total">1</p>
              <p className="tooltiptext">Cart</p>
            </li>
          </ul>
        </div>
      </div>
      <Navbar handleMenu={showHiddenMenu} />
      <Cart handleCart={showHiddenCart} />
      <div
        className={` ${showHiddenMenu || showHiddenCart ? "bg-overlay" : "remove-overlay"
          } `}
        onClick={handleRemoveBg}
      ></div>
    </>
  );
}
