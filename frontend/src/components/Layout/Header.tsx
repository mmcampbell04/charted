import { SquareArrowOutUpRight } from "lucide-react";
import { useCurrentUser } from "../../lib/hooks/useAuth";
import { ButtonLink } from "../Button";
import { Logo } from "./Logo";
import styles from "./styles.module.css";

export const Header = () => {
  const { data: user } = useCurrentUser();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Logo />
          <div className={styles.headerRight}>
            <a href="https://www.ravelry.com/" target="_blank">
              <SquareArrowOutUpRight />
              Ravelry
            </a>
            <div className={styles.authContainer}>
              {user ? (
                <ButtonLink to="/logout">Logout</ButtonLink>
              ) : (
                <ButtonLink to="/login">Log In</ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
