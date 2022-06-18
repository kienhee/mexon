import React from 'react'

export default function index() {
  return (
    <div className="header-top">
      <div className="header-top__container container">
        <a href="/" className="header-top__logo">
          <img src={require("../../assets/images/logo.png")} alt="Logo" />
        </a>
        <div className="header-top__input-search">
          <p>Search products</p>
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <ul className="header-top__feature">
          <li className="header-top__icon tooltip">
            <a href="/">
              <ion-icon name="person-outline"></ion-icon>
              <p className="tooltiptext">person</p>
            </a>
          </li>
          <li className="header-top__icon header-top__icon-relative tooltip">
            <a href="/">
              <ion-icon name="star-outline"></ion-icon>
              <p className="header-top__icon-total">1</p>
              <p className="tooltiptext">Wishlist</p>
            </a>
          </li>
          <li className="header-top__icon header-top__icon-relative tooltip">
            <a href="/">
              <ion-icon name="bag-outline"></ion-icon>
              <p className="header-top__icon-total">1</p>
              <p className="tooltiptext">Cart</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
