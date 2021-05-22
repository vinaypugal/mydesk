import { RecoilRoot } from "recoil";
import "../styles/opensans.css";
import "../styles/animate.css/animate.min.css";
import "../styles/aos/aos.css"
import "../styles/bootstrap/css/bootstrap.min.css";
import "../styles/bootstrap-icons/bootstrap-icons.css";
import "../styles/boxicons/css/boxicons.min.css";
import "../styles/remixicon/remixicon.css";
import "../styles/swiper/swiper-bundle.min.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
