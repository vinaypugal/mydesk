import React from "react";
import Footer from "../../components/Footer";
// import Header from "../components/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
const Courses = () => {
  return (
    <>
      <Header />
      <main id="main" data-aos="fade-in">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Courses</h2>
            <p>
              Here are the list of subjects covered, which has been classified
              into 3 categories as Private Class, Regular Class, Hourly Class
              for Stateboard and CBSE
            </p>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">
          <h1 align="center">Stateboard</h1>
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9</h3>
                    </div>
                    <Link href="/courses/subjects/9/stateboard">
                      <a>
                        View More
                        <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 10</h3>
                    </div>
                    <Link href="/courses/subjects/10/stateboard">
                      <a>
                        View More
                        <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course1.png"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 11</h3>
                    </div>
                    <Link href="/courses/subjects/11/stateboard">
                      <a>
                        View More
                        <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpcMmUdSSqCz_jjiMGO0-lP6GUlHixfL-oqq136yErCPUcTfQcCXSMp1OOvyUU7Xz95A&usqp=CAU"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 12</h3>
                    </div>
                    <Link href="/courses/subjects/12/stateboard">
                      <a>
                        View More
                        <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
            </div>
          </div>
        </section>
        <section id="courses" className="courses">
          <h1 align="center">CBSE</h1>
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9</h3>
                    </div>
                    <Link href="/courses/subjects/9/cbse">
                      <a>
                        View More <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 10</h3>
                    </div>
                    <Link href="/courses/subjects/10/cbse">
                      <a>
                        View More <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course1.png"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 11</h3>
                    </div>
                    <Link href="/courses/subjects/11/cbse">
                      <a>
                        View More <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpcMmUdSSqCz_jjiMGO0-lP6GUlHixfL-oqq136yErCPUcTfQcCXSMp1OOvyUU7Xz95A&usqp=CAU"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 12</h3>
                    </div>
                    <Link href="/courses/subjects/12/cbse">
                      <a>
                        View More <i className="bx bx-link" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Course Item*/}
            </div>
          </div>
        </section>
        {/* End Courses Section */}
      </main>
      {/* End #main */}
      <Footer />
    </>
  );
};

export default Courses;
