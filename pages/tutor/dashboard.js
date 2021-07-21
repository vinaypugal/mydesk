import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import axios from "axios";
import useCheck from "@/utils/useCheck";
import useSWR, { mutate } from "swr";
import { useUser } from "@auth0/nextjs-auth0";
import Loading from "@/components/Loading";
import notify from "@/utils/notify";
import toast from "react-hot-toast";

const dashboard = () => {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  useCheck(user, "tutor");
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/tutor", fetcher);
  if (!data) return <Loading />;
  if (!data.profile) {
    return <Loading />;
  }
  if (error) return <h1>failed to load</h1>;
  const deleteNotify = (subjectid) => {
    toast(
      (t) => (
        <span className="d-flex flex-column w-100 ">
          <center>Are You Sure?</center>
          <div className="d-flex justify-content-around mt-2 ">
            <button
              className="btn btn-light"
              onClick={() => {
                deleteSubject(subjectid);
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>

            <button
              className="btn btn-light"
              onClick={() => toast.dismiss(t.id)}
            >
              Dismiss
            </button>
          </div>
        </span>
      ),
      {
        duration: 20000,
        position: "top-center",
        style: {
          border: "1px solid #4FB2BF",
          padding: "20px",
          width: "450px",
          backgroundColor: "#4FB2BF",
          color: "#fff",
        },
      }
    );
  };

  const deleteSubject = async (subjectid) => {
    try {
      const res = await axios.delete("/api/tutor", {
        data: {
          subjectid,
        },
      });
      mutate("/api/tutor", { ...data });
      notify("Success", "success");
    } catch {
      notify("Error Occured", "error");
    }
  };
  return (
    <div>
      <Header />
      <main id="main" data-aos="fade-in" style={{ marginTop: "6.25rem" }}>
        <div className="container">
          <div>
            {/* <h1 align="center">Create Subject</h1> */}
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12" align="center">
                  <Link href="/tutor/addsubjects">
                    <a className="btn btn-block default-button">Add Subjects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======= Courses Section ======= */}
      </main>
      <section id="courses" className="courses" style={{ padding: "20px" }}>
        <h1 align="center">Subjects Handled</h1>
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            {data.profile.subjects.map((subject) => (
              <div
                className="col-lg-4 col-md-4 d-flex  align-items-stretch"
                key={subject._id}
              >
                <div className="course-item">
                  <center className=" mt-4">
                    <h3>{subject.board}</h3>
                  </center>
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="../assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex flex-column align-items-center mb-3">
                      <h5>
                        Class {subject.class} - {subject.name}
                      </h5>
                      <a className="get-started-btn" href="#">
                        View Students
                      </a>

                      <a
                        className="get-started-btn mt-2"
                        href="#"
                        style={{ backgroundColor: "red" }}
                        onClick={() => deleteNotify(subject._id)}
                      >
                        Delete
                        <i className="bi bi-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default dashboard;
