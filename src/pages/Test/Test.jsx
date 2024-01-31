// RegistrationForm.js
import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Test.scss";
import { Link } from "react-router-dom";
import DropdownSelect from "../../compoments/DropdownSelect";

const Test = () => {
  const { handleSubmit, control, register, errors } = useForm();

  const onSubmit = (data) => {
    // Add your registration logic here
    console.log("Form submitted with data:", data);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="registration-form-container">
      <div className="registration-form-type">
        <h1>Create Account</h1>
        <p>Fill in the details below to create an account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Your Full Name
          <input type="text" {...register("fullName", { required: true })} />
          {errors?.fullName && (
            <span className="error-message">This field is required</span>
          )}
        </label>

        <label>
          Enter Email Address
          <input type="email" {...register("email", { required: true })} />
          {errors && errors.email && (
            <span className="error-message">This field is required</span>
          )}
        </label>

        <label>
          Your ID
          <input type="id" {...register("id", { required: true })} />
          {errors && errors.id && (
            <span className="error-message">This field is required</span>
          )}
        </label>

        <label>
          Your Mobile Number
          <input type="mobile" {...register("mobile", { required: true })} />
          {errors && errors.id && (
            <span className="error-message">This field is required</span>
          )}
        </label>

        <label>
          Password:
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors && errors.password && (
            <span className="error-message">This field is required</span>
          )}
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors && errors.confirmPassword && (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        
        <DropdownSelect
          name="selectField"
          label="Select Your Role"
          options={options}
        />

        <label>
          <input type="checkbox" {...register("agree", { required: true })} />I agree to the terms and conditions
          {errors && errors.agree && (
            <span className="error-message">This field is required</span>
          )}
        </label>

        <button type="submit">Create Account</button>
      </form>
      <span>
        Already have an account? <Link to="">Sign In</Link>
      </span>
    </div>
  );
};

export default Test;
