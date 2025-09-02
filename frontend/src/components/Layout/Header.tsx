import { ButtonLink } from "../Button";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Logo />
          <Nav />
          <div className={styles.authContainer}>
            <ButtonLink to="/login" variant="ghost">
              Login
            </ButtonLink>
            <ButtonLink to="/register" variant="primary">
              Sign Up
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
};
