import React from "react";
import img from "../../assets/images/9_b9fea98b-252e-488c-a145-a0ef0c.png";
import "./style.scss";
export default function ShopSetup() {
  return (
    <div className="container">
      <div className="shop-setup">
        <div className="shop-setup__img">
          <img src={img} alt="" />
        </div>
        <div className="shop-setup__content">
          <h3 className="shop-setup__title">
            Get the Ultimate Desktop Setup for Productivity
          </h3>
          <p className="shop-setup__p">
            Explore our latest and greatest electronics and accessories their
            new features will be sure to blow your mind and your workflow.
          </p>
          <a href="#" className="shop-setup__btn btn btn-primary">
            shop setup
          </a>
        </div>
      </div>
    </div>
  );
}
