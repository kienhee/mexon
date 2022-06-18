import React from "react";
import "./style.scss";
import img from "../../assets/images/blockimg.png";
export default function index() {
  return (
    <div className="container">
      <div className="section-sale ">
        <div className="flex gap-10 section-sale__content">
          <div className="flex flex-direction gap-20 section-sale__left">
            <h3 className="section-sale__name">
              Sony Headphone Discount 20%
            </h3>
            <p className="section-sale__pragraph">
              Whether you're out to play or stepping out to make a
              fashionable statement.
            </p>
          </div>
          <div className="flex flex-direction gap-20 section-sale__right">
            <p className="section-sale__price-old">$139.00</p>
            <p className="section-sale__price">$129.00</p>
            <a href="/" className="btn btn-primary section-sale__btn">
              Shop Now
            </a>
          </div>
          <div className="section-sale__img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
