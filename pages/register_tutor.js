import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Register_tutor = () => {
  return (
    <>
  <Header/>
    {/* End Header */}
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Register as a Tutor</h2>
        <p>Kindly provide the below mentioned details</p>
      </div>
    </div>{/* End Breadcrumbs */}
    {/* ======= Login Section ======= */}
    <section id="contact" className="contact">
      <div className="registration-form">
        <form>
          <div className="form-icon">
            <span><i className="icon icon-user" /></span>
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control item" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control item" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="school" placeholder="School Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="class" placeholder="Class - 9/10/11/12" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="board" placeholder="stateboard/CBSE" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control item" id="mobile" placeholder="10 digit mobile number" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control item" id="mobile-parent" placeholder="Parent Contact Number" />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-block create-account">Create Account</button>
          </div>
        </form>
      </div></section>{/* End Contact Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <Footer />
  {/* End Footer */}
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</>

  )
}

export default Register_tutor
