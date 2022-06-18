
import "./style.scss";
import { v4 } from "uuid";
import collection1 from "../../assets/images/collection1.png";
import collection2 from "../../assets/images/collection2.png";
import collection3 from "../../assets/images/collection3.png";
import collection4 from "../../assets/images/collection4.png";
import collection5 from "../../assets/images/collection5.png";
export default function Collection() {
  const collectionItem = [
    { id: v4(), image: collection1, name: " Headphones", quantity: 16 },
    { id: v4(), image: collection2, name: " Speakers", quantity: 16 },
    {
      id: v4(),
      image: collection3,
      name: " Smart Phones",
      quantity: 16,
    },
    { id: v4(), image: collection4, name: " Computers", quantity: 16 },
    { id: v4(), image: collection5, name: " Cameras", quantity: 16 },
  ];
  return (
    <section className="collection">
      <div className="collection__container container">
        {collectionItem?.map((item) => (
          <div className="collection__item" key={item.id}>
            <a href="/">
              <div className="collection__img">
                <img src={item.image} alt={item.name} />
              </div>
            </a>
            <a href="/">
              <h3 className="collection__name">
                {item.name}{" "}
                <sub className="collection__sub">{item.quantity}</sub>
              </h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
