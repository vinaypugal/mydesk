import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet"></link>
        <meta name="theme-color" content="#9AD3DA" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="assets/vendor/aos/aos.js"></script>
          <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          {/* <script src="assets/vendor/php-email-form/validate.js"></script> */}
          <script src="assets/vendor/purecounter/purecounter.js"></script>
          <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
