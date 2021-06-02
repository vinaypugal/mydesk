import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const subject = () => {
  return (
    <>
      <Header />
      <main id="main" data-aos="fade-in">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Subjects</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">
          <h1 align="center">Stateboard</h1>
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="../assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - Tamil</h3>
                    </div>
                    <a href="9th-state.html">
                      View More <i className="bx bx-link" />
                    </a>{" "}
                    <br />
                    <br />
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore. Et
                      architecto provident deleniti facere
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="../assets/img/course2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - English</h3>
                    </div>
                    <a href="10th-state.html">
                      View More <i className="bx bx-link" />
                    </a>{" "}
                    <br />
                    <br />
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore. Et
                      architecto provident deleniti facere{" "}
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="../../assets/img/course1.png"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - Mathematics</h3>
                    </div>
                    <a href="11th-state.html">
                      View More <i className="bx bx-link" />
                    </a>{" "}
                    <br />
                    <br />
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore. Et
                      architecto provident deleniti facere{" "}
                    </p>
                  </div>
                </div>{" "}
                {/* End Course Item*/}
              </div>
            </div>
          </div>
        </section>
        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="../assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - Science</h3>
                    </div>
                    <a href="9th-state.html">
                      View More <i className="bx bx-link" />
                    </a>{" "}
                    <br />
                    <br />
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore. Et
                      architecto provident deleniti facere
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    style={{ height: "172.53px", width: 259 }}
                    src="../assets/img/course2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - Social Science</h3>
                    </div>
                    <a href="10th-state.html">
                      View More <i className="bx bx-link" />
                    </a>{" "}
                    <br />
                    <br />
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore. Et
                      architecto provident deleniti facere{" "}
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default subject;
