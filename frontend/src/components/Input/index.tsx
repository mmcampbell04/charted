import React, { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  description?: string;
  validateValue?: (value: string) => string | null;
}

export const Input = ({
  label,
  description,
  className,
  onChange,
  onBlur,
  validateValue,
  ...props
}: InputProps) => {
  const { changeHandler, error, blurHandler } = useInput({
    validateValue,
    onChange,
    onBlur,
  });

  return (
    <div className={classNames(styles.inputContainer, className)}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} onChange={changeHandler} onBlur={blurHandler} />
      {error && <p className={styles.error}>{error}</p>}
      {!!description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

type HookParams = Pick<InputProps, "validateValue" | "onChange" | "onBlur">;

const useInput = ({ validateValue, onChange, onBlur }: HookParams) => {
  const [error, setError] = useState<string | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(null);
    }

    if (onChange) {
      onChange(event);
    }

    if (validateValue) {
      event.currentTarget.setCustomValidity(
        validateValue(event.currentTarget.value) ?? ""
      );
    }
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  return {
    changeHandler,
    error,
    blurHandler,
  };
};
