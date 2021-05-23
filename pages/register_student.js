import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register_student = ({ loading }) => {
  const [currentTab, setCurrentTab] = useState(1);

  const goNext = () => {
    setCurrentTab((currentTab) => currentTab + 1);
  };
  const goPrev = () => {
    setCurrentTab((currentTab) => currentTab - 1);
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Register as a Student</h2>
            <p>Kindly provide the below mentioned details</p>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Login Section ======= */}
        <section id="contact" className="contact">
          <div className="registration-form">
            <div>
              <div className="form-icon">
                <span>
                  <i className="icon icon-user" />
                </span>
              </div>
              {currentTab === 1 && (
                <form>
                  <div className="tab" style={{ display: "block" }}>
                    {" "}
                    Personal Information <br />
                    <br />
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control item"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="username"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control item"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control item"
                        id="dob"
                        placeholder="Date Of Birth"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="city"
                        placeholder="City of Residence"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="state"
                        placeholder="State"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control item"
                        id="mobile"
                        placeholder="10 digit mobile number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control item"
                        id="mobile-parent"
                        placeholder="Parent Contact Number"
                      />
                    </div>
                  </div>
                </form>
              )}
              {currentTab === 2 && (
                <form>
                  <div className="tab" style={{ display: "block" }}>
                    {" "}
                    Educational Information
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="school"
                        placeholder="School"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="board"
                        placeholder="Board"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control item"
                        id="class"
                        placeholder="Class"
                      />
                    </div>
                  </div>
                </form>
              )}
              {currentTab === 3 && (
                <form>
                  <div className="tab" style={{ display: "block" }}>
                    Preference
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="mode"
                        placeholder="Tuition Mode"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-block create-account"
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>
              )}
              <div style={{ overflow: "auto" , display : "block"}}>
                <div style={{ float: "right" }}>
                  {currentTab !== 1 && (
                    <button
                      type="button"
                      className="btn btn-block create-account"
                      id="prevBtn"
                      onClick={goPrev}
                    >
                      Previous
                    </button>
                  )}
                  {currentTab !== 3 && (
                    <button
                      type="button"
                      className="btn btn-block create-account"
                      id="nextBtn"
                      onClick={goNext}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <span
                  className={`step ${currentTab === 1 && "active"} ${
                    currentTab > 1 && "finish"
                  }`}
                />
                <span
                  className={`step  ${currentTab === 2 && "active"} ${
                    currentTab > 2 && "finish"
                  }`}
                />
                <span className={`step  ${currentTab === 3 && "active"}`} />
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      <Footer />
      {/* ======= Footer ======= */}
      {/* End Footer */}
      <div id="preloader" style={{ display: `${!loading && "none"}` }} />
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default Register_student;
