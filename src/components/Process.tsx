import { ArrowRight } from "lucide-react";

const processCards = [
  { num: "01", title: "Creative Direction", items: ["Ede & Mobile Design", "Typography", "Art Direction"] },
  { num: "02", title: "Visual Development", items: ["Copywriting", "Logo & Mobile Design", "Packaging"] },
  { num: "03", title: "Digital Communications", items: ["Digital Marketing", "Motion & Animation", "Strategic Partnerships"] },
  { num: "04", title: "Marketing Strategy", items: ["Email Marketing", "Paid Advertising", "Blog Content & SEO"] },
];

const Process = () => (
  <section className="process">
    <div className="process__intro">
      <div className="container process__intro-content">
        <p className="eyebrow eyebrow--light">Services</p>
        <h2 className="process__title">
          Air is a full service creative agency
        </h2>
        <p className="process__copy">
          Every project is born of a strategy and craft to become a living, breathing part of our clients&apos; businesses.
        </p>
        <p className="process__copy">
          We are proud of the portfolio of work we have created only with our biggest partners and clients.
        </p>
      </div>
    </div>

    <div className="container process__cards-wrap">
      <div className="process__cards">
        {processCards.map((card) => (
          <div
            key={card.num}
            className="service-card"
          >
            <span className="service-card__index">{card.num}</span>
            <h3 className="service-card__title">{card.title}</h3>
            <ul className="service-card__list">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="service-card__link"
            >
              <span className="service-card__link-icon">
                <ArrowRight className="service-card__icon" />
              </span>
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
