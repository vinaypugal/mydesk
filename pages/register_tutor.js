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
                  {...register("Name", { required: true })}
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
