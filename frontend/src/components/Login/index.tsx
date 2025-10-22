import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../lib/hooks/useAuth";
import { Form } from "../Form";
import { Input } from "../Input";
import { PasswordInput } from "../Input/PasswordInput";
import styles from "./styles.module.css";

export const LoginForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    showPassword,
    setShowPassword,
  } = useLoginForm();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Sign In</h1>
        <Form
          onSubmit={handleSubmit}
          submitText="Sign In"
          isLoading={isLoading}
          error={error?.message}
        >
          <Input
            label="Email"
            type="email"
            value={formData.email}
            name="email"
            required
            onChange={handleChange}
          />

          <PasswordInput
            label="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            showPassword={showPassword}
            handleClick={() => setShowPassword(!showPassword)}
          />
        </Form>

        <div>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// TODO: needs better validation
const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending, error } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email: formData.email, password: formData.password });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading: isPending,
    error,
    showPassword,
    setShowPassword,
  };
};
