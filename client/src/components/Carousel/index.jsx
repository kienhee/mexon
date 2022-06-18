import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/productsSlice";
export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 300,
        },
      },
    ],
    cssEase: "linear",
  };

  const cartItem = useSelector((state) => state.products.listProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <section className="carousel container">
      <Slider {...settings}>
        {cartItem?.map((item) => (
          <div className="carousel__item " key={item._id}>
            <div className="card">
              <div className="card__img">
                <img
                  src={`http://localhost:8080/images/${item.images[0]}`}
                  alt={item.name}
                />
                <div className="card__img-sub">
                  <img src={`http://localhost:8080/images/${item.images[1]}`} />
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
                <div className="flex gap-10 align-center justify-center">
                  <p className="card__price">${item.price}.00</p>
                  <p className="card__price-old">${item.sale}.00</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
