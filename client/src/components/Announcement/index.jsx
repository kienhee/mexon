
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

export default function Announcement() {
  const social = [
    { id: uuidv4(), link: "https://www.facebook.com/", icon: "logo-facebook" },
    {
      id: uuidv4(),
      link: "https://www.instagram.com/",
      icon: "logo-instagram",
    },
    { id: uuidv4(), link: "https://twitter.com/", icon: "logo-twitter" },
  ];

  return (
    <div id="announcement">
      <div className="announcement container">
        <div className="announcement__container">
          <ul className="announcement__socials">
            {social.map((icon) => (
              <li className="announcement__icon" key={icon.id}>
                <a href={icon.link} target="_blank" rel="noreferrer">
                  <ion-icon name={icon.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
          <ul className="announcement__feature">
            <li className="announcement__icon">
              <a href="#">
                <ion-icon name="location-outline"></ion-icon>&nbsp; Find a
                strote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
