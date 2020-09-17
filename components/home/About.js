import { useRef } from "react";

const About = () => {
  let aboutElement = useRef(null);

  return (
    <section id="about" ref={aboutElement}>
      <div className="about-text">
        <h2>Hakkımızda</h2>
        <p>
          Bizler Ev Hanımları olarak, sofranıza titizlikle hazırladığımız,
          isteğinize özel ve lezzetli dilediğiniz yemeği ulaştırmayı
          hedefliyoruz.
        </p>
        <p>
          Ev Hanımlığı; çalışan eşine, çocuklarına en temiz evi, en temiz
          kıyafetleri, en lezzetli tatları, en sağlıklı şekilde hazırlamak için
          çabalamaktır.
        </p>
        <p>
          Biz ev hanımları olarak mesleğimizde ki tüm tecrübelerimizle, bir anne
          olmanın sorumluluğunda : En temiz, En lezzetli, En doğal, En sağlıklı,
          En iyi el lezzetlerimizi mutfak kültürümüzü geleceğe taşımak adına
          size sunuyoruz...
        </p>
      </div>
      <figure className="about-images">
        <img src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/borek_wIUDs-odgA.jpg" />
      </figure>
    </section>
  );
};

export default About;
