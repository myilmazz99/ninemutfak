import Head from "next/head";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
