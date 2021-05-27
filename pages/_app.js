import { Router } from "next/router";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Loading from "../components/Loading";
import "../styles/opensans.css";
import "../styles/style.css";

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
