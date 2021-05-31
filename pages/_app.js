import { Router } from "next/router";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Loading from "../components/Loading";
import "../styles/opensans.css";
import "../styles/style.css";
import { UserProvider } from "@auth0/nextjs-auth0";
function MyApp({ Component, pageProps }) {
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
