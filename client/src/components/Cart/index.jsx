import "./style.scss";
export default function Cart(props) {
  return (
    <div className={`cart ${props.handleCart ? "showCart" : "hiddenCart"}`}>
      <div className="cart__top flex justify-between align-center">
        <p>Shopping Cart</p>
        <span className="cart__close">

        <ion-icon name="close"></ion-icon>
        </span>
      </div>
      <ul className="cart__container">
        <li className="cart__item">
          <a className="cart__item-img" href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0042/0750/9567/products/12_de797329-bdfb-45ac-a872-51039f2e3f42_720x.png?v=1623826784"
              alt=""
            />
          </a>
          <div className="cart__item-info">
            <a href="/" className="cart__item-name">
              Noise Cancelling Wireless Headset
            </a>{" "}
            <p className="cart__item-price">$225.50</p>
            <div className="flex align-center gap-10">
              <div className="cart__item-quantity">
                <button className="cart__item-quantity-btn">
                  <ion-icon name="remove"></ion-icon>
                </button>
                <span className="cart__item-quantity-number">1</span>
                <button className="cart__item-quantity-btn">
                  <ion-icon name="add"></ion-icon>
                </button>
              </div>
              <a href="/" className="cart__item-delete">
                Remove
              </a>
            </div>
          </div>
        </li>
        <li className="cart__item">
          <a className="cart__item-img" href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0042/0750/9567/products/12_de797329-bdfb-45ac-a872-51039f2e3f42_720x.png?v=1623826784"
              alt=""
            />
          </a>
          <div className="cart__item-info">
            <a href="/" className="cart__item-name">
              Noise Cancelling Wireless Headset
            </a>{" "}
            <p className="cart__item-price">$225.50</p>
            <div className="flex align-center gap-10">
              <div className="cart__item-quantity">
                <button className="cart__item-quantity-btn">
                  <ion-icon name="remove"></ion-icon>
                </button>
                <span className="cart__item-quantity-number">1</span>
                <button className="cart__item-quantity-btn">
                  <ion-icon name="add"></ion-icon>
                </button>
              </div>
              <a href="/" className="cart__item-delete">
                Remove
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
