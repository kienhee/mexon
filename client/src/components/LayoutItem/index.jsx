import "./style.scss";
import Card from "../card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/productsSlice";
export default function LayoutItem() {
  const cartItem = useSelector((state) => state.products.listProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [cartItem]);

  return (
    <section className="layout-item">
      <div className="layout-item__container  ">
        <Card Data={cartItem} />
      </div>
    </section>
  );
}
