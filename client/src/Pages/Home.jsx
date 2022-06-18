import React from "react";
import { v4 } from "uuid";
import SectionProduct from "../components/SectionProduct";
import Collection from "../components/Collection";
import LayoutItem from "../components/LayoutItem";
import Benefits from "../components/Benefits";
import Slider from "../components/Slider";
import sliderImg1 from "../assets/images/slider1.png";
import sliderImg2 from "../assets/images/slider2.png";
import sliderImg3 from "../assets/images/slider3.png";
import Title from "../components/Title";
import Carousel from "../components/Carousel";
import SectionSale from "../components/SectionSale";
import ShopSetup from "../components/ShopSetup";
export default function Home() {
  const sliderData = [
    {
      id: v4(),
      image: sliderImg1,
      title: "Bluetooth Wireless Earbuds Headphone",
      subtitle: "🔥 Hot Deal This Week",
    },
    {
      id: v4(),
      image: sliderImg2,
      title: "Camera AI Human Detection Waterproof",
      subtitle: "🔥 Hot Deal This Week",
    },
    {
      id: v4(),
      image: sliderImg3,
      title: "Portable Bluetooth 4.2 Speaker",
      subtitle: "🔥 Hot Deal This Week",
    },
  ];
  return (
    <main id="home">
      <Slider data={sliderData} />
      <SectionProduct />
      <Title title={"Trending Collection"} />
      <Collection />
      <Title title={"This week's highlights"} />
      <div className="container">
        <LayoutItem />
      </div>
      <SectionSale />
      <Title title={"Recommend for you"} />
      <Carousel />
      <ShopSetup/>
      <Benefits />
    </main>
  );
}
