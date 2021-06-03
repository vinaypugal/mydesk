import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dashboard = () => {
  return (
    <div>
      <Header />
      <main id="main" data-aos="fade-in" style={{ marginTop: "6.25rem" }}>
        {" "}
        <br />
        <br />
        <br />
        <div className="container">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">&nbsp;&nbsp;Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">Preethi</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">&nbsp;&nbsp;Board</h6>
                </div>
                <div className="col-sm-9 text-secondary">Stateboard</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">&nbsp;&nbsp;Grade</h6>
                </div>
                <div className="col-sm-9 text-secondary">11,12</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">&nbsp;&nbsp;Subjects</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Physics, Computer Science
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">&nbsp;&nbsp;Mode</h6>
                </div>
                <div className="col-sm-9 text-secondary">Regular</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <a
                    className="btn btn-block default-button"
                    href="edit-dashboard-tutor.html"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">
          <h1 align="center">Subjects Handled</h1>
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - Mathematics</h3>
                    </div>
                    <a className="get-started-btn" href="#">
                      View Students
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default dashboard;
