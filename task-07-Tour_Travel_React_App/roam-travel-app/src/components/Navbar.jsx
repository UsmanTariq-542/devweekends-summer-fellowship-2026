import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          Roam<span className={styles.dot}>.</span>
        </NavLink>
        <nav className={styles.links}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
