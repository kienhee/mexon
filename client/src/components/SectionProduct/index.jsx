
import "./style.scss";
import { v4 } from "uuid";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
export default function SectionProduct() {
  const item = [
    { id: v4(), name: "New Generation  Power Bank", img: img1 },
    { id: v4(), name: "Sonos Radio HD  is here", img: img2 },
    { id: v4(), name: "Modern & Style  Headphones", img: img3 },
  ];
  return (
    <section className="section-product">
      <div className="section-product__container container">
        {item.map((item) => (
          <div className="section-product__item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="section-product__content">
              <h3 className="section-product__name">{item.name}</h3>
              <a href={`/${item.id}`} className="section-product__link">
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
