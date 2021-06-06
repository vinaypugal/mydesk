import Header from "@/components/Header";
import states from "@/utils/states";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import useSWR from "swr";
import Loading from "components/Loading";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCheck from "utils/useCheck";

const EditProfile = () => {
  const { user } = useUser();
  // useCheck(user, "student");
  const router = useRouter();
  if (!user) {
    return null;
  }

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/student", fetcher);

  if (error) return <h1>failed to load</h1>;
  if (!data) return <Loading />;
  console.log(data);
  const [focus, setFocus] = useState("text");
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    shouldFocusError: true,
    defaultValues: {},
  });
  const selectedstate = watch("state");

  const onSubmit = (data) => {
    axios({
      method: "patch",
      url: "/api/student",
      data: data,
    })
      .then(function (response) {
        console.log(response);
        router.replace("/student/profile");
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
                    <input type="hidden" value={data._id}/>
                    <div id="account-general">
                      <hr className="border-light m-0" />
                      <div className="card-body" style={{ color: "red" }}>
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
                            value={data.profile.name}
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
                            value={data.profile.dob}
                            onFocus={() => setFocus("date")}
                            placeholder="Date Of Birth"
                            {...register("dob", {
                              required: true,
                            })}
                          />
                        </div>
                        <div className="form-group">
                          <label className="fw-bold form-label text-dark">
                            Class
                          </label>
                          <br />
                          {errors.class?.type === "pattern" && "Select a class"}
                          <select
                            className="form-select mb-1"
                            id="class"
                            name="class"
                            value={data.profile.class}
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
                          <label className="fw-bold form-label text-dark">
                            Board
                          </label>
                          <br />
                          {errors.board?.type === "pattern" && "Select a Board"}
                          <select
                            type="text"
                            className="form-select mb-1"
                            id="board"
                            placeholder="stateboard/CBSE"
                            name="board"
                            value={data.profile.board}
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
                          <label className="fw-bold form-label text-dark">
                            School
                          </label>
                          <br />
                          {errors.school && "School name is required"}
                          <input
                            type="text"
                            className="form-control mb-1"
                            id="school"
                            value={data.profile.school}
                            placeholder="School"
                            {...register("school", {
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
                            value={data.profile.state}
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
                            value={data.profile.city}
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
                            value={data.profile.mobile}
                            placeholder="10 digit mobile number"
                            {...register("mobile", {
                              required: true,
                              pattern: /^[6-9]\d{9}$/,
                            })}
                          />
                        </div>
                        <div className="form-group">
                          <label className="fw-bold form-label text-dark">
                            Parent Mobile Number
                          </label>
                          <br />
                          {errors.parent?.type === "required" &&
                            "Parent mobile number is required"}
                          {errors.parent?.type === "pattern" &&
                            "Enter a valid mobile number"}
                          <input
                            type="number"
                            className="form-control mb-1"
                            id="mobile-parent"
                            maxLength="10"
                            placeholder="Parent Contact Number"
                            value={data.profile.parentmobile}
                            {...register("parentmobile", {
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
