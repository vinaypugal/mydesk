import Footer from "../components/Footer";
import Header from "../components/Header";
const Home = () => {
  
  return (
    <>
      <Header />
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <h1>
            Learn From Home,
            <br />
            Nail The Exams!
          </h1>
          <a href="courses.html" className="btn-get-started">
            Get Started
          </a>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <img src="assets/img/home2.gif" className="img-fluid" alt />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Online Learning is the New Usual</h3>
                <p className="fst-italic">
                  The world has changed and things that had been carried out in
                  a traditional manner has become more easier and comfortable.
                  Students need not roam around searching for a good tutor
                  hereafter.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" />
                    Try out our Free Trial to choose your favourite tutor
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    Enroll after Free Trial
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    And that's it! You're in
                  </li>
                </ul>
                <p>
                  If you cannot be bound to a regular routine, you can also go
                  for hourly classes where you can hire a tutor for an hour to
                  clear all your doubts.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Why Us Section ======= */}
        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Us?</h3>
                  <p>
                    Our ultimate aim is to create a stimulating environment,
                    where students can have a complete focus on their learning
                    and the tutors can can take classes in the comfort of their
                    home.
                  </p>
                  <div className="text-center">
                    <a href="about.html" className="more-btn">
                      Learn More <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-pen" />
                        <h4>Flexible Plans</h4>
                        <p>
                          Students can choose from Private/Regular/Hourly
                          classes based on their needs
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-time" />
                        <h4>Flexible Timings</h4>
                        <p>
                          The option for the students to choose from the given
                          time slots makes them learn in their comfortable time.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-medal" />
                        <h4>Easy Learning</h4>
                        <p>
                          Flexible Plans + Flexible Timings + Favourite Tutors =
                          Better learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End Why Us Section */}
        {/* ======= Popular Courses Section ======= */}
        <section id="popular-courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Courses</h2>
              <p>Popular Courses</p>
            </div>
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="assets/img/course-1.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Regular</h4>
                      <p className="price">$169</p>
                    </div>
                    <h3>
                      <a href="course-details.html">Mathematics</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    src="assets/img/course-2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Regular</h4>
                      <p className="price">$250</p>
                    </div>
                    <h3>
                      <a href="course-details.html">Physics</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    src="assets/img/course-3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Hourly</h4>
                      <p className="price">$180</p>
                    </div>
                    <h3>
                      <a href="course-details.html">Mathematics</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
            </div>
          </div>
        </section>
        {/* End Popular Courses Section */}
        {/* ======= Trainers Section ======= */}
        <section id="trainers" className="trainers">
          <h1 align="center">The Pillars</h1>
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src="assets/img/trainers/trainer-1.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="member-content">
                    <h4>Walter White</h4>
                    <span>Web Development</span>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem.
                      Odio veritatis perspiciatis quaerat qui aut aut aut
                    </p>
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src="assets/img/trainers/trainer-2.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas
                      repellendus. In architecto rerum rerum temporibus
                    </p>
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src="assets/img/trainers/trainer-3.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="member-content">
                    <h4>William Anderson</h4>
                    <span>Content</span>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam
                      consequuntur qui porro et laborum toro des clara
                    </p>
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Home;
