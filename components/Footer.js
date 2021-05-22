const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>DREAM-TUTOR</h3>
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
              <p />
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Teaching</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Education</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Motivation</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Group for Updates</h4>
              <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <br />
                <br />
                <a href="#" className="whatsapp">
                  <i className="bx bxl-whatsapp" />
                </a>
                <a href="#" className="telegram">
                  <i className="bx bxl-telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>DREAM - TUTOR</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
