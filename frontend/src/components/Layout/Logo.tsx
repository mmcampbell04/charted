import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to="/" className={styles.logo}>
        <div>Charted</div>
      </Link>
    </div>
  );
};
