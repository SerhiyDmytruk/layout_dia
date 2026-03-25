import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroDesktopImg from '@/assets/hero/banner-1024.png';
import heroLargeImg from '@/assets/hero/banner-1600.png';
import heroMobileImg from '@/assets/hero/banner-320.png';
import heroTabletImg from '@/assets/hero/banner-640.png';
import heroWideImg from '@/assets/hero/banner-full-width.png';

const Hero = () => (
  <section className="hero" id="top">
    <div className="hero__shell">
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

        <div className="hero__media">
          <picture>
            <source media="(min-width: 2560px)" srcSet={heroWideImg} />
            <source media="(min-width: 1600px)" srcSet={heroLargeImg} />
            <source media="(min-width: 1024px)" srcSet={heroDesktopImg} />
            <source media="(min-width: 640px)" srcSet={heroTabletImg} />
            <img
              src={heroMobileImg}
              alt="Smartwatch on wrist with blue display"
              className="hero__image"
              width={720}
              height={680}
              fetchPriority="high"
            />
          </picture>
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
              <p className="hero__meta-label">Intro</p>
              <p className="hero__meta-copy">
                By the same illusion which lifts the horizon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
