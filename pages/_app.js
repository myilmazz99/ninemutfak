import "../styles/style.scss";
import Layout from "../components/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { UIProvider } from "../components/contextApi/uiStore";

library.add(fab, faArrowRight, faEnvelope, faPhone, faMapMarkerAlt);

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
