import DestinationCard from "./DestinationCard";
import styles from "./DestinationsGrid.module.css";

/**
 * Purely presentational: takes a list + the onBook handler and
 * drills both down to each DestinationCard. Owns no state itself.
 */
function DestinationsGrid({ destinations, onBook }) {
  if (destinations.length === 0) {
    return <p className={styles.empty}>No trips match that filter yet.</p>;
  }

  return (
    <div className={styles.grid}>
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} onBook={onBook} />
      ))}
    </div>
  );
}

export default DestinationsGrid;
