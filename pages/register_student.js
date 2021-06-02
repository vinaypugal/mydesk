import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

const Register_student = () => {
  // const [currentTab, setCurrentTab] = useState(1);
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
  // const goNext = async () => {
  //   if (
  //     currentTab === 1
  //       ? await trigger([
  //           "city",
  //           "confirmpassword",
  //           "date",
  //           "email",
  //           "mobile",
  //           "name",
  //           "parent",
  //           "password",
  //           "state",
  //           "username",
  //         ])
  //       : await trigger(["school", "board", "class"])
  //   ) {
  //     setCurrentTab((currentTab) => currentTab + 1);
  //   }
  // };
  // const goPrev = () => {
  //   setCurrentTab((currentTab) => currentTab - 1);
  // };

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
            <h2>Account profile</h2>
            {/* <p>Kindly provide the below mentioned details</p> */}
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

              <div className="tab" style={{ display: "block" }}>
                <h4 className="fw-bold">Personal Information</h4>
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
                {/* <div className="form-group">
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
                </div> */}
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
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      {" "}
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
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

              <div className="tab" style={{ display: "block" }}>
                <h4 className="fw-bold">Educational Information</h4>
                <br />
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

              <div className="tab" style={{ display: "block" }}>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-block create-account"
                  >
                    Save details
                  </button>
                </div>
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
