"use client"
import React from "react";
import { Form } from "informed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFormHandlers from "../hooks/useFormHandlers";
import { validateCity, validateFname, validateLname, validatePhone, validatePin, validateStreet } from "../hooks/signUpValidation";
import CustomInput from "../components/customfields/CustomInput";
import StateSelect from "../components/customfields/StateSelect";
import '../styles/signup.css';

const InformedForm = () => {
  const { handleSignUpSubmit } = useFormHandlers();

  const onSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <h1>Sign up!</h1>

      <Form onSubmit={handleSignUpSubmit(onSubmit)} focusOnInvalid={true} className="form-container">
        {({ formApi }) => (
          <>
            <div className="form-group">
              <CustomInput name="firstName" label="First Name" validate={validateFname} required showErrorIfDirty />
            </div>

            <div className="form-group">
              <CustomInput name="lastName" label="Last Name" validate={validateLname} required showErrorIfDirty />
            </div>

            <div className="form-group">
              <CustomInput name="street" label="Street" validate={validateStreet} required showErrorIfDirty />
            </div>

            <div className="form-group">
              <CustomInput name="city" label="City" validate={validateCity} required showErrorIfDirty />
            </div>

            <div className="form-group">
              <select name="country" label="Country" defaultValue="India">
                <option value="India">India</option>
              </select>
            </div>

            <div className="form-group">
              <CustomInput name="pincode" label="Pincode" type="number" validate={validatePin} required showErrorIfDirty />
            </div>

            <div className="form-group">
              <CustomInput
                name="phoneNumber"
                label="Phone Number"
                validate={validatePhone}
                required
                formatter="+91 ##########"
                showErrorIfDirty
                validateOnBlur={false}
              />
            </div>

            <StateSelect />

            <div className="form-group">
              <button type="submit" className="submit-button" onClick={()=> formApi.reset()}>
                Submit
              </button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default InformedForm;
