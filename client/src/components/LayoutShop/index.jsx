import "./style.scss";
import Card from "../card";
import { useState, useEffect } from "react";
export default function LayoutShop(props) {
  const [layoutCol, setLayoutCol] = useState("grid-4");
  useEffect(() => {
    const ClientWidth = window.screen.width;
    if (ClientWidth <= 599) {
      setLayoutCol("grid-1");
    } else if (ClientWidth >= 600 && ClientWidth < 1023) {
      setLayoutCol("grid-2");
    } else if (ClientWidth >= 1024) {
      setLayoutCol("grid-4");
    }
    console.log(ClientWidth);
  }, []);

  return (
    <div className="shop-layout">
      <div className="shop-layout__nav flex justify-between align-center">
        <p> Alphabetically, A-Z</p>
        <div className="shop-layout__feature">
          <button
            className="shop-layout__btn shop-layout__btn-1"
            onClick={() => setLayoutCol("grid-1")}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>{" "}
          <button
            className="shop-layout__btn shop-layout__btn-2"
            onClick={() => setLayoutCol("grid-2")}
          >
            <ion-icon name="reorder-two-outline"></ion-icon>
          </button>{" "}
          <button
            className="shop-layout__btn shop-layout__btn-3"
            onClick={() => setLayoutCol("grid-3")}
          >
            <ion-icon name="reorder-three-outline"></ion-icon>
          </button>
          <button
            className="shop-layout__btn shop-layout__btn-4"
            onClick={() => setLayoutCol("grid-4")}
          >
            <ion-icon name="reorder-four-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className={layoutCol}>
        <Card Data={props.data} />
      </div>
    </div>
  );
}
