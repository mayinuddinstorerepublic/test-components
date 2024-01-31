import React from "react";
import { useForm } from "react-hook-form";
import "./Test2.scss";

const Test2 = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle sign-in logic here
    console.log(data);
  };
  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors && errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input {...register('password', { required: 'Password is required' })} />
        {errors && errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Test2;
