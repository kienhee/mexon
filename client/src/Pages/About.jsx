import Title from "../components/Title";
import "./about.scss";
import Benefits from "../components/Benefits";
import aboutImg from "../assets/images/about.png";
import our1 from "../assets/images/our-1.png";
import our2 from "../assets/images/our-2.png";
import our3 from "../assets/images/our-3.png";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__contaniner container">
        <Title title={"About Us"} />
        <img src={aboutImg} alt="about us" />
        <div className="about__text">
          <h3 className="about__block-heading">
            It pains me physically to see woman victimized, <br /> rendered
            pathetic by fashion.
          </h3>
          <h5 className="about__block-subheading">
            Awkwardness gives me great comfort. I’ve never been cool, but I’ve
            felt cool. I’ve been in the cool place, but I wasn’t really cool – I
            was trying to pass for hip or cool.
          </h5>
          <p className="color-secondary">
            A girl should be two things: classy and fabulous. I am convinced
            that there can be luxury in simplicity. I wanted to dress the woman
            who lives and works, not the woman in a painting. It’s hard to
            balance everything. It’s always challenging. My relationships with
            producers or photographers – these are relationships that took
            years. I can’t get sucked into that celebrity thing, because I think
            it’s just crass. My aim is to make the poor look rich and the rich
            look poor. Vanity is the healthiest thing in life. I believe that my
            clothes can give people a better image of themselves – that it can
            increase their feelings of confidence and happiness. You can hide so
            much behind theatrics, and I don’t need to do that any more. I don’t
            really know how to do casual clothes.
          </p>
        </div>
        <div className="about__our">
          <div className="about__our-item">
            <img src={our1} alt="about us" />
            <h3 className="about__our-name">Edward Lindgren</h3>
            <p className="about__our-carrer color-secondary">
              CHIEF OPERATING OFFICER
            </p>
          </div>
          <div className="about__our-item">
            <img src={our2} alt="about us" />
            <h3 className="about__our-name">Nado Husa</h3>
            <p className="about__our-carrer color-secondary">CO-FOUNDER</p>
          </div>
          <div className="about__our-item">
            <img src={our3} alt="about us" />
            <h3 className="about__our-name">Chineze Afamefuna</h3>
            <p className="about__our-carrer color-secondary">MARKETING</p>
          </div>
        </div>
        <Benefits />
      </div>
    </section>
  );
}
