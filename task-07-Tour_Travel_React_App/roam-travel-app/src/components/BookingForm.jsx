import { useState } from "react";
import styles from "./BookingForm.module.css";

/**
 * `destinations`, `selectedId`, and `onSelectDestination` are all
 * drilled down from the Booking page (which got them from App).
 * Only the form's own field values are local state.
 */
function BookingForm({ destinations, selectedId, onSelectDestination }) {
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: 2 });
  const [confirmed, setConfirmed] = useState(null);

  const selected = destinations.find((d) => d.id === selectedId) ?? destinations[0];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setConfirmed({ ...form, destination: selected });
  }

  if (confirmed) {
    return (
      <div className={styles.confirmCard}>
        <p className="eyebrow">Boarding pass confirmed</p>
        <h3 className={styles.confirmTitle}>
          {confirmed.destination.name}, {confirmed.destination.country}
        </h3>
        <p className={styles.confirmLine}>
          {confirmed.name} · {confirmed.guests} guest(s) · {confirmed.date || "date TBD"}
        </p>
        <p className={styles.confirmNote}>
          A confirmation would normally be emailed to {confirmed.email || "you"}.
        </p>
        <button className={styles.newBooking} onClick={() => setConfirmed(null)}>
          Book another trip
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Destination</span>
        <select
          value={selectedId ?? selected.id}
          onChange={(e) => onSelectDestination(e.target.value)}
        >
          {destinations.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}, {d.country} — ${d.price}
            </option>
          ))}
        </select>
      </label>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Full name</span>
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Departure date</span>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>
        <label className={styles.field}>
          <span>Guests</span>
          <input
            type="number"
            name="guests"
            min="1"
            max="12"
            value={form.guests}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className={styles.submit}>
        Reserve seat — ${selected.price}
      </button>
    </form>
  );
}

export default BookingForm;
