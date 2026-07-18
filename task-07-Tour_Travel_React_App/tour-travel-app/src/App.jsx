import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import destinations from "./data/destinations";

/**
 * App owns the two pieces of state that matter across pages —
 * the destinations list (static here, but fetched from here if it
 * ever becomes an API) and which destination is selected for
 * booking. Both are drilled down as props; no context needed at
 * this size, which is deliberate — it keeps the data flow visible.
 */
function App() {
  const [selectedId, setSelectedId] = useState(destinations[0].id);
  const navigate = useNavigate();

  function handleBook(destination) {
    setSelectedId(destination.id);
    navigate("/booking");
  }

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home destinations={destinations} onBook={handleBook} />} />
          <Route
            path="/destinations"
            element={<Destinations destinations={destinations} onBook={handleBook} />}
          />
          <Route
            path="/booking"
            element={
              <Booking
                destinations={destinations}
                selectedId={selectedId}
                onSelectDestination={setSelectedId}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
