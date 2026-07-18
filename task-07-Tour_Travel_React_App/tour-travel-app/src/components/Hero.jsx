import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.inner}`}>
        <p className="eyebrow">Departures every week · 6 continents</p>
        <h1 className={styles.title}>
          Roam the parts of the map <span className={styles.italic}>still unlabeled.</span>
        </h1>
        <p className={styles.sub}>
          Small-group trips of 8–12 people, led by people who actually live there.
          Pick a route, reserve your seat, pack your bag.
        </p>
        <div className={styles.actions}>
          <Link to="/destinations" className={styles.cta}>
            Browse destinations →
          </Link>
          <Link to="/booking" className={styles.ghost}>
            Start a booking
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
