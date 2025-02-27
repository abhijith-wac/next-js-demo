"use client"
import React from "react";
import { useField } from "informed";
import { InputGroup, Form as BootstrapForm } from "react-bootstrap";

const LoginInput = ({
  name,
  label,
  validate,
  validateOn = "change",
  validateOnBlur = true,
  showErrorIfDirty = true,
  required,
  type = "text",
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

  const handleBlur = () => {
    if (validateOnBlur) {
      setTouched(true);
    }
  };

  const inputProps = {
    id: name,
    ref,
    type,
    value: value || "",
    onChange: (e) => setValue(e.target.value),
    onBlur: handleBlur,
    required,
    className: `form-control ${showError ? "is-invalid" : ""}`,
    ...props,
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

        <input {...inputProps} />
      </InputGroup>

      {showError && <small className="text-danger">{error}</small>}
    </BootstrapForm.Group>
  );
};

export default LoginInput;
