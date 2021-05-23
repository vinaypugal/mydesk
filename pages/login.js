import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = ({loading}) => {
  return (
    <>
      {/* ======= Header ======= */}
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Login</h2>
            <p>Login with your credentials</p>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* ======= Login Section ======= */}
        <section id="contact" className="contact">
          <div className="registration-form">
            <form>
              <div className="form-icon">
                <span>
                  <i className="icon icon-user" />
                </span>
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
                <button type="button" className="btn btn-block create-account">
                  Login
                </button>
              </div>
              <br />
              <p>Do not have an account?</p> <br />
              <Link href="/register_student">
                <a> Register Now as Student</a>
              </Link>
              <br />
              <a href="register_tutor.html"> Register Now as Tutor</a>
            </form>
          </div>
        </section>
        {/* End Contact Section */}
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

export default Login;
