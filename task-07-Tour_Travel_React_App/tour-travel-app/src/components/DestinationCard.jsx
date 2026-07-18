import { categories } from "../data/destinations";
import styles from "./DestinationCard.module.css";

/**
 * A single destination rendered as a boarding-pass stub.
 * Receives its data and the onBook handler as props (drilled down
 * from the page through DestinationsGrid) rather than owning any
 * booking logic itself.
 */
function DestinationCard({ destination, onBook }) {
  const { name, country, code, duration, groupSize, price, rating, image, blurb, category } =
    destination;
  const accent = categories[category]?.color ?? "var(--coral)";

  return (
    <article className={styles.card} style={{ "--accent": accent }}>
      <div className={styles.photoWrap}>
        <img src={image} alt={`${name}, ${country}`} className={styles.photo} loading="lazy" />
        <span className={styles.tag}>{categories[category]?.label}</span>
      </div>

      <div className={styles.stub}>
        <div className={styles.stubTop}>
          <div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.country}>{country}</p>
          </div>
          <p className={styles.code}>{code}</p>
        </div>

        <p className={styles.blurb}>{blurb}</p>

        <div className={styles.perforation} aria-hidden="true" />

        <div className={styles.stubBottom}>
          <div className={styles.meta}>
            <span>{duration}</span>
            <span>{groupSize}</span>
            <span>★ {rating}</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.price}>${price}</span>
            <button className={styles.bookBtn} onClick={() => onBook(destination)}>
              Book →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
