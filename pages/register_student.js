import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

const Register_student = ({ loading }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const [focus, setFocus] = useState("text");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    trigger,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    shouldFocusError: true,
  });
  const goNext = async () => {
    if (
      currentTab === 1
        ? await trigger([
            "city",
            "confirmpassword",
            "date",
            "email",
            "mobile",
            "name",
            "parent",
            "password",
            "state",
            "username",
          ])
        : await trigger(["school", "board", "class"])
    ) {
      setCurrentTab((currentTab) => currentTab + 1);
    }
  };
  const goPrev = () => {
    setCurrentTab((currentTab) => currentTab - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    // console.log(errors);
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Register as a Student</h2>
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
              {currentTab === 1 && (
                <div className="tab" style={{ display: "block" }}>
                  <h4 className="fw-bold">Personal Information</h4> <br />
                  <br />
                  <div className="form-group">
                    {errors.name?.type === "required" && "Name is required"}
                    <input
                      type="text"
                      className="form-control item"
                      id="name"
                      placeholder="Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "pattern" && "Email is invalid"}
                    <input
                      type="email"
                      className="form-control item"
                      id="email"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.username && "Username is required"}
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
                    {errors.password?.type === "required" &&
                      "Password is required"}
                    {errors.password?.type === "minLength" &&
                      "Password minimum length is 6 letters"}
                    <input
                      type="password"
                      className="form-control item"
                      id="password"
                      placeholder="Password"
                      autoComplete
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.confirmpassword && errors.confirmpassword.message}
                    <input
                      type="password"
                      className="form-control item"
                      id="cpassword"
                      autoComplete
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      {...register("confirmpassword", {
                        required: true,
                        validate: (value) =>
                          value === watch("password") ||
                          "The passwords do not match",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.date && "DOB is required"}
                    <input
                      type={focus}
                      onBlur={() => setFocus("text")}
                      className="form-control item"
                      id="dob"
                      onFocus={() => setFocus("date")}
                      placeholder="Date Of Birth"
                      {...register("date", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.city && "City is required"}
                    <input
                      type="text"
                      className="form-control item"
                      id="city"
                      placeholder="City of Residence"
                      {...register("city", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.state && "State is required"}
                    <input
                      type="text"
                      className="form-control item"
                      id="state"
                      placeholder="State"
                      {...register("state", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    {errors.mobile?.type === "required" &&
                      "Mobile number is required"}
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
                    {errors.parent?.type === "required" &&
                      "Parent mobile number is required"}
                    {errors.parent?.type === "pattern" &&
                      "Enter a valid mobile number"}
                    <input
                      type="number"
                      className="form-control item"
                      id="mobile-parent"
                      maxLength="10"
                      placeholder="Parent Contact Number"
                      {...register("parent", {
                        required: true,
                        pattern: /^[6-9]\d{9}$/,
                      })}
                    />
                  </div>
                </div>
              )}
              {currentTab === 2 && (
                <div className="tab" style={{ display: "block" }}>
                  <h4 className="fw-bold mb-5">Educational Information</h4>
                  <div className="form-group">
                    {errors.school && "School name is required"}
                    <input
                      type="text"
                      className="form-control item"
                      id="school"
                      placeholder="School"
                      {...register("school", {
                        required: true,
                      })}
                    />
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
                    {errors.class?.type === "pattern" && "Select a class"}
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
                </div>
              )}
              {currentTab === 3 && (
                <div className="tab" style={{ display: "block" }}>
                  <h4 className="fw-bold mb-5">Preference</h4>

                  <div className="form-group">
                    {errors.subject && "Subject is required"}
                    <input
                      type="text"
                      className="form-control item"
                      id="subject"
                      placeholder="Subject"
                      {...register("subject", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <h6 style={{ color: "#464646" }} className="fw-bold ">
                      Tuition Mode
                    </h6>
                    {/* <input
                      type="text"
                      className="form-control item"
                      id="mode"
                      placeholder="Tuition Mode"
                      {...register("mode", {
                        required: true,
                      })}
                    /> */}
                    <div className="form-check-inline">
                      <input
                        // style={{ }}
                        className="form-check-input "
                        type="checkbox"
                        id="private"
                        name="private"
                      />
                      <label
                        className="form-check-label mx-1 mt-1"
                        style={{ color: "#464646" }}
                        for="private"
                      >
                        Private
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <input
                        // style={{ }}
                        className="form-check-input "
                        type="checkbox"
                        id="regular"
                        name="regular"
                      />
                      <label
                        className="form-check-label mx-1 mt-1 "
                        style={{ color: "#464646" }}
                        for="private"
                      >
                        Regular
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <input
                        // style={{ }}
                        className="form-check-input "
                        type="checkbox"
                        id="hourly"
                        name="hourly"
                      />
                      <label
                        className="form-check-label mt-1 mx-1"
                        style={{ color: "#464646" }}
                        for="private"
                      >
                        Hourly
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-block create-account"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              )}
              <div style={{ overflow: "auto", height: "5rem" }}>
                <div style={{ float: "right" }}>
                  {currentTab !== 1 && (
                    <button
                      type="button"
                      className="btn btn-block create-account mx-2"
                      id="prevBtn"
                      onClick={goPrev}
                    >
                      Previous
                    </button>
                  )}
                  {currentTab !== 3 && (
                    <button
                      type="button"
                      className="btn btn-block create-account mx-1"
                      id="nextBtn"
                      onClick={goNext}
                      // disabled = {errors !== null ? true : false}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <span
                  className={`step ${currentTab === 1 && "active"} ${
                    currentTab > 1 && "finish"
                  }`}
                />
                <span
                  className={`step  ${currentTab === 2 && "active"} ${
                    currentTab > 2 && "finish"
                  }`}
                />
                <span className={`step  ${currentTab === 3 && "active"}`} />
              </div>
            </form>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      <Footer />
      {/* ======= Footer ======= */}
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

export default Register_student;
