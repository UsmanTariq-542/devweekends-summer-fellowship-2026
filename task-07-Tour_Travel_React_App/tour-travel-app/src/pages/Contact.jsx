import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={`wrap ${styles.section}`}>
      <SectionHeading
        eyebrow="Get in touch"
        title="Questions before you book?"
        description="Group trips, custom dates, or gear questions — send a note and a trip lead will answer."
      />
      <div className={styles.layout}>
        <ContactForm />
        <div className={styles.info}>
          <div>
            <p className="eyebrow">Email</p>
            <p className={styles.infoLine}>hello@roam.example</p>
          </div>
          <div>
            <p className="eyebrow">Office</p>
            <p className={styles.infoLine}>Lahore · Karachi</p>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            <p className={styles.infoLine}>Mon–Sat, 10am–7pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
