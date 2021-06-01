import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const state9th = () => {
  return (
    <div>
      <>
        {" "}
        <Header />
        <main id="main">
          {/* ======= Breadcrumbs ======= */}
          <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
              <h2>Grade 9 - Stateboard</h2>
            </div>
          </div>
          {/* End Breadcrumbs */}
          {/* ======= Cource Details Section ======= */}
          <section id="course-details" className="course-details">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-8">
                  <img
                    style={{ width: 700, height: 350 }}
                    src="assets/img/course1.png"
                    className="img-fluid"
                    alt
                  />
                  <h3>About Tutor</h3>
                  <p>
                    Qui et explicabo voluptatem et ab qui vero et voluptas. Sint
                    voluptates temporibus quam autem. Atque nostrum voluptatum
                    laudantium a doloremque enim et ut dicta. Nostrum ducimus
                    est iure minima totam doloribus nisi ullam deserunt.
                    Corporis aut officiis sit nihil est. Labore aut sapiente
                    aperiam. Qui voluptas qui vero ipsum ea voluptatem. Omnis et
                    est. Voluptatem officia voluptatem adipisci et iusto
                    provident doloremque consequatur. Quia et porro est. Et qui
                    corrupti laudantium ipsa. Eum quasi saepe aperiam qui
                    delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui
                    numquam eum iste est dolorum. Rem voluptas ut sit ut.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Tutor Name</h5>
                    <p>
                      <a href="#">Walter White</a>
                    </p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Subject</h5>
                    <p>Mathematics</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Course Fee</h5>
                    <p>Rs.1000</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Schedule</h5>
                    <p>5.00 pm - 7.00 pm</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <form className="enrollment-form" action="#">
                      <div className="form-group">
                        Subject: <br />
                        <input
                          type="text"
                          className="form-control item"
                          id="subject"
                          defaultValue="Mathematics"
                        />
                      </div>{" "}
                      <br />
                      <div className="form-group">
                        Preferred Mode: <br />
                        <select
                          type="text"
                          className="form-control item"
                          id="mode"
                        >
                          <option>Private</option>
                          <option>Regular</option>
                        </select>
                      </div>{" "}
                      <br />
                      <div className="form-group">
                        <button
                          style={{ backgroundColor: "#4fb2bf", color: "white" }}
                          type="button"
                          className="btn btn-block create-account"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Cource Details Section */}
          {/* ======= Cource Details Section ======= */}
          <section id="course-details" className="course-details">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-8">
                  <img
                    style={{ width: 700, height: 350 }}
                    src="assets/img/course1.png"
                    className="img-fluid"
                    alt
                  />
                  <h3>About Tutor</h3>
                  <p>
                    Qui et explicabo voluptatem et ab qui vero et voluptas. Sint
                    voluptates temporibus quam autem. Atque nostrum voluptatum
                    laudantium a doloremque enim et ut dicta. Nostrum ducimus
                    est iure minima totam doloribus nisi ullam deserunt.
                    Corporis aut officiis sit nihil est. Labore aut sapiente
                    aperiam. Qui voluptas qui vero ipsum ea voluptatem. Omnis et
                    est. Voluptatem officia voluptatem adipisci et iusto
                    provident doloremque consequatur. Quia et porro est. Et qui
                    corrupti laudantium ipsa. Eum quasi saepe aperiam qui
                    delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui
                    numquam eum iste est dolorum. Rem voluptas ut sit ut.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Tutor Name</h5>
                    <p>
                      <a href="#">Deboral Catherine</a>
                    </p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Subject</h5>
                    <p>Science</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Course Fee</h5>
                    <p>Rs.1000</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Schedule</h5>
                    <p>5.00 pm - 7.00 pm</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <form className="enrollment-form" action="#">
                      <div className="form-group">
                        Subject: <br />
                        <input
                          type="text"
                          className="form-control item"
                          id="subject"
                          defaultValue="Science"
                        />
                      </div>{" "}
                      <br />
                      <div className="form-group">
                        Preferred Mode: <br />
                        <select
                          type="text"
                          className="form-control item"
                          id="mode"
                        >
                          <option>Private</option>
                          <option>Regular</option>
                        </select>
                      </div>{" "}
                      <br />
                      <div className="form-group">
                        <button
                          style={{ backgroundColor: "#4fb2bf", color: "white" }}
                          type="button"
                          className="btn btn-block create-account"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Cource Details Section */}
        </main>
        <Footer />
      </>
    </div>
  );
};

export default state9th;
