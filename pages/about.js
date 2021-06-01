import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const About = () => {
  return (
    <>
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <img src="assets/img/home3.png" className="img-fluid" alt />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Who we are and what do we do?</h3>
                <p className="fst-italic">
                  We are a team of zealous mentors thriving to make online
                  classes a bit more interesting and comfortable for the
                  students. We are trying to connect the tutors and students in
                  an easier way with the help of this platform. In this way,
                  both the students and tutors are mutually benefited. Also we
                  are responsible to explain how this platform works for the
                  students and the tutors.
                </p>
                <h3>For Students</h3>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> The students have to
                    register themselves <a href="register_student.html" /> first
                    by providing the necessary information.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> After successful
                    registration, the student can start the free trial for the
                    required subject which will be continued for a week.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    After a week, the student can enroll for actual classes
                    either private or regular classes.
                  </li>
                </ul>
                <h3>For Tutors</h3>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> The tutors must fill
                    the information form by providing the necessary details,
                    after which an interview will be happening
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Our team will select
                    the tutors based on the performance in the interview
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    The selected tutors will then be given username and password
                    with which they can be able to login to their page.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
      {/* End #main */}
      <Footer />
    </>
  );
};

export default About;
