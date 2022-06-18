
import "./style.scss";
import Card from "../card";
import { v4 } from "uuid";
export default function LayoutItem() {
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
    <section className="layout-item">
      <div className="layout-item__container  ">
        <Card Data={cartItem} />
      </div>
    </section>
  );
}
