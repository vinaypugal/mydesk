import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

const Register_tutor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    shouldFocusError: true,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      {/* End Header */}
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Register as a Tutor</h2>
            <p>Kindly provide the below mentioned details</p>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Login Section ======= */}
        <section id="contact" className="contact">
          <div className="registration-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-icon">
                <span>
                  <i className="icon icon-user" />
                </span>
              </div>
              <div className="form-group">
                {errors.Name?.type === "required" && "Name is required"}
                {errors.name?.type === "required" && "Name is required"}
                <input
                  type="text"
                  className="form-control item"
                  id="name"
                  placeholder="Name"
                  {...register("Name", { required: true })}
                />
              </div>
              <div className="form-group">
                {errors.email?.type === "required" && "email is required"}
                {errors.email?.type === "pattern" && "email is invalid"}
                <input
                  type="email"
                  className="form-control item"
                  id="email"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </div>
              <div className="form-group">
                {errors.username && "username is required"}

                <input
                  type="text"
                  className="form-control item"
                  id="username"
                  placeholder="Username"
                  name="username"
                  {...register("username", { required: true })}
                />
              </div>
              <div className="form-group">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "Password minimum length is 6 letters"}
                <input
                  type="password"
                  className="form-control item"
                  id="password"
                  placeholder="Password"
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                />
              </div>
              <div className="form-group">
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {errors.password?.type === "validate" &&
                    "The password doesnt match"}
                  {errors.password?.type === "minLength" &&
                    "Password minimum length is 6 letters"}
                </span>
                <input
                  type="password"
                  className="form-control item"
                  id="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  {...register("confirmpassword", {
                    required: true,
                    minLength: 6,
                    validate: (value) => value === watch("password"),
                  })}
                />
              </div>
              <div className="form-group">
                {errors.school?.type === "required" &&
                  "School name is required"}
                <input
                  type="text"
                  className="form-control item"
                  id="school"
                  placeholder="School Name"
                  name="school"
                  {...register("school", { required: true })}
                />
              </div>
              <div className="form-group">
                {errors.class?.type === "pattern" && "Select a Class"}
                <select
                  className="form-select item"
                  id="class"
                  name="class"
                  {...register("class", {
                    required: true,
                    pattern: /^[0-9]*$/,
                  })}
                >
                  <option selected disabled>
                    Class - 9/10/11/12
                  </option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className="form-group">
                {errors.board?.type === "pattern" && "Select a Board"}
                <select
                  type="text"
                  className="form-select item"
                  id="board"
                  placeholder="stateboard/CBSE"
                  name="board"
                  {...register("board", {
                    required: true,
                    pattern: /(^CBSE$)|(^STATEBOARD$)/,
                  })}
                >
                  <option selected disabled>
                    STATE BOARD/CBSE
                  </option>
                  <option>STATEBOARD</option>
                  <option>CBSE</option>
                </select>
              </div>
              <div className="form-group">
                {errors.mobile?.type === "required" && "Enter a mobile number"}
                {errors.mobile?.type === "pattern" &&
                  "Enter a valid mobile number"}
                <input
                  type="number"
                  className="form-control item"
                  id="mobile"
                  name="mobile"
                  maxLength="10"
                  placeholder="10 digit mobile number"
                  {...register("mobile", {
                    required: true,
                    pattern: /^[6-9]\d{9}$/,
                  })}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-block create-account">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default Register_tutor;
