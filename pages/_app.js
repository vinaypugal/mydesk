import { Router } from "next/router";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
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
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <RecoilRoot>
      {loading ? <h1>Loading...</h1> : <Component {...pageProps} />}
    </RecoilRoot>
  );
}

export default MyApp;
