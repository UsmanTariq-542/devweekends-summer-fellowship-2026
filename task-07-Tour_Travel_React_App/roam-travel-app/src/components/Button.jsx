import styles from "./Button.module.css";

/**
 * Reusable button/link. Renders an <a> when `href` is passed,
 * otherwise a <button>. `variant` controls the visual treatment.
 */
function Button({ children, href, onClick, variant = "solid", type = "button" }) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
