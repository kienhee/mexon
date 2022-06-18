import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

export default function index(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="slider ">
      <Slider {...settings}>
        {props.data?.map((item) => (
          <div className="slider__item" key={item.id}>
            <img src={item.image} className="slider__img" alt={item.name} />
            <div className="slider__container container">
              <div className="slider__content">
                <div className="slider__subtitle">{item.subtitle}</div>
                <div className="slider__title">{item.title}</div>
              </div>
              <a
                href={`/shop/${item.id}`}
                className="slider__btn btn btn-outline"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
