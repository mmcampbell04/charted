import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { Input } from "./index";
import styles from "./styles.module.css";

interface Props {
  label: string;
  value: string;
  name: string;
  showPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}
export const PasswordInput = ({
  label,
  value,
  name,
  onChange,
  showPassword,
  handleClick,
}: Props) => {
  return (
    <div className={styles.passwordContainer}>
      <Input
        label={label}
        type={showPassword ? "text" : "password"}
        value={value}
        name={name}
        required
        onChange={onChange}
      />
      <button aria-label="Toggle password visibility" onClick={handleClick}>
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
};
