
import "./style.scss";
export default function Card(props) {
  return (
    <>
      {props.Data?.map((item) => (
        <div className="card" key={item.id}>
          <div className="card__img">
            <img src={item.image} alt={item.name} />
            <div className="card__img-sub">
              <img src={item.imageSub} />
            </div>
            <div className="card__hover"> 
              <ul className="card__feature">
                <li className="card__icon card__icon-wishlist tooltip">
                  <p className="tooltiptext-left">Wishlist</p>
                  <ion-icon name="star-outline"></ion-icon>
                </li>
                <li className="card__icon card__icon-wishlist tooltip">
                  {" "}
                  <p className="tooltiptext-left">Quick view</p>
                  <ion-icon name="eye-outline"></ion-icon>
                </li>
              </ul>
              <a href="" className="btn btn-primary card__btn">
                Quick Add
              </a>
            </div>
          </div>
          <div className="card__content flex flex-direction gap-5 align-center justify-center">
            <small className="card__brand">{item.brand}</small>
            <h3 className="card__name">{item.name}</h3>
            <div className="flex gap-10 align-center justify-center card__content-price">
              <p className="card__price">${item.price}.00</p>
              <p className="card__price-old">${item.oldPrice}.00</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
