import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className={styles.brand}>Roam.</p>
          <p className={styles.tag}>Small groups. Real places. No layovers in a lobby.</p>
        </div>
        <div className={styles.cols}>
          <div>
            <p className="eyebrow">Company</p>
            <p className={styles.line}>About</p>
            <p className={styles.line}>Guides</p>
          </div>
          <div>
            <p className="eyebrow">Support</p>
            <p className={styles.line}>FAQ</p>
            <p className={styles.line}>Trip insurance</p>
          </div>
        </div>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <span>© 2026 Roam Tours</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;
