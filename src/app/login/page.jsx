"use client";
import React from "react";
import { Form } from "informed";
import { Button, Alert } from "react-bootstrap";
import { FaLock, FaUser } from "react-icons/fa";
import LoginInput from "../components/customfields/LoginInput";
import CustomPassword from "../components/customfields/CustomPassword";
import { validateEmail, validatePassword } from "../hooks/loginValidation";
import useLogin from "../hooks/useLogin";
import "../styles/login.css";

const Page = () => {
  const { handleSubmit, errorMessage } = useLogin();

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>

        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form onSubmit={handleSubmit}>
          <LoginInput
            name="email"
            type="email"
            validate={validateEmail}
            placeholder="Enter email"
            autoComplete="email"
            icon={FaUser}
            label="Email address"
          />

          <CustomPassword
            name="password"
            validate={validatePassword}
            placeholder="Password"
            autoComplete="current-password"
            icon={FaLock}
            label="Password"
          />

          <div className="login-div">
            <Button variant="primary" type="submit" className="px-4">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Page;
