import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="/">
            <a>MYDESK</a>
          </Link>
        </h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link href="/">
                <a className="active">Home</a>
              </Link>
            </li>
            <li>
              <a className="active" href="about.html">About</a>
            </li>
            <li>
              <a className="active" href="courses.html">Courses</a>
            </li>
            <li>
              <a className="active" href="trainers.html">Tutors</a>
            </li>
            <li>
              <a className="active" href="faq.html">FAQ</a>
            </li>

            <li>
              <Link href="/login">
                <a className="active" >Sign In/Register </a>
              </Link>
            </li>
            <li>
              <a className="active" href="contact.html">Contact</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
        <a href="courses.html" className="get-started-btn">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
