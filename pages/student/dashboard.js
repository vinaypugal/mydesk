import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main id="main" data-aos="fade-in">
        <br />
        <br />
        <br />
        <section id="courses" className="courses">
          <h1 align="center">Subjects Enrolled</h1>
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-4 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="assets/img/course3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Class 9 - Mathematics</h3>
                    </div>
                    <p>Tutor - Mithra</p>
                    <p>Mode - Regular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
