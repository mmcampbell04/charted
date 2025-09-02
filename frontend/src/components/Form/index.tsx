import type { ReactNode } from "react";
import { Button } from "../Button";
import styles from "./styles.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  submitText: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
}

export const Form = ({
  children,
  submitText,
  isLoading,
  onSubmit,
  error,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
      {error && <p className={styles.error}>{error}</p>}
      <Button type="submit" disabled={isLoading} variant="primary">
        {isLoading ? "Loading..." : submitText}
      </Button>
    </form>
  );
};
