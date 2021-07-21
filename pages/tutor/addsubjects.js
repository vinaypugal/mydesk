import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { useForm } from "react-hook-form";
import subjects from "@/utils/subjects";
import axios from "axios";
import { useRouter } from "next/router";
import notify from "@/utils/notify";

const addsubjects = () => {
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
  const selected = watch(["board", "class"]);
  const onSubmit = (data) => {
    axios({
      method: "put",
      url: "/api/tutor",
      data: data,
    })
      .then(function (response) {
        router.replace("/tutor/dashboard");
        notify("Added subject", "success");
      })
      .catch(function (error) {
        if (error.response.data === "Already exists") {
          notify("Subject already added", "error");
        }
      });
  };
  return (
    <div>
      <Header />
      <main id="main">
        <br />
        <br />
        <br />
        <br />
        <div className="container light-style flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-4">
            Dashboard for Subject Creation
          </h4>
          <form name="edit-dashboard-tutor" onSubmit={handleSubmit(onSubmit)}>
            <div className="row no-gutters row-bordered row-border-light">
              <div className="col-md-9">
                <div className="card-body" style={{ color: "red" }}>
                  <div className="form-group">
                    <label className="form-label fw-bold text-dark d-block">
                      Class
                    </label>
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
                  <div className="form-group">
                    <label className="form-label fw-bold text-dark d-block">
                      Board
                    </label>
                    {errors.board?.type === "pattern" && "Select a Board"}
                    <select
                      type="text"
                      className="form-select item"
                      id="board"
                      placeholder="stateboard/CBSE"
                      name="board"
                      {...register("board", {
                        required: true,
                        pattern: /(^cbse$)|(^stateboard$)/,
                      })}
                    >
                      <option selected disabled>
                        STATE BOARD/CBSE
                      </option>
                      <option value="stateboard">STATEBOARD</option>
                      <option value="cbse">CBSE</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label fw-bold text-dark d-block">
                      Subjects
                    </label>
                    {errors.subject?.type === "pattern" && "Choose a Subject"}
                    <select
                      type="text"
                      name="grade"
                      className="form-select item"
                      {...register("subject", {
                        required: true,
                        pattern: /^(?!(Choose Subject))/,
                      })}
                    >
                      <option selected disabled>
                        Choose Subject
                      </option>
                      {subjects
                        .filter(
                          (item) =>
                            item.class === selected[1] &&
                            item.board === selected[0]
                        )
                        .map((subject) => (
                          <option
                            value={subject.name}
                            style={{ textTransform: "capitalize" }}
                          >
                            {subject.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left mt-3">
              <button type="submit" className="default-button">
                Create Subject
              </button>
              &nbsp;
              <button
                type="button"
                className="default-button"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <br />
              <br />
              <br />
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default addsubjects;
