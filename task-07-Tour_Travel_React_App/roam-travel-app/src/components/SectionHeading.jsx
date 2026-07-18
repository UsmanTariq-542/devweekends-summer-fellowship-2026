import styles from "./SectionHeading.module.css";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={styles.heading} style={{ textAlign: align }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SectionHeading;
