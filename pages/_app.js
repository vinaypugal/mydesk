import { UserProvider } from "@auth0/nextjs-auth0";
import Aos from "aos";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Loading from "../components/Loading";
import "../styles/opensans.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <UserProvider>
      <RecoilRoot>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </RecoilRoot>
    </UserProvider>
  );
}

export default MyApp;
