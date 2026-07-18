import SectionHeading from "../components/SectionHeading";
import BookingForm from "../components/BookingForm";
import styles from "./Booking.module.css";

function Booking({ destinations, selectedId, onSelectDestination }) {
  return (
    <section className={`wrap ${styles.section}`}>
      <SectionHeading
        eyebrow="Reserve a seat"
        title="Book your trip"
        description="Pick a route, tell us who's coming, and we'll hold your seat."
      />
      <BookingForm
        destinations={destinations}
        selectedId={selectedId}
        onSelectDestination={onSelectDestination}
      />
    </section>
  );
}

export default Booking;
