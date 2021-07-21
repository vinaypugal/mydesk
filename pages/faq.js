import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const About = () => {
  return (
    <>
      <Header/>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p>Here we present you, the answers for some of the frequently asked questions from the clients. Hope it helps you and if not feel free to contact us.</p>
      </div>
    </div>{/* End Breadcrumbs */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Do we have any free trials for the courses? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                 Yes, you will be getting a free trial of one week for all the courses you enroll.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">How to enroll for a particular course? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                 First, create an account in My Desk Tutor, then fill in your personal detail, then go to the courses section then choose your subject and pick your favourite tutors and then enroll for free <br/>
Sign up-> courses tab-> Class-> Subject-> Tutors-> Enroll
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Will my classes clash when I take more than one course? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                 No, you will be provided a timetable for every course you enroll in.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">What is the private, regular, and hourly mode of tuition? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  <b>Private tuition</b> -  You will be provided with a private tutor and you will be the only student studying under him/her <br/>
                  <b>Regular tuition</b> - You will be provided with a tutor of your choice and you will be studying with a group of other students  <br/>
                  <b>Hourly tuition</b> - You can have one on one session with the tutor and clear your doubts.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={500}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">How do I pay my fees? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                 Once your free trial is completed you will be provided with an option to pay for that particular subject and mode of tuition.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>{/* End Frequently Asked Questions Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <Footer/>
    </>
  );
};

export default About;
