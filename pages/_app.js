import { Router } from "next/router";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Loading from "../components/Loading";
import "../styles/animate.css/animate.min.css";
import "../styles/aos/aos.css";
import "../styles/bootstrap-icons/bootstrap-icons.css";
import "../styles/bootstrap/css/bootstrap.min.css";
import "../styles/boxicons/css/boxicons.min.css";
import "../styles/opensans.css";
import "../styles/remixicon/remixicon.css";
import "../styles/style.css";
import "../styles/swiper/swiper-bundle.min.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <RecoilRoot>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </RecoilRoot>
  );
}

export default MyApp;
