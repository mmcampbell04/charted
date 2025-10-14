import { useCurrentUser } from "../../lib/hooks/useAuth";
import { ButtonLink } from "../Button";
import styles from "./styles.module.css";

export const Home = () => {
  const { data: user } = useCurrentUser();

  return (
    <section className={styles.outerWrapper}>
      {user ? (
        <div className={styles.innerWrapper}>
          <p>
            Welcome back, {user?.name}! Ready to continue your knitting journey?
          </p>
          <div>
            <ButtonLink to="/dashboard">Go to Dashboard</ButtonLink>
            <ButtonLink to="/projects">View Projects</ButtonLink>
          </div>
        </div>
      ) : (
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
      )}
    </section>
  );
};
