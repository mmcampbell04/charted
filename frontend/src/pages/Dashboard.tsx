import { useCurrentUser } from "../lib/hooks/useAuth";
import styles from "./styles.module.css";

export default function Dashboard() {
  const { data: user } = useCurrentUser();

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome back, {user?.name}!</p>
    </div>
  );
}
