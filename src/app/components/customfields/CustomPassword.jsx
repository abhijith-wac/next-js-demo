"use client"
import React, { useState } from "react";
import { useField } from "informed";
import { InputGroup, Form as BootstrapForm, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CustomPassword = ({
  name,
  label,
  validate,
  validateOn = "change",
  validateOnBlur = true,
  showErrorIfDirty = true,
  required,
  icon: Icon,
  ...props
}) => {
  const { fieldState, fieldApi, ref } = useField({
    name,
    validate,
    validateOn,
    required,
    showErrorIfDirty,
    ...props,
  });

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    if (validateOnBlur) {
      setTouched(true);
    }
  };

  return (
    <BootstrapForm.Group className="mb-4">
      {label && <BootstrapForm.Label htmlFor={name}>{label}</BootstrapForm.Label>}

      <InputGroup className="mb-1">
        {Icon && (
          <InputGroup.Text>
            <Icon />
          </InputGroup.Text>
        )}

        <input
          id={name}
          ref={ref}
          type={showPassword ? "text" : "password"}
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          required={required}
          className={`form-control ${showError ? "is-invalid" : ""}`}
          {...props}
        />

        <Button
          variant="outline-secondary"
          onClick={() => setShowPassword(!showPassword)}
          type="button"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </Button>
      </InputGroup>

      {showError && <small className="text-danger">{error}</small>}
    </BootstrapForm.Group>
  );
};

export default CustomPassword;
