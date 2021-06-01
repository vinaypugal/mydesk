import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Header = () => {
  const [mobile, setMobile] = useState(false);
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const isSign =
    router.pathname === "/login" ||
    router.pathname === "/register_tutor" ||
    router.pathname === "/register_student";

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="/">
            <a>MYDESK</a>
          </Link>
        </h1>
        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${
            mobile && "navbar-mobile"
          }`}
        >
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname === "/" && "active"}>Home</a>
              </Link>
            </li>
            <li>
              <a className={router.pathname === "/about" && "active"}>About</a>
            </li>
            <li>
              <Link href="/courses">
                <a className={router.pathname === "/courses" && "active"}>
                  Courses
                </a>
              </Link>
            </li>
            <li>
              <a className={router.pathname === "/" && "faq"}>FAQ</a>
            </li>
            {!user && (
              <li>
                <Link href="/api/auth/login">
                  <a className={isSign && "active"}> Sign In/Register </a>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link href="/api/auth/logout">
                  <a>Logout </a>
                </Link>
              </li>
            )}
            <li>
              <Link href="/contact">
                <a className={router.pathname === "/contact" && "active"}>
                  Contact
                </a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>My Account</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    Dashboard
                    <i style={{ fontSize: "20px" }} className="bx bx-medal"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    My Profile
                    <i style={{ fontSize: "20px" }} className="bx bx-user"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <i
            className={`bi ${mobile ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={() => setMobile((value) => !value)}
          />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Header;
