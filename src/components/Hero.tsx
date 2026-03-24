import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg from '@/assets/hero-watch.jpg';

const Hero = () => (
  <section className="hero" id="top">
    <div className="container container--wide hero__inner">
      <div className="hero__content">
        <h1 className="hero__title">
          Strategic
          <br />
          Agency
        </h1>
        <p className="hero__description">
          We believe in the power of bold ideas that can solve business
          challenges.
        </p>
        <a
          href="#expertise"
          className="button button--primary hero__action"
        >
          Learn more
        </a>
      </div>

      <div className="hero__media" aria-hidden="true">
        <img
          src={heroImg}
          alt="Smartwatch on wrist with blue display"
          className="hero__image"
          width={960}
          height={640}
        />
        <div className="hero__controls">
          <button
            type="button"
            className="hero__control"
            aria-label="Previous slide"
          >
            <ChevronLeft className="hero__control-icon" />
          </button>
          <button
            type="button"
            className="hero__control"
            aria-label="Next slide"
          >
            <ChevronRight className="hero__control-icon" />
          </button>
          <div className="hero__meta">
            <p className="hero__meta-label">
              Intro
            </p>
            <p className="hero__meta-copy">
              By the same illusion which lifts the horizon.
            </p>
          </div>
        </div>
      </div>

      <div className="hero__mobile-media" aria-hidden="true">
        <img
          src={heroImg}
          alt="Smartwatch on wrist"
          className="hero__mobile-image"
          width={960}
          height={640}
        />
      </div>
    </div>
  </section>
);

export default Hero;
