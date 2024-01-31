import React from "react";
import { useForm } from "react-hook-form";
import "./Test2.scss";
import { Link } from "react-router-dom";

const Test2 = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle sign-in logic here
    console.log(data);
  };
  return (
    <div className="signin-container">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Welcome Back!</h1>
        <p>Please login to your account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enter Your Email</label>
        <input {...register("email", { required: "Email is required" })} />
        {errors && errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input
          {...register("password", { required: "Password is required" })}
        />
        {errors && errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign In</button>
      </form>
      <span>
        Don't have any account? <Link to="">Sign Up</Link>
      </span>
    </div>
  );
};

export default Test2;
