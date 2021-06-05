import Header from "@/components/Header";
import states from "@/utils/states";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCheck from "utils/useCheck";

const EditProfile = () => {
  const { user } = useUser();
  const router = useRouter();
  if (!user) {
    return null;
  }
  useCheck(user, "tutor");
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
  const selectedstate = watch("state");

  const onSubmit = (data) => {
    axios({
      method: "patch",
      url: "/api/tutor",
      data: data,
    })
      .then(function (response) {
        console.log(response);
        router.replace("/tutor/profile");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <main id="main" style={{ marginTop: "6.25rem" }}>
        <div className="container light-style flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
          <form onSubmit={handleSubmit(onSubmit)} name="edit-profile">
            <div className="card overflow-hidden">
              <div className="row no-gutters row-bordered row-border-light">
                <div className="col-md-3 pt-0">
                  <div className="list-group list-group-flush account-settings-links">
                    <a
                      style={{ backgroundColor: "#4fb2bf" }}
                      className="list-group-item list-group-item-action active"
                      data-toggle="list"
                      href="#account-general"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content">
                    <div id="account-general">
                      <hr className="border-light m-0" />
                      <div className="card-body" style={{ color: "red" }}>
                        <div className="form-group">
                          <label className="fw-bold form-label text-dark ">
                            BIO (Not more than 30 words)
                          </label>
                          <br />
                          {errors.bio && "Bio is required"}
                          <textarea
                            className="form-control"
                            rows="2"
                            {...register("bio", {
                              required: true,
                            })}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label className="fw-bold form-label text-dark ">
                            Name
                          </label>
                          <br />
                          {errors.name?.type === "required" &&
                            "Name is required"}
                          <input
                            type="text"
                            className="form-control mb-1"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: true })}
                          />
                        </div>
                        <div className="form-group">
                          <label className="fw-bold form-label text-dark">
                            DOB
                          </label>
                          <br />
                          {errors.date && "DOB is required"}
                          <input
                            type={focus}
                            onBlur={() => setFocus("text")}
                            className="form-control mb-1"
                            id="dob"
                            onFocus={() => setFocus("date")}
                            placeholder="Date Of Birth"
                            {...register("date", {
                              required: true,
                            })}
                          />
                        </div>

                        <div className="form-group">
                          <label className="fw-bold form-label text-dark">
                            State
                          </label>
                          <br />
                          {errors.state && "State is required"}
                          <select
                            className="form-select mb-1"
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
                          <label className="fw-bold form-label text-dark">
                            City
                          </label>
                          <br />
                          {errors.city && "City is required"}
                          <select
                            className="form-select mb-1"
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
                        <div className="form-group">
                          <label className="fw-bold form-label text-dark">
                            Mobile Number
                          </label>
                          <br />
                          {errors.mobile?.type === "required" &&
                            "Mobile number is required"}
                          {errors.mobile?.type === "pattern" &&
                            "Enter a valid mobile number"}
                          <input
                            type="number"
                            className="form-control mb-1"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right mt-3">
              <button type="submit" className="default-button">
                Save changes
              </button>
              &nbsp;
              <button type="button" className="default-button">
                Cancel
              </button>
              <br />
              <br />
              <br />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default EditProfile;
