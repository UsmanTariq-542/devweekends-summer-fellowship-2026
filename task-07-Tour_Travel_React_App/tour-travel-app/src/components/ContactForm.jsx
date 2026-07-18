import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.sent}>
        <p className="eyebrow">Message sent</p>
        <p className={styles.sentLine}>
          Thanks, {form.name.split(" ")[0] || "traveler"} — we'll reply within a day.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Name</span>
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        <span>Email</span>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
      </label>
      <button type="submit" className={styles.submit}>
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
