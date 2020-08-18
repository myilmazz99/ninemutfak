import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="contact-option-list">
        <li className="email">
          <h4>
            <FontAwesomeIcon icon="envelope" /> Email
          </h4>
          <p>info@ninemutfak.com</p>
        </li>
        <li className="phone">
          <h4>
            <FontAwesomeIcon icon="phone" /> Telefon/Whatsapp
          </h4>
          <p>+90 531 283 61 99</p>
        </li>
        <li className="address">
          <h4>
            <FontAwesomeIcon icon="map-marker-alt" /> Adres
          </h4>
          <p>Güzelyalı/İZMİR</p>
        </li>
        <li className="social">
          <h4>Sosyal Medya</h4>
          <div>
            <span>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </span>
            <span>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </span>
          </div>
        </li>
      </ul>
      <section className="copyright">© 2019 Tüm hakları saklıdır.</section>
    </footer>
  );
};

export default Footer;
