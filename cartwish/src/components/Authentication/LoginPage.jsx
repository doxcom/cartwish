import React from "react";
import "./LoginPage.css";
import { z } from "zod"; //schema for form
import { useForm } from "react-hook-form";

const LoginPage = () => {
  
  /*  const {
    register,
    handleSubmit2,
    formState: { errors },
  } = useForm();*/ 
  //  const onSubmit = (formData) => console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: "",
      phone: 0,
    };
  };

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter your name"
              //                       {...register("name")}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="form_text_input"
              placeholder="Enter your phone number"
              //   {...register("phone",{valueAsNumber: true})}
            />
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
