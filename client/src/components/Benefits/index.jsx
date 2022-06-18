
import { v4 } from "uuid";
import benefit1 from "../../assets/images/benefit1.png";
import benefit2 from "../../assets/images/benefit2.png";
import benefit3 from "../../assets/images/benefit3.png";
import "./style.scss";
export default function Benefits() {
  const benefitItem = [
    {
      id: v4(),
      icon: benefit1,
      name: "free shipping",
      content:
        "Get complimentary ground shipping on every order.Don’t love it? Send it back, on us.",
    },
    {
      id: v4(),
      icon: benefit2,
      name: "Earn Points",
      content:
        "Join Minimog Rewards to earn gift cards and enjoy exclusive member benefits.",
    },
    {
      id: v4(),
      icon: benefit3,
      name: "Money Back Gurantee",
      content:
        "We believe getting dressed should be the easiest part of your day.",
    },
  ];
  return (
    <div className="benefit">
      <div className="benefit__container container">
        {benefitItem?.map((b) => (
          <div className="benefit__item"  key={b.id}>
            <img src={b.icon} className="benefit__img" />
            <h3 className="benefit__name">{b.name}</h3>
            <p className="benefit__content">{b.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
