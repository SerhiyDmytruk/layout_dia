import { ArrowRight } from 'lucide-react';

const processCards = [
  {
    num: '01',
    title: 'Creative direction',
    items: ['Brand development', 'Copywriting', 'Art direction'],
  },
  {
    num: '02',
    title: 'Visual development',
    items: ['Logo design', 'Packaging', 'Motion design'],
  },
  {
    num: '03',
    title: 'Digital communications',
    items: ['Website design', 'Email marketing', 'Social campaigns'],
  },
  {
    num: '04',
    title: 'Marketing strategy',
    items: ['SEO content', 'Paid media', 'Strategic partnerships'],
  },
];

const Process = () => (
  <section id="process" className="section section--surface process">
    <div className="container process__layout">
      <div className="process__content">
        <p className="eyebrow">Services</p>
        <h2 className="section-title process__title">
          Air is a full service creative agency
        </h2>
        <p className="process__copy">
          Every project is born of a strategy and craft to become a living, breathing part of our clients&apos; businesses.
        </p>
        <p className="process__copy">
          We are proud of the portfolio of work we have created only with our biggest partners and clients.
        </p>
      </div>
      <div className="process__cards">
        {processCards.map((card, index) => (
          <article
            key={card.num}
            className={`service-card ${index % 2 === 1 ? 'service-card--raised' : ''}`}
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
              <span className="service-card__link-copy">Learn more</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
