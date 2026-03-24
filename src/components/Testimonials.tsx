import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "ARI's dedication to bringing an innovative and forward-thinking approach made them the ideal partner for our brand.",
    name: "Frill Lee",
    role: "Senior Vice President",
    image: testimonial1,
  },
  {
    quote: "AIR's understanding of our key goals and execution allowed us to reach milestones we never expected.",
    name: "Scott Masters",
    role: "Marketing Consultant",
    image: testimonial2,
  },
  {
    quote: "AIR were able to create a unique experience that brought our company brand vision together with modern strategy.",
    name: "Mia Farrow",
    role: "CMO",
    image: testimonial3,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section section--light testimonials">
    <div className="container">
      <p className="eyebrow">Testimonials</p>
      <h2 className="section-title testimonials__title">
        What<br />people say
      </h2>
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="testimonial-card"
          >
            <div className="testimonial-card__media-wrap">
              <div className="testimonial-card__media">
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-card__image"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="testimonial-card__shape testimonial-card__shape--left" />
              <div className="testimonial-card__shape testimonial-card__shape--right" />
            </div>
            <span className="testimonial-card__quote-mark" aria-hidden="true">"</span>
            <p className="testimonial-card__quote">{t.quote}</p>
            <p className="testimonial-card__name">{t.name}</p>
            <p className="testimonial-card__role">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
