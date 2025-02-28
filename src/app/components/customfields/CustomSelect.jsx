import React from "react";
import { useField } from "informed";

const CustomSelect = ({
  name,
  label,
  validate,
  validateOn = "change",
  validateOnBlur,
  showErrorIfDirty,
  required,
  children, // Options for the select field
  ...props // Spread the remaining props
}) => {
  // Remove non-DOM props like `validateOn`, `validateOnBlur`, etc.
  const domProps = {
    id: name,
    required,
    ...props, // Spread other props that are valid for the select element
  };

  const { fieldState, fieldApi, ref } = useField({
    name,
    validate,
    required,
    validateOn,
    showErrorIfDirty,
    ...props, // Pass to `useField` only the relevant props
  });

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;

  // Handle the blur event
  const handleBlur = () => {
    if (validateOnBlur) {
      setTouched(true);
    }
  };

  const selectProps = {
    ref,
    value: value || "",
    onChange: (e) => setValue(e.target.value),
    onBlur: handleBlur,
    style: showError ? { border: "1px solid red" } : {},
    ...domProps, // Spread the valid props
  };

  return(
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select {...selectProps}>
        {children} {/* Render options as children */}
      </select>
      {showError && <small style={{ color: "red" }}>{error}</small>} {/* Show error if validation fails */}
    </>
  );
};

export default CustomSelect;
