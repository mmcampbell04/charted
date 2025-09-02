import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../lib/hooks/useAuth";
import { Form } from "../Form";
import { Input } from "../Input";
import { PasswordInput } from "../Input/PasswordInput";
import styles from "./styles.module.css";

export default function RegisterForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    formError,
    showPasswords,
    setShowPasswords,
  } = useRegisterForm();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Create Account</h1>
        <Form
          onSubmit={handleSubmit}
          submitText="Create Account"
          isLoading={isLoading}
          error={formError || error?.message}
        >
          <Input label="Name" type="text" name="name" onChange={handleChange} />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            showPassword={showPasswords.password}
            handleClick={() =>
              setShowPasswords({
                ...showPasswords,
                password: !showPasswords.password,
              })
            }
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            showPassword={showPasswords.confirmPassword}
            handleClick={() =>
              setShowPasswords({
                ...showPasswords,
                confirmPassword: !showPasswords.confirmPassword,
              })
            }
          />
        </Form>

        <div>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const useRegisterForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });
  const { mutate: register, isPending, error } = useRegister();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading: isPending,
    error,
    formError,
    showPasswords,
    setShowPasswords,
  };
};
