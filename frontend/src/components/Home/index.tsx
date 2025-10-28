import { ButtonLink } from "../Button";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <h1>Welcome to Charted</h1>
        <p>
          Your digital companion for knitting projects. Track your progress,
          manage patterns, and connect with fellow knitters.
        </p>

        <div className={styles.ctaContainer}>
          <p>Start organizing your knitting projects today</p>
          <div className={styles.ctaButtons}>
            <ButtonLink to="/register">Get Started</ButtonLink>
            <ButtonLink to="/login" variant="ghost">
              Log In
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
