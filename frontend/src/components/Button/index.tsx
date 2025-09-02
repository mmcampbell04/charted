import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

type Styles = "primary" | "secondary" | "ghost";

export const Button = ({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: Styles;
} & React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={classNames(styles.button, styles[variant], props.className)}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: Styles;
} & React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={classNames(styles.button, styles[variant], props.className)}
    >
      {children}
    </Link>
  );
};
