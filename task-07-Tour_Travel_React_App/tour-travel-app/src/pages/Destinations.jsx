import { useState } from "react";
import { categories } from "../data/destinations";
import SectionHeading from "../components/SectionHeading";
import DestinationsGrid from "../components/DestinationsGrid";
import styles from "./Destinations.module.css";

function Destinations({ destinations, onBook }) {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? destinations : destinations.filter((d) => d.category === filter);

  return (
    <section className={`wrap ${styles.section}`}>
      <SectionHeading
        eyebrow="The full board"
        title="Every route we run"
        description="Filter by terrain, then book straight from the card."
      />

      <div className={styles.filters}>
        <button
          className={filter === "all" ? styles.activeChip : styles.chip}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {Object.entries(categories).map(([key, { label, color }]) => (
          <button
            key={key}
            className={filter === key ? styles.activeChip : styles.chip}
            style={{ "--chip-color": color }}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <DestinationsGrid destinations={visible} onBook={onBook} />
    </section>
  );
}

export default Destinations;
