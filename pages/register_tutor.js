import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import states from "@/utils/states";
import axios from "axios";
import { useRouter } from "next/router";
const Register_tutor = () => {
  useEffect(() => {
    const check = async () => {
      const response = await axios.get(`/api/check`);
      const data = response.data;
      if (data === "create") {
      } else {
        router.replace("/");
      }
    };
    check();
  }, []);
  const [focus, setFocus] = useState("text");
  const router = useRouter();
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
  const selectedstate = watch("state");
  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "/api/tutor",
      data: data,
    })
      .then(function (response) {
        router.replace("/tutor/profile");
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(data)
  };

  return (
    <>
      <Header />
      {/* End Header */}
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Account profile</h2>
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
                  {...register("name", { required: true })}
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
                  {...register("dob", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-group">
                {errors.state && "State is required"}
                <select
                  className="form-select item"
                  id="state"
                  name="state"
                  placeholder="State"
                  required
                  {...register("state", {
                    required: true,
                    pattern: /^(?!(Select a state))/,
                  })}
                >
                  <option selected disabled>
                    Select a state
                  </option>

                  {states.map((state) => (
                    <option value={state.name}>{state.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                {errors.city && "City is required"}
                <select
                  className="form-select item"
                  id="city"
                  name="city"
                  placeholder="City"
                  required
                  {...register("city", {
                    required: true,
                    pattern: /^(?!(Select a city))/,
                  })}
                >
                  <option selected disabled>
                    Select a city
                  </option>
                  {selectedstate &&
                    selectedstate !== "Select a state" &&
                    states
                      .find((state) => state.name === selectedstate)
                      .districts.map((city) => (
                        <option value={city.name}>{city.name}</option>
                      ))}
                </select>
              </div>
              {/* <div className="form-group">
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
              </div> */}
              {/* <div className="form-group">
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
              </div> */}
              {/* <div className="form-group">
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
              </div> */}
              <div className="form-group">
                {errors.bio && "Bio is required"}
                <textarea
                  className="form-control item"
                  rows="2"
                  placeholder="Bio (Not more than 30 words)"
                  {...register("bio", {
                    required: true,
                  })}
                ></textarea>
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
                  Save Details
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
