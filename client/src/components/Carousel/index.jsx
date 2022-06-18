import { v4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

export default function carousel() {
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
  const cartItem = [
    {
      id: v4(),
      image:
        "https://truongthanhaudio.com/upload/original-image/loa-3-duong-tieng.jpg",
      imageSub:
        "https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "test",
      brand: "test",
      price: 200,
      oldPrice: 300,
    },
    {
      id: v4(),
      image:
        "https://truongthanhaudio.com/upload/original-image/loa-3-duong-tieng.jpg",
      name: "test",
      brand: "test",
      price: 200,
      oldPrice: 300,
    },
    {
      id: v4(),
      image:
        "https://truongthanhaudio.com/upload/original-image/loa-3-duong-tieng.jpg",
      name: "test",
      brand: "test",
      price: 200,
      oldPrice: 300,
    },
    {
      id: v4(),
      image:
        "https://truongthanhaudio.com/upload/original-image/loa-3-duong-tieng.jpg",
      name: "test",
      brand: "test",
      price: 200,
      oldPrice: 300,
    },
    {
      id: v4(),
      image:
        "https://truongthanhaudio.com/upload/original-image/loa-3-duong-tieng.jpg",
      name: "test",
      brand: "test",
      price: 200,
      oldPrice: 300,
    },
  ];
  return (
    <section className="carousel container">
      <Slider {...settings}>
        {cartItem?.map((item) => (
          <div className="carousel__item " key={item.id}>
            <div className="card">
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
                <div className="flex gap-10 align-center justify-center">
                  <p className="card__price">${item.price}.00</p>
                  <p className="card__price-old">${item.oldPrice}.00</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
