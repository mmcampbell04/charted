import React, { useState } from "react";
import formStyles from "../../lib/styles/form.module.css";
import { Form } from "../Form";
import { Input } from "../Input";
import { PasswordInput } from "../Input/PasswordInput";

export const ConnectRavelry = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    showPassword,
    setShowPassword,
  } = useRaverlyConnection();
  return (
    <div className={formStyles.container}>
      <div className={formStyles.formContainer}>
        <h1>Connect your Ravelry account</h1>
        <p>
          Connect your Ravelry account to your account to access your projects
          and patterns.
        </p>
        <Form onSubmit={handleSubmit} submitText="Connect" isLoading={false}>
          <Input
            label="Ravelry Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <PasswordInput
            label="Ravelry Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            showPassword={showPassword}
            handleClick={() => setShowPassword(!showPassword)}
          />
        </Form>
      </div>
    </div>
  );
};

const useRaverlyConnection = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const { mutate: login, isPending, error } = useLogin();
  const [formData, setFormData] = useState({
    username: "",
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
    // login({ email: formData.email, password: formData.password });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    // isLoading: isPending,
    // error,
    showPassword,
    setShowPassword,
  };
};
