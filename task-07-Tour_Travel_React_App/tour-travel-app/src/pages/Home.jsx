import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import DestinationsGrid from "../components/DestinationsGrid";
import styles from "./Home.module.css";

function Home({ destinations, onBook }) {
  const featured = destinations.slice(0, 3);

  return (
    <>
      <Hero />
      <section className={`wrap ${styles.section}`}>
        <SectionHeading
          eyebrow="Featured routes"
          title="Where the next departure boards"
          description="A rotating handful of trips, picked for the season. See the full board on the Destinations page."
        />
        <DestinationsGrid destinations={featured} onBook={onBook} />
      </section>

      <section className={styles.steps}>
        <div className="wrap">
          <SectionHeading eyebrow="How it works" title="Three steps to a seat" />
          <ol className={styles.stepList}>
            <li>
              <span className={styles.stepNum}>01</span>
              <p>Pick a route from the board and check the dates.</p>
            </li>
            <li>
              <span className={styles.stepNum}>02</span>
              <p>Reserve your seat with a short booking form.</p>
            </li>
            <li>
              <span className={styles.stepNum}>03</span>
              <p>Get your boarding pass and start packing.</p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default Home;
